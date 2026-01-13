import { useState } from "react";
import { ethers } from "ethers";
import PiggyBankJson from "../abi/PiggyBank.json";

interface DepositProps {
  signer: ethers.Signer | null;
}

export const Deposit = ({ signer }: DepositProps) => {
  const [amount, setAmount] = useState("");

  const handleDeposit = async () => {
    if (!signer) return alert("Connect Wallet!");
    const contract = new ethers.Contract(PiggyBankJson.address, PiggyBankJson.abi, signer);
    const tx = await contract.deposit({ value: ethers.parseEther(amount) });
    await tx.wait();
    alert("Deposit successful!");
    setAmount("");
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Amount in ETH"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleDeposit}>Deposit</button>
    </div>
  );
};
