'use client';
import React, { useState, useEffect } from 'react';
import metaMask from '../../public/logos/metaMask.png';
import Image from "next/image";
import { useRouter } from 'next/router';

const ConnectMetaMask = ({onConnect,type,closeFun}) => {
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false);
  const [buttonText, setButtonText] = useState('Connect MetaMask');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const router = useRouter();
  
  useEffect(() => {
    if (isMetaMaskAvailable()) {
      setIsMetaMaskInstalled(true);
      setButtonText('Connect MetaMask');
    } else {
      setButtonText('MetaMask Not Installed');
      setIsButtonDisabled(true);
    }
  }, []);

  const isMetaMaskAvailable = () => {
    return Boolean(window.ethereum && window.ethereum.isMetaMask);
  };

  const connectMetaMask = async () => {
    setIsButtonDisabled(true);
    try {
      const resp = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setButtonText('Connected');
      console.log('Accounts:', accounts);
      onConnect(resp.publicKey.toString());
    } catch (error) {
      console.error('Error occurred while connecting to MetaMask:', error);
    } finally {
      setIsButtonDisabled(false);
      console.log("MetaMask connected");
      closeFun();
      type === 'login' ? router.push('/') : router.push('/search?category=Programming%20&%20Tech');
    }
  };

  const handleClick = () => {
    connectMetaMask();
  };

  return (
    <button className="border border-slate-300 p-2 font-medium w-64 flex items-center justify-around relative rounded mb-2" onClick={handleClick} disabled={isButtonDisabled}>
      <Image src={metaMask} alt="MetaMask Wallet" width={40} height={40} className="rounded"/>
      <h2 className='text-slate-600'>{type === "login" ? "Login" : "Sign"} in with MetaMask</h2>
    </button>
  );
};

export default ConnectMetaMask;