# FatFrog Kingdom Quest

A vibrant meme coin and gaming ecosystem with NFT integration, staking rewards, and cross-chain platform capabilities.

## Project Locations

- **Local Development**: `/Users/web3/Desktop/FatFrog-Kingdom`
- **GitHub Repository**: [FatFrog-Kingdom](https://github.com/yourusername/FatFrog-Kingdom)

## Project Structure

```
fatfrog-kingdom/
├── backend/              # Node.js/Express server
│   ├── config/          # Configuration files
│   ├── controllers/     # Route controllers
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   ├── services/       # Business logic
│   └── utils/          # Helper functions
├── frontend/            # Next.js frontend (Coming soon)
│   ├── public/         # Static assets
│   └── src/            # Source code
│       ├── components/ # Reusable components
│       ├── pages/      # Next.js pages
│       ├── styles/     # CSS/Tailwind styles
│       └── utils/      # Frontend utilities
├── smart-contracts/     # Blockchain contracts
│   ├── contracts/      # Solidity contracts
│   ├── scripts/        # Deployment scripts
│   └── test/          # Contract tests
├── scripts/            # Project setup scripts
├── package.json        # Root package.json
└── .env               # Environment variables
```

## Features

- 🐸 FROG Token (ERC-20)
- 🎮 Interactive Gaming Platform
- 🖼️ NFT Integration with Evolution Mechanics
- 💰 Staking and Rewards System
- ⛓️ Cross-Chain Compatibility
- 🌐 Decentralized Exchange Integration

## Quick Start

### Local Development Setup

1. Navigate to the project directory:
   ```bash
   cd /Users/web3/Desktop/FatFrog-Kingdom
   ```

2. Install dependencies:
   ```bash
   npm run install:all
   ```

3. Create and configure environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. Start the backend development server:
   ```bash
   npm run backend:dev
   ```

### GitHub Setup

1. Install GitHub CLI (if not already installed):
   ```bash
   brew install gh
   ```

2. Run the GitHub setup script:
   ```bash
   ./scripts/setup-github.sh
   ```

3. Follow the prompts to authenticate and create your GitHub repository

## Smart Contracts

FROG Token Contract: [0xf9b864b6d7B2f6348f6adDE5557c676f14FB53e8](https://snowtrace.io/token/0xf9b864b6d7B2f6348f6adDE5557c676f14FB53e8)

## Available Scripts

- `npm run install:all` - Install all dependencies
- `npm run backend:dev` - Start backend in development mode
- `npm run backend:start` - Start backend in production mode
- `npm run contracts:compile` - Compile smart contracts
- `npm run contracts:verify` - Verify contracts on Avalanche

## API Endpoints

### Token Endpoints

- GET `/api/v1/token/info` - Get token information
- GET `/api/v1/token/balance/:address` - Get token balance for an address
- GET `/api/v1/token/allowance/:owner/:spender` - Get token allowance

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
