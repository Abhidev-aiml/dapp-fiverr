import React, { useState, useEffect } from 'react';

const ConnectBackpack = () => {
  const [isBackpackInstalled, setIsBackpackInstalled] = useState(false);
  const [buttonText, setButtonText] = useState('Connect Backpack');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

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
      const accounts = await window.backpack.connect();
      setButtonText('Connected');
      console.log('Accounts:', accounts);
    } catch (error) {
      console.error('Error occurred while connecting to Backpack:', error);
    } finally {
      setIsButtonDisabled(false);
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
    <button onClick={handleClick} disabled={isButtonDisabled}>
      {buttonText}
    </button>
  );
};

export default ConnectBackpack;