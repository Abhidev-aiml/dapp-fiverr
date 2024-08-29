import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

const maxAge = 3 * 24 * 60 * 60;
const createToken = (publicKey, userId) => {
  return jwt.sign({ publicKey, userId }, process.env.JWT_KEY, {
    expiresIn: maxAge,
  });
};

// Web3 Signup
export const signup = async (req, res) => {
  try {
    const { publicKey } = req.body;

    if (publicKey) {
      const existingUser = await prisma.user.findUnique({
        where: { publicKey },
      });

      if (existingUser) {
        return res.status(400).send("User already exists");
      }

      const user = await prisma.user.create({
        data: {
          publicKey,
          isProfileInfoSet: false,
        },
      });

      return res.status(201).json({
        user: { id: user?.id, publicKey: user?.publicKey },
        jwt: createToken(publicKey, user.id),
      });
    } else {
      return res.status(400).send("Public Key is required");
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
  }
};

// Web3 Login
export const login = async (req, res) => {
  try {
    const { publicKey } = req.body;

    if (publicKey) {
      const user = await prisma.user.findUnique({
        where: { publicKey },
      });

      if (!user) {
        return res.status(404).send("User not found");
      }

      return res.status(200).json({
        user: { id: user?.id, publicKey: user?.publicKey },
        jwt: createToken(publicKey, user.id),
      });
    } else {
      return res.status(400).send("Public Key is required");
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
  }
};

// Get User Info
export const getUserInfo = async (req, res) => {
  try {
    if (req?.userId) {
      const user = await prisma.user.findUnique({
        where: { id: req.userId },
      });
      return res.status(200).json({
        user: {
          id: user?.id,
          publicKey: user?.publicKey,
          image: user?.profileImage,
          username: user?.username,
          fullName: user?.fullName,
          description: user?.description,
          isProfileSet: user?.isProfileInfoSet,
        },
      });
    }
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

// Set User Info
export const setUserInfo = async (req, res) => {
  try {
    if (req?.userId) {
      const { userName, fullName, description } = req.body;
      if (userName && fullName && description) {
        const userNameValid = await prisma.user.findUnique({
          where: { username: userName },
        });
        if (userNameValid) {
          return res.status(200).json({ userNameError: true });
        }
        await prisma.user.update({
          where: { id: req.userId },
          data: {
            username: userName,
            fullName,
            description,
            isProfileInfoSet: true,
          },
        });
        return res.status(200).send("Profile data updated successfully.");
      } else {
        return res
          .status(400)
          .send("Username, Full Name, and description should be included.");
      }
    }
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === "P2002") {
        return res.status(400).json({ userNameError: true });
      }
    } else {
      return res.status(500).send("Internal Server Error");
    }
    throw err;
  }
};

// Set User Image
export const setUserImage = async (req, res) => {
  try {
    if (req.file) {
      if (req?.userId) {
        const date = Date.now();
        let fileName = "uploads/profiles/" + date + req.file.originalname;
        renameSync(req.file.path, fileName);

        await prisma.user.update({
          where: { id: req.userId },
          data: { profileImage: fileName },
        });
        return res.status(200).json({ img: fileName });
      }
      return res.status(400).send("Cookie Error.");
    }
    return res.status(400).send("Image not included.");
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};
