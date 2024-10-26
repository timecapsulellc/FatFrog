require('dotenv').config();

const config = {
  // Server Configuration
  port: process.env.PORT || 4000,
  nodeEnv: process.env.NODE_ENV || 'development',
  
  // Database Configuration
  dbUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/fatfrog',
  
  // JWT Configuration
  jwtSecret: process.env.JWT_SECRET || 'your-secret-key',
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '24h',
  
  // Blockchain Configuration
  rpcUrl: process.env.RPC_URL,
  chainId: process.env.CHAIN_ID || '1',
  
  // NFT Configuration
  ipfsGateway: process.env.IPFS_GATEWAY || 'https://ipfs.io/ipfs/',
  
  // API Keys
  infuraApiKey: process.env.INFURA_API_KEY,
  alchemyApiKey: process.env.ALCHEMY_API_KEY,
  
  // Cross-Chain Configuration
  axelarApiKey: process.env.AXELAR_API_KEY,
  
  // Rate Limiting
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
  }
};

module.exports = config;
