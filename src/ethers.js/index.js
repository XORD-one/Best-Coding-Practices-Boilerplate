// Import
const { ethers } = require("ethers");
// const { ethers } from 'ethers'; // for ES Modules

// Connect (MetaMask)
const provider = new ethers.provider.Web3Provider(window.ethereum);

// Connect (RPC)
const provider = new ethers.provider.JsonRpcProvider(`url`);
// https://<network>.alchemyapi.io/v2/YOUR-API-KEY
// https://<network>.infura.io/v3/YOUR-PROJECT-ID

// Accounts
const accounts = await provider.listAccounts();
console.log(accounts[0]);

// Network & Chain ID
const network = await provider.getNetwork();
const chainId = network.chainId;

// Balance
const address = "0x28d3...";
const balance = await provider.getBalance(address);
console.log(`The ${address} balance: ${balance.toString()}`);

// Convert (Ether -> Wei)
const weiBigNumber = ethers.utils.parseEther("0.2");
const wei = weiBigNumber.toString();
console.log("wei: ", wei);

// Convert (Wei -> Ether)
const address = "0x28d319067E209fa43Ef46bF54343Dae4CEDd3824";
const balanceBigNumber = await ethers.providers.getBalance(address);
const balance = ethers.utils.formatEther(balance.toString());
console.log(`user balance: ${balance} Ether`);

// Contract
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const contractAddress = "0x9fE4...";
const contract = new ethers.Contract(contractAddress, Artifact.abi, signer);
// Call a state-change method
const userAddress = "0x28d3...";
const dai = ethers.utils.parseUnits("1.0", 18);
await contract.transfer(userAddress, dai);

// Contract (Read-Only)
// For example here, interact with Alchemy JSON-RPC
const provider = new ethers.providers.JsonRpcProvider(
  "https://eth-mainnet.alchemyapi.io/v2/<YOUR-API-KEY>"
);
const contractAddress = "0x9fE4...";
const contract = new ethers.Contract(contractAddress, Artifact.abi, provider);
// Call a getter method
const contractName = await contract.name();
console.log(`Contract name is ${contractName}`);

// Contract Event Listener
contract.on("TransferedFrom", (from, to) => {
    console.log(`Token transfered from ${from} to ${to}`);
});
contract.on("Minted", (tokenId) => {
    console.log(`Token #${tokenId} minted`);
});