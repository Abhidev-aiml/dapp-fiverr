import React, { useState, useEffect } from 'react';

const ConnectPhantom = () => {
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
      console.log('Public Key:', resp.publicKey.toString());
    } catch (error) {
      console.error('Error occurred while connecting to Phantom:', error);
    } finally {
      setIsButtonDisabled(false);
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
    <button onClick={handleClick} disabled={isButtonDisabled}>
      {buttonText}
    </button>
  );
};

export default ConnectPhantom;