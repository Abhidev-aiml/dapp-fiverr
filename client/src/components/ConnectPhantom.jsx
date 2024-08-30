'use client';
import React, { useState, useEffect } from 'react';
import phantomLogo from '../../public/logos/phantomLogo.png';
import Image from "next/image";
import { useRouter } from 'next/router';

const ConnectPhantom = ({onConnect,type, closeFun}) => {
  const router = useRouter();
  const [isPhantomInstalled, setIsPhantomInstalled] = useState(false);
  const [buttonText, setButtonText] = useState('Connect Phantom');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    if (isPhantomAvailable()) {
      setIsPhantomInstalled(true);
      setButtonText('Connect Phantom');
    } else {
      setIsPhantomInstalled(false);
      setButtonText('Click here to install Phantom');
    }
  }, []);

  const isPhantomAvailable = () => {
    return Boolean(window.solana && window.solana.isPhantom);
  };

  const installPhantom = () => {
    window.open('https://phantom.app/', '_blank');
    setButtonText('Installing Phantom...');
    setIsButtonDisabled(true);
  };

  const connectPhantom = async () => {
    setIsButtonDisabled(true);
    try {
      const resp = await window.solana.connect();
      setButtonText('Connected');
      console.log('Public Key:', resp.publicKey.toString(), resp.publicKey);
      onConnect(resp.publicKey.toString());
    } catch (error) {
      console.error('Error occurred while connecting to Phantom:', error);
    } finally {
      setIsButtonDisabled(false);
      console.log("Phantom connected");
      closeFun;
      type === 'login' ? router.push('/') : router.push('/search?category=Programming%20&%20Tech');
    }
  };

  const handleClick = () => {
    if (isPhantomInstalled) {
      connectPhantom();
    } else {
      installPhantom();
    }
  };

  return (
    <button className="border border-slate-300 p-2 font-medium w-64 flex items-center justify-around relative rounded mb-2" onClick={handleClick} disabled={isButtonDisabled}>
      <Image src={phantomLogo} alt="Phantom Wallet" width={40} height={40} className="rounded"/>
      <h2 className='text-slate-600'>{type === "login" ? "Login" : "Sign"} in with Phantom</h2>
    </button>
  );
};

export default ConnectPhantom;