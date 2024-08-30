'use client';
import React, { useState, useEffect } from 'react';
import backPack from '../../public/logos/backPack.png';
import Image from "next/image";
import { useRouter } from 'next/router';

const ConnectBackpack = ({onConnect,type,closeFun}) => {
  const [isBackpackInstalled, setIsBackpackInstalled] = useState(false);
  const [buttonText, setButtonText] = useState('Connect Backpack');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const router = useRouter();
  
  useEffect(() => {
    if (isBackpackAvailable()) {
      setIsBackpackInstalled(true);
      setButtonText('Connect Backpack');
    } else {
      setIsBackpackInstalled(false);
      setButtonText('Click here to install Backpack');
    }
  }, []);

  const isBackpackAvailable = () => {
    return Boolean(window.backpack);
  };

  const installBackpack = () => {
    window.open('https://www.backpack.app/', '_blank');
    setButtonText('Installing Backpack...');
    setIsButtonDisabled(true);
  };

  const connectBackpack = async () => {
    setIsButtonDisabled(true);
    try {
      const resp = await window.backpack.connect();
      setButtonText('Connected');
      console.log('Accounts:', accounts.publicKey.toString());
      onConnect(resp.publicKey.toString());
    } catch (error) {
      console.error('Error occurred while connecting to Backpack:', error);
    } finally {
      setIsButtonDisabled(false);
      console.log("Backpack connected");
      closeFun();
      type === 'login' ? router.push('/') : router.push('/search?category=Programming%20&%20Tech');
    }
  };

  const handleClick = () => {
    if (isBackpackInstalled) {
      connectBackpack();
    } else {
      installBackpack();
    }
  };

  return (
    <button className="border border-slate-300 p-2 font-medium w-64 flex items-center justify-around relative rounded mb-3" onClick={handleClick} disabled={isButtonDisabled}>
      <Image src={backPack} alt="BackPack Wallet" width={40} height={40} className="rounded"/>
      <h2 className='text-slate-600'>{type === "login" ? "Login" : "Sign"} in with BackPack</h2>
    </button>
  );
};

export default ConnectBackpack;