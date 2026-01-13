# 🐷 PiggyBank DeFi dApp

A decentralized **Time-Locked Piggy Bank** built with **Solidity, Remix, MetaMask, React (Vite) and ethers.js**.  
Users can deposit ETH into a personal vault and withdraw only after a predefined unlock time.

---

## 🔥 Features

- ⏳ Time-locked savings  
- 💰 ETH deposits  
- 🔒 Withdrawal blocked before unlock  
- 📈 View personal balance  
- 🏦 View total contract balance  
- 🔗 MetaMask integration  
- 🌐 Deployed on Sepolia Testnet  

---

## 🧠 Smart Contract

**Contract Name:** `PiggyBank`  
**Deployed Address:**


---

## 📜 Contract Functions

| Function | Description |
|--------|-------------|
| `deposit()` | Deposit ETH into piggy bank |
| `withdraw()` | Withdraw ETH after unlock |
| `timeLeft()` | Seconds remaining until unlock |
| `getMyBalance()` | Your ETH balance |
| `getContractBalance()` | Total ETH locked |
| `extendUnlockTime(uint256)` | Extend lock period |

---

## 🛠 Tech Stack

- **Solidity**
- **Remix IDE**
- **MetaMask**
- **React (Vite)**
- **ethers.js v6**
- **Sepolia Testnet**

---

## 📦 Project Structure

piggybank-defi/
├── src/
│ ├── abi/
│ │ └── PiggyBank.json
│ ├── components/
│ │ ├── Deposit.tsx
│ │ ├── Withdraw.tsx
│ │ └── Balance.tsx
│ ├── App.tsx
│ └── main.tsx
├── public/
├── package.json
└── README.md



---

## ⚙️ Run Locally

### Install dependencies
npm install

### Start frontend
npm run dev


## 💸 How to Use
Deposit ETH
Enter amount (e.g. 0.001)

Click Deposit
Confirm transaction in MetaMask

Withdraw
Click Withdraw

Works only after unlock time
Check Balance

Shows your ETH and total contract ETH


## 👨‍💻 Author

Built by Mrinal Singh
Blockchain & Web3 Developer