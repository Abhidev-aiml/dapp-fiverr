import { Router } from "express";
import {
  getUserInfo,
  login,
  setUserImage,
  setUserInfo,
  signup,
} from "../controllers/AuthControllers.js";
import { verifyToken } from "../middlewares/AuthMiddleware.js";
import multer from "multer";

const authRoutes = Router();
const upload = multer({ dest: "uploads/profiles/" });

// Routes
authRoutes.post("/signup", signup); // Handles web3 wallet signup
authRoutes.post("/login", login); // Handles web3 wallet login
authRoutes.post("/get-user-info", verifyToken, getUserInfo); // Retrieves user info, requires JWT token
authRoutes.post("/set-user-info", verifyToken, setUserInfo); // Sets user profile information, requires JWT token

authRoutes.post(
  "/set-user-image",
  verifyToken,
  upload.single("images"),
  setUserImage // Handles setting user profile image, requires JWT token
);

export default authRoutes;
