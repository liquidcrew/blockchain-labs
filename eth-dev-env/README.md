# Ethereum development environment

## Node.js and NPM

Node.js is an asynchronous JavaScript runtime environment that enables the execution of JS code outside of a web browser. It's typically used for server-side development, mostly for efficent and scalable network applications. NPM (Node Package Manager) is the default package manager for Node.js, providing a vast repository of JavaScript libraries and packages. Together, Node.js and npm form a robust foundation for modern web development, offering a versatile platform and a rich ecosystem for developers.

There two ways of installation documented:
1. [Using a Node.js version manager](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#using-a-node-version-manager-to-install-nodejs-and-npm) `⭐ Recommended`
1. [Using a Node.js installer](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#using-a-node-installer-to-install-nodejs-and-npm)
2. Following the instructions for your OS

[Official documentation](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) details how to install Node.js and NPM following the instructions for your OS or using NVM (Node Version Manager). NVM allows a developer to have muliple Node.js vesions installed.

## Ganache: Local blockchain simulator for development

Ganache is an essential part of the Truffle Suite, designed specifically for Ethereum developers. It functions as a personal blockchain that can be used for deploying contracts, developing applications, and running tests in a safe and deterministic environment. This tool significantly aids in streamlining the development process by providing a simulated blockchain, allowing developers to see how their contracts would operate on the public Ethereum network.

Ganache comes in two forms, as a UI `⭐ Recommended` and as a CLI, but it can be used in three ways: UI, CLI, and programmatically.

### Install Ganache CLI

Run this command to install Ganache CLI:

```sh
npm install -g truffle
```

### Install Ganache UI

Ganache UI can be downloaded from the [Truffle Suite website](https://trufflesuite.com/ganache/). It comes packaged in various formats. The easiest way to use it is to download the AppImage file, give it execution permissions, and run it.

## Truffle: Smart contract dev tools

The Truffle command is a key component of the Truffle Suite, a collection of blockchain development tools. It serves as a command-line interface for compiling, migrating, and testing smart contracts on the Ethereum network. This tool streamlines the development process by managing smart contract compilation (transforming Solidity code into EVM bytecode), deployment to various blockchain networks, and providing a framework for writing and running automated tests for these contracts.

Run this command to install Truffle:

```sh
npm install -g truffle
```


## Initialize a project

Create a directory and initialize the Truffle environment inside:

```sh
mkdir myproject
cd myproject
truffle init
```

Modify `truffle-config.js` to communicate Truffle with Ganache:

> 💡 Use port `7545` for Ganache CLI and `8545` for Ganache UI.

```js
  networks: {
    // Useful for testing. The `development` name is special - truffle uses it by default
    // if it's defined here and no other network is specified at the command line.
    // You should run a client (like ganache, geth, or parity) in a separate terminal
    // tab if you use this network and you must also set the `host`, `port` and `network_id`
    // options below to some value.
    ganache: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    }
```

