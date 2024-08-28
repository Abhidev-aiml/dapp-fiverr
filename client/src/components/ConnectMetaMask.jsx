import React, { useState, useEffect } from 'react';
import MetaMaskOnboarding from '@metamask/onboarding';

const forwarderOrigin = 'http://localhost:3000';

const ConnectMetaMask = () => {
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false);
  const [buttonText, setButtonText] = useState('Connect MetaMask');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    if (isMetaMaskAvailable()) {
      setIsMetaMaskInstalled(true);
      setButtonText('Connect MetaMask');
    } else {
      setIsMetaMaskInstalled(false);
      setButtonText('Click here to install MetaMask');
    }
  }, []);

  const isMetaMaskAvailable = () => {
    return Boolean(window.ethereum && window.ethereum.isMetaMask);
  };

  const installMetaMask = () => {
    const onboarding = new MetaMaskOnboarding({ forwarderOrigin });
    setButtonText('Installation in progress');
    setIsButtonDisabled(true);
    onboarding.startOnboarding();
  };

  const connectMetaMask = async () => {
    setIsButtonDisabled(true);
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setButtonText('Connected');
      console.log('Accounts:', accounts);
    } catch (error) {
      console.error('Error occurred while connecting to MetaMask:', error);
    } finally {
      setIsButtonDisabled(false);
    }
  };

  const handleClick = () => {
    if (isMetaMaskInstalled) {
      connectMetaMask();
    } else {
      installMetaMask();
    }
  };

  return (
    <button onClick={handleClick} disabled={isButtonDisabled}>
      {buttonText}
    </button>
  );
};

export default ConnectMetaMask;