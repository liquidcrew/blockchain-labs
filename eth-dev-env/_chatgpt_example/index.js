const Web3 = require('web3');
let web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

const contractAddress = "TU_CONTRATO_DEPLOYADO_DIRECCION";
const contractABI = [/* ABI del Contrato */];

const contract = new web3.eth.Contract(contractABI, contractAddress);

async function setMessage() {
    const accounts = await web3.eth.getAccounts();
    const message = document.getElementById('messageInput').value;
    await contract.methods.setMessage(message).send({ from: accounts[0] });
}

async function getMessage() {
    const message = await contract.methods.getMessage().call();
    document.getElementById('currentMessage').innerText = message;
}
