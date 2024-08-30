// src/components/AuthWrapper.js
import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import { useStateProvider } from "../context/StateContext";
import { reducerCases } from "../context/constants";
import ConnectPhantom from "./ConnectPhantom";
import ConnectMetaMask from "./ConnectMetaMask";
import ConnectBackpack from "./ConnectBackpack";
import axios from "axios";
import { LOGIN_ROUTE, SIGNUP_ROUTE } from "../utils/constants";

function AuthWrapper({ type }) {
  const [cookies, setCookies] = useCookies();
  const [{ showLoginModal, showSignupModal }, dispatch] = useStateProvider();
  const router = useRouter();

  useEffect(() => {
    if (cookies.jwt) {
      dispatch({ type: reducerCases.CLOSE_AUTH_MODAL });
      router.push("/dashboard");
    }
  }, [cookies, dispatch, router]);

  const handleWalletConnect = async (publicKey) => {
    try {
      if (publicKey) {
        // Authenticate with backend using the wallet's public address
        const { data } = await axios.post(
          type === "login" ? LOGIN_ROUTE : SIGNUP_ROUTE,
          { publicKey },
          { withCredentials: true }
        );
        console.log(publicKey);
        setCookies("jwt", { jwt: data.jwt });
        dispatch({ type: reducerCases.CLOSE_AUTH_MODAL });

        if (data.user) {
          dispatch({ type: reducerCases.SET_USER, userInfo: data.user });
          window.location.reload();
        }
      } else {
        alert("No wallet connected. Please connect your wallet first.");
      }
    } catch (err) {
      console.log("Authentication error", err);
      alert("Authentication failed. Please try again.");
    }
  };

  const CloseModal = () => {
    dispatch({ type: reducerCases.TOGGLE_SIGNUP_MODAL, showSignupModal: false });
    dispatch({ type: reducerCases.TOGGLE_LOGIN_MODAL, showLoginModal: false });
  };

  return (
    <div className="fixed top-0 z-[100]">
      <div className="h-[100vh] w-[100vw] backdrop-blur-md fixed top-0" id="blur-div"></div>
      <div className="h-[100vh] w-[100vw] flex flex-col justify-center items-center">
        <div
          className="fixed relative z-[101] max-w-lg px-4 bg-white rounded shadow w-full flex flex-col justify-center items-center"
          id="auth-modal"
        >
          <button className="absolute top-20 right-8" style={{ top: "20px" }} onClick={CloseModal}>
            x
          </button>
          <div className="flex flex-col justify-center items-center p-8 gap-7">
            <h3 className="text-3xl font-semibold text-slate-700 mb-10">
              {type === "login" ? "Login" : "Sign"} in with Web3 Wallet
            </h3>
            <div className="w-full flex flex-col gap-5 items-center">
              {/* Connect Wallet Components */}
              <ConnectPhantom onConnect={handleWalletConnect} type={type} closeFun={CloseModal}/>
              <ConnectMetaMask onConnect={handleWalletConnect} type={type} closeFun={CloseModal}/>
              <ConnectBackpack onConnect={handleWalletConnect} type={type} closeFun={CloseModal}/>
            </div>
          </div>
          <div className="py-5 w-full flex items-center justify-center border-t border-slate-400">
            <span className="text-sm text-slate-700">
              {type === "login" ? (
                <>
                  Not a member yet?&nbsp;
                  <span
                    className="text-[#1DBF73] cursor-pointer"
                    onClick={() => {
                      dispatch({ type: reducerCases.TOGGLE_SIGNUP_MODAL, showSignupModal: true });
                      dispatch({ type: reducerCases.TOGGLE_LOGIN_MODAL, showLoginModal: false });
                    }}
                  >
                    Join Now
                  </span>
                </>
              ) : (
                <>
                  Already a member?&nbsp;
                  <span
                    className="text-[#1DBF73] cursor-pointer"
                    onClick={() => {
                      dispatch({ type: reducerCases.TOGGLE_SIGNUP_MODAL, showSignupModal: false });
                      dispatch({ type: reducerCases.TOGGLE_LOGIN_MODAL, showLoginModal: true });
                    }}
                  >
                    Login Now
                  </span>
                </>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthWrapper;