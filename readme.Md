# Wasm Contract Script

This repository provides a foundational framework for developing, deploying, and interacting with WebAssembly (Wasm) smart contracts using Rust and JavaScript.

It is ideal for developers looking to learn or build tooling around blockchain-based smart contracts compiled to Wasm, such as those used in Substrate-based or Polkadot-compatible networks.

---

## 📁 Project Structure

- `my_contract/`  
  Contains the Rust-based smart contract source code. This folder is where you write and compile your Wasm smart contracts using the Rust programming language.

- `abi.js`  
  Handles the ABI (Application Binary Interface) logic to enable communication between your JS scripts and the deployed smart contract.

- `deploy.js`  
  A JavaScript script for deploying the compiled Wasm contract onto a blockchain network.

- `interact.js`  
  Script for interacting with the deployed contract—sending transactions, calling functions, or querying contract state.

- `package.json`  
  Manages Node.js dependencies and scripts.

- `package-lock.json`  
  Tracks exact versions of installed dependencies to ensure consistent builds.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Rust](https://www.rust-lang.org/tools/install)
- [wasm32-unknown-unknown target](https://doc.rust-lang.org/stable/book/ch11-03-test-organization.html#compiling-for-wasm)

Install the required Rust target with:
```bash
rustup target add wasm32-unknown-unknown

