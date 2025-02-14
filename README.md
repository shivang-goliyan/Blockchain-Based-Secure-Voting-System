📜 Decentralized Voting System
📝 Project Description
This project is a Decentralized Voting System built using Solidity and deployed on the Ethereum blockchain. It ensures secure, transparent, and tamper-proof elections by leveraging blockchain's immutability.

🚀 Features
✅ Immutable Voting Records – Votes are securely recorded on the blockchain.
✅ Transparent & Secure – Eliminates election fraud and manipulation.
✅ Smart Contract-Based – Voting logic is handled through Ethereum smart contracts.
✅ Decentralized – No central authority, making it trustless.
✅ Voter Authentication – Only eligible users can cast votes.
✅ Real-time Results – Anyone can verify election results on-chain.

🏗️ Tech Stack
Blockchain: Ethereum
Smart Contracts: Solidity
Development Framework: Truffle
Frontend: React.js
Wallet Integration: MetaMask / Web3.js / ethers.js


🚀 How to Run the Blockchain Application
1️⃣ Install Dependencies
Make sure you have Node.js, Truffle, and MetaMask installed.


git clone https://github.com/shivang-goliyan/Blockchain-Based-Secure-Voting-System
cd DeVoteX
Truffle migrate
cd client
npm install
npm start
2️⃣ Start a Local Blockchain (Using Ganache-CLI)
ganache-cli *make sure ganache keeps running

This will start a local blockchain at http://127.0.0.1:8545/.

Import ganache account to Metamask in the browser

5️⃣ Interact with the Contract
Connect MetaMask to the local/test network.
Register voters, start elections, vote, and fetch results through the UI

📜 Smart Contract Overview
The Voting.sol contract contains:

registerVoter(address voter) – Registers an eligible voter.
startElection() – Starts the voting process.
vote(uint candidateId) – Allows registered users to cast votes.
endElection() – Closes voting and finalizes results.
getResults() – Fetches election results.

🔐 Security & Considerations
Prevention of Double Voting – Each wallet address can vote only once.
Decentralized Identity Verification – Ensures only eligible voters participate.
Gas Optimization – Efficient Solidity code for minimal gas fees.
Transparency & Auditability – Open-source code, public blockchain transactions.

🛠️ Future Enhancements
🔹 Multi-election support (handling multiple elections simultaneously)
🔹 Role-based access control for election authorities
🔹 Mobile-friendly dApp interface
🔹 Layer-2 scaling solutions (e.g., Polygon) to reduce gas fees

🤝 Contributing
Feel free to fork, create a pull request, or suggest improvements!

📜 License
This project is MIT Licensed – Free to use and modify!
