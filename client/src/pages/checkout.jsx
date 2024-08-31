// @ts-nocheck
import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { CREATE_ORDER } from "../utils/constants";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { useRouter } from "next/router";
import { useStateProvider } from "../context/StateContext";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
// const stripePromise = loadStripe("pk_test_xeqIPdYS2PpKbHmKG4gJqpde");

function Checkout() {
  const [{ gigData, userInfo }, dispatch,data] = useStateProvider();
  const [clientSecret, setClientSecret] = useState("");
  const router = useRouter();
  const { gigId } = router.query;  
  const [solPrice, setSolPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [solPriceInUsd, setSolPriceInUsd] = useState(null);
  const [lamports, setLamports] = useState(null);
  const [errorLam, setErrorLam] = useState(null);

  const fetchSolPrice = async () => {
    try {
      const response = await axios.get(
        'https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd'
      );
      setSolPrice(response.data.solana.usd);
      setLoading(false);
    } catch (err) {
      setError('Error fetching Solana price');
      setLoading(false);
    }
  }

  const convertUsdToSol = (usdAmount) => {
    if (solPrice) {
      return usdAmount / solPrice;
    }
    return null;
  };

  const gigAmt = gigData?.price;

  useEffect(() => {
    // Fetch the current SOL price in USD using axios
    async function fetchSolPrice() {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd"
        );
        const solPrice = response.data.solana.usd;
        setSolPriceInUsd(solPrice);

        // Convert USD to SOL and then to lamports
        const solAmount = gigAmt / solPrice;
        const lamportsAmount = solAmount * LAMPORTS_PER_SOL;
        setLamports(Math.round(lamportsAmount));
        console.log(lamportsAmount,"this is lamports");
        
      } catch (err) {
        setErrorLam("Failed to fetch SOL price. Please try again later.");
      }
    }

    fetchSolPrice();
  }, [gigAmt]);

  useEffect(() => {
    const createOrderIntent = async () => {
      const { data } = await axios.post(
        CREATE_ORDER,
        { gigId },
        { withCredentials: true }
      );
      setClientSecret(data.clientSecret);
    };
    if (gigId) createOrderIntent();
  }, [gigId]);
  useEffect(() => {
    fetchSolPrice();
    console.log(gigData,"Hkjhdfhsldf");
    console.log(userInfo,"hllo worw");
    
  }, []);
  const gigAmount = convertUsdToSol(gigData?.price);
  console.log(gigAmount,"this is gig amount");
  
  // const appearance = {
  //   theme: "stripe",
  // };
  // const options = {
  //   clientSecret,rgb(29 191 115)
  //   appearance,
  // };
  
  const handlePayment = async (e) => {
    // e.preventDefault();

    // if (!wallet.connected) {
    //   setMessage("Please connect your wallet.");
    //   return;
    // }

    try {
      setIsLoading(true);

      const transaction = new Transaction();
      transaction.add(
        SystemProgram.transfer({
          fromPubkey: userInfo?.publicKey,
          toPubkey: new PublicKey(gigData?.createdBy?.publicKey),
          lamports: lamports,
        })
      );

      const signature = await wallet.sendTransaction(transaction, connection);
      await connection.confirmTransaction(signature, "processed");

      setMessage(`Payment of ${amountToPay} SOL succeeded! Transaction Signature: ${signature}`);
    } catch (error) {
      setMessage(`Payment failed: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] max-w-full mx-20 flex flex-col gap-10 items-center">
      <h1 className="text-3xl">
        Please complete the payment to place the order.
      </h1>
      <div className="bg-gray-600 text-white rounded-lg p-4 shadow-lg w-full max-w-md mx-auto">
        <h1 className="text-3xl pb-5 font-semibold">Payment Info</h1>
        <div className="flex flex-col space-y-4">
          <div>
            <h2 className="text-2xl font-semibold">Total Amount in SOL</h2>
            <p className="text-xl font-bold text-[#50eba2]">{gigAmount} SOL</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Seller  Public Key</h2>
            <p className="text-sm break-all text-[#50eba2]">{gigData?.createdBy?.publicKey}</p>
          </div>
        </div>
      </div>
      <p className="text-sm break-all text-[#50eba2]">{message}</p>
      <button onClick={()=>{handlePayment()}}>Pay now</button>
      {/* {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )} */}
    </div>
  );
}

export default Checkout;


// export default function SolanaCheckoutForm() {
//   const wallet = useWallet();
//   const { connection } = useConnection();
//   const [message, setMessage] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   // Hypothetical hook to get seller's public key and the amount to pay
//   const { sellerPublicKey, amountToPay } = usePrisma();

//   const handlePayment = async (e) => {
//     e.preventDefault();

//     if (!wallet.connected) {
//       setMessage("Please connect your wallet.");
//       return;
//     }

//     try {
//       setIsLoading(true);

//       const transaction = new Transaction();
//       transaction.add(
//         SystemProgram.transfer({
//           fromPubkey: wallet.publicKey,
//           toPubkey: new PublicKey(sellerPublicKey),
//           lamports: amountToPay * LAMPORTS_PER_SOL,
//         })
//       );

//       const signature = await wallet.sendTransaction(transaction, connection);
//       await connection.confirmTransaction(signature, "processed");

//       setMessage(`Payment of ${amountToPay} SOL succeeded! Transaction Signature: ${signature}`);
//     } catch (error) {
//       setMessage(`Payment failed: ${error.message}`);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <form id="payment-form" onSubmit={handlePayment} className="w-96">
//       <div className="mb-4">
//         <label htmlFor="amount" className="block text-sm font-medium">
//           Amount (in SOL)
//         </label>
//         <input
//           id="amount"
//           type="text"
//           value={amountToPay}
//           readOnly
//           className="border rounded-md px-3 py-2 mt-1 w-full"
//         />
//       </div>
//       <button
//         disabled={isLoading || !wallet.connected}
//         id="submit"
//         className="border text-lg font-semibold px-5 py-3 border-[#1DBF73] bg-[#1DBF73] text-white rounded-md mt-5 w-full"
//       >
//         <span id="button-text">{isLoading ? <div className="spinner" id="spinner"></div> : "Pay with SOL"}</span>
//       </button>
//       {/* Show any error or success messages */}
//       {message && <div id="payment-message">{message}</div>}
//     </form>
//   );
// }