// @ts-nocheck
import React, { useEffect, useState } from "react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { CREATE_ORDER } from "../utils/constants";
import { useRouter } from "next/router";
import { useStateProvider } from "../context/StateContext";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
const stripePromise = loadStripe("pk_test_xeqIPdYS2PpKbHmKG4gJqpde");

function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("solana");
  const [{ gigData, userInfo }] = useStateProvider();
  const [clientSecret, setClientSecret] = useState("");
  const router = useRouter();
  const { gigId } = router.query;
  const [solPrice, setSolPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [lamports, setLamports] = useState(null);
  const wallet = useWallet();
  const { connection } = useConnection();

  //These funtion is for fetching live solana price
  const fetchSolPrice = async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd"
      );
      setSolPrice(response.data.solana.usd);
      setLoading(false);
    } catch (err) {
      setError("Error fetching Solana price");
      setLoading(false);
    }
  };

  //This function is for converting usd to sol
  const convertUsdToSol = (usdAmount) => {
    return solPrice ? usdAmount / solPrice : null;
  };

  useEffect(() => {
    if (gigData?.price) {
      fetchSolPrice();
    }
  }, [gigData?.price]);

  useEffect(() => {
    if (solPrice && gigData?.price) {
      const solAmount = gigData.price / solPrice;
      const lamportsAmount = solAmount * LAMPORTS_PER_SOL;
      setLamports(Math.round(lamportsAmount));
    }
  }, [solPrice, gigData?.price]);

  //This function is for creating order intent when user completes the payment 
  useEffect(() => {
    const createOrderIntent = async () => {
      try {
        const { data } = await axios.post(
          CREATE_ORDER,
          { gigId },
          { withCredentials: true }
        );
        setClientSecret(data.clientSecret);
      } catch (err) {
        setError("Error creating order intent");
      }
    };
    if (gigId) createOrderIntent();
  }, [gigId]);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  //This function is for handling payment for solana payment
  const handlePayment = async () => {
    if (!wallet.connected) {
      setMessage("Please connect your wallet.");
      return;
    }
    try {
      setIsLoading(true);
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: userInfo?.publicKey,
          toPubkey: new PublicKey(gigData?.createdBy?.publicKey),
          lamports: lamports,
        })
      );

      const signature = await wallet.sendTransaction(transaction, connection);
      await connection.confirmTransaction(signature, "processed");

      setMessage(`Payment of ${lamports / LAMPORTS_PER_SOL} SOL succeeded! Transaction Signature: ${signature}`);
    } catch (error) {
      setMessage(`Payment failed: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] max-w-full mx-20 flex flex-col gap-10 items-center">
      <h1 className="text-3xl">Please complete the payment to place the order.</h1>
      
      {/* Payment method toggle */}
      <div className="flex items-center space-x-4">
        <span className={`cursor-pointer ${paymentMethod === 'solana' ? 'text-[#1DBF73] font-bold text-2xl' : 'text-2xl'}`} onClick={() => setPaymentMethod('solana')}>Solana</span>
        <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
          <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
            checked={paymentMethod === 'stripe'}
            style={{right: paymentMethod === 'stripe' ? '0' : ''}}
            onChange={() => setPaymentMethod(paymentMethod === 'solana' ? 'stripe' : 'solana')}
          />
          <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
        </div>
        <span className={`cursor-pointer ${paymentMethod === 'stripe' ? 'text-[#1DBF73] font-bold text-2xl' : 'text-2xl'}`} onClick={() => setPaymentMethod('stripe')}>Stripe</span>
      </div>
  
      {paymentMethod === 'solana' ? (
        // Solana payment section
        <>
          <div className="bg-gray-600 text-white rounded-lg p-4 shadow-lg w-full max-w-md mx-auto">
            <h1 className="text-3xl pb-5 font-semibold">Payment Info (Solana).</h1>
            <div className="flex flex-col space-y-4">
              <div>
                <h2 className="text-2xl font-semibold">Total Amount in SOL</h2>
                <p className="text-xl font-bold text-[#50eba2]">{convertUsdToSol(gigData?.price)} SOL</p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Seller Public Key</h2>
                <p className="text-sm break-all text-[#50eba2]">{gigData?.createdBy?.publicKey}</p>
              </div>
            </div>
          </div>
          <p className="text-sm break-all text-[#50eba2]">{message}</p>
          <button onClick={handlePayment} disabled={isLoading} className="border text-lg font-semibold px-5 py-3 max-w-md border-[#1DBF73] bg-[#1DBF73] text-white rounded-md mt-5 w-full">
            Pay now with Solana
          </button>
        </>
      ) : (
        // Stripe payment section
        <>
          {clientSecret && (
            <div className="w-full max-w-md">
              <h1 className="text-3xl pb-5 font-semibold">Payment with cards.</h1>
              <Elements options={options} stripe={stripePromise}>
                <CheckoutForm />
              </Elements>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Checkout;