# companyDasler_project_frontend
# EthSales Analytics Frontend

This repository contains the frontend codebase for **EthSales Analytics**, a blockchain sales intelligence platform focused on institutional-grade analytics for Ethereum token sales, NFT marketplaces, and DeFi platforms.

## Overview

EthSales Analytics provides:
- High-load processing using Rust and Kafka.
- Enterprise-grade security with encrypted data pipelines.
- Real-time monitoring of Ethereum mainnet and testnets.
- Precise on-chain data parsing using full ABI decoding.
- Cross-chain Modular Communication Protocol (MCP) integration for advanced multi-chain data aggregation.

## Project Structure

This repository includes:
- Production-ready React frontend.
- Fully responsive and scalable UI with Tailwind CSS and shadcn/ui components.
- Clean architecture ready for enterprise deployments.

## Backend MCP Integration

The MCP protocol backend services are maintained in a separate private repository for security and operational reasons.

**Note:** Access credentials, API keys, and MCP backend repository details should be requested directly via personal contact with the infrastructure team lead.

## Deployment

We recommend deploying the application using modern CI/CD pipelines. The frontend is fully containerized and can be integrated into Kubernetes, Docker Swarm, or any enterprise orchestration solution.

## Development

### Prerequisites
- Node.js >= 18.x
- Yarn >= 1.22.x
- Modern browser with developer tools

### Setup

Clone the repository:
```bash
git clone https://github.com/your-org/ethsales-frontend.git
cd ethsales-frontend
```

Install dependencies:
```bash
yarn install
```

Start development server:
```bash
yarn dev
```

## Security & Compliance

This repository follows internal security standards, including:
- Code linting and static analysis
- Vulnerability scanning integrated into CI
- Secure handling of credentials
- Minimal open attack surface

## License

© 2025 EthSales Analytics. All rights reserved.

---

For questions and credentials requests, contact the infrastructure or security team directly.
