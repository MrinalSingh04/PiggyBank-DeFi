import { useState } from "react";
import { ethers } from "ethers";
import { WalletConnect } from "./components/WalletConnect";
import { Deposit } from "./components/Deposit";
import { Withdraw } from "./components/Withdraw";
import { Info } from "./components/Info";

function App() {
  const [signer, setSigner] = useState<ethers.Signer | null>(null);
  const [address, setAddress] = useState("");

  return (
    <div style={{ padding: "2rem" }}>
      <h1>PiggyBank - DeFi</h1>

      {/* Wallet Connection */}
      <WalletConnect setSigner={setSigner} setAddress={setAddress} />

      {/* Show connected wallet address */}
      {signer && (
        <p>
          Connected Wallet: <strong>{address}</strong>
        </p>
      )}

      {/* Deposit, Withdraw, and Info components */}
      {signer && (
        <>
          <Deposit signer={signer} />
          <Withdraw signer={signer} />
          <Info signer={signer} />
        </>
      )}
    </div>
  );
}

export default App;
