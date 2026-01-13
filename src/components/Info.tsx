import { useEffect, useState } from "react";
import { ethers } from "ethers";
import PiggyBankJson from "../abi/PiggyBank.json";

interface InfoProps {
  signer: ethers.Signer | null;
}

export const Info = ({ signer }: InfoProps) => {
  const [balance, setBalance] = useState("0");
  const [timeLeft, setTimeLeft] = useState("0");

  const fetchInfo = async () => {
    if (!signer) return;
    const contract = new ethers.Contract(PiggyBankJson.address, PiggyBankJson.abi, signer);
    const bal = await contract.getMyBalance();
    const time = await contract.timeLeft();
    setBalance(ethers.formatEther(bal));
    setTimeLeft(time.toString());
  };

  useEffect(() => {
    fetchInfo();
  }, [signer]);

  return (
    <div>
      <p>Your Balance: {balance} ETH</p>
      <p>Time Left: {timeLeft} seconds</p>
      <button onClick={fetchInfo}>Refresh</button>
    </div>
  );
};
