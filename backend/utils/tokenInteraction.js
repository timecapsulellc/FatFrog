const { ethers } = require('ethers');
const config = require('../config/appConfig');

const FROG_TOKEN_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function decimals() view returns (uint8)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint256)",
    "function transfer(address to, uint256 amount) returns (bool)",
    "function allowance(address owner, address spender) view returns (uint256)",
    "function approve(address spender, uint256 amount) returns (bool)",
    "function transferFrom(address from, address to, uint256 amount) returns (bool)",
    "event Transfer(address indexed from, address indexed to, uint256 value)",
    "event Approval(address indexed owner, address indexed spender, uint256 value)"
];

const FROG_TOKEN_ADDRESS = "0xf9b864b6d7B2f6348f6adDE5557c676f14FB53e8";
const AVALANCHE_RPC = "https://api.avax.network/ext/bc/C/rpc";

class TokenInteraction {
    constructor() {
        this.provider = new ethers.JsonRpcProvider(AVALANCHE_RPC);
        this.contract = new ethers.Contract(FROG_TOKEN_ADDRESS, FROG_TOKEN_ABI, this.provider);
    }

    async getTokenInfo() {
        try {
            const [name, symbol, decimals, totalSupply] = await Promise.all([
                this.contract.name(),
                this.contract.symbol(),
                this.contract.decimals(),
                this.contract.totalSupply()
            ]);

            return {
                name,
                symbol,
                decimals,
                totalSupply: totalSupply.toString(),
                address: FROG_TOKEN_ADDRESS
            };
        } catch (error) {
            console.error('Error fetching token info:', error);
            throw error;
        }
    }

    async getBalance(address) {
        try {
            const balance = await this.contract.balanceOf(address);
            return balance.toString();
        } catch (error) {
            console.error('Error fetching balance:', error);
            throw error;
        }
    }

    async getAllowance(owner, spender) {
        try {
            const allowance = await this.contract.allowance(owner, spender);
            return allowance.toString();
        } catch (error) {
            console.error('Error fetching allowance:', error);
            throw error;
        }
    }

    getContract(signerOrProvider = this.provider) {
        return new ethers.Contract(FROG_TOKEN_ADDRESS, FROG_TOKEN_ABI, signerOrProvider);
    }
}

module.exports = new TokenInteraction();
