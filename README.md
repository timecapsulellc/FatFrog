f# FatFrog Kingdom Quest

A vibrant meme coin and gaming ecosystem with NFT integration, staking rewards, and cross-chain platform capabilities.

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

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/fatfrog-kingdom.git
   cd fatfrog-kingdom
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

5. Verify smart contract (optional):
   ```bash
   npm run contracts:verify
   ```

## Available Scripts

- `npm run install:all` - Install all dependencies (root, backend, smart-contracts)
- `npm run backend:dev` - Start backend in development mode
- `npm run backend:start` - Start backend in production mode
- `npm run contracts:compile` - Compile smart contracts
- `npm run contracts:verify` - Verify smart contracts on Avalanche network

## Smart Contracts

FROG Token Contract: [0xf9b864b6d7B2f6348f6adDE5557c676f14FB53e8](https://snowtrace.io/token/0xf9b864b6d7B2f6348f6adDE5557c676f14FB53e8)

## API Endpoints

### Token Endpoints

- GET `/api/v1/token/info` - Get token information
- GET `/api/v1/token/balance/:address` - Get token balance for an address
- GET `/api/v1/token/allowance/:owner/:spender` - Get token allowance

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
