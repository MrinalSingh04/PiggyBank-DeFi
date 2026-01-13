import { ethers } from "ethers";
import PiggyBankJson from "../abi/PiggyBank.json";

interface WithdrawProps {
  signer: ethers.Signer | null;
}

export const Withdraw = ({ signer }: WithdrawProps) => {
  const handleWithdraw = async () => {
    if (!signer) return alert("Connect Wallet!");
    const contract = new ethers.Contract(PiggyBankJson.address, PiggyBankJson.abi, signer);
    const tx = await contract.withdraw();
    await tx.wait();
    alert("Withdrawal successful!");
  };

  return <button onClick={handleWithdraw}>Withdraw</button>;
};
