import { useState } from "react";
import { ethers } from "ethers";

declare global {
  interface Window {
    ethereum?: any;
  }
}

interface WalletConnectProps {
  setSigner: (signer: ethers.Signer) => void;
  setAddress: (address: string) => void;
}

export const WalletConnect = ({
  setSigner,
  setAddress,
}: WalletConnectProps) => {
  const [connected, setConnected] = useState(false);

  const connectWallet = async () => {
    try {
      if (!window.ethereum) return alert("Install MetaMask!");
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      setSigner(signer);
      setAddress(address);
      setConnected(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button onClick={connectWallet}>
      {connected ? "Wallet Connected" : "Connect Wallet"}
    </button>
  );
};
