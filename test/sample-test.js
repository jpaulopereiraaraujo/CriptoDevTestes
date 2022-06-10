const { messagePrefix } = require("@ethersproject/hash");
const { expect } = require("chai");
const { ethers } = require("hardhat");

/* describe("Greeter", function () {
  it("Should return the new greeting once it's changed", 
  async function () {

    const [owner, wallet1] = await ethers.getSigners();
    console.log(wallet1.address, ' wallet 1');
    
    const Greeter = await ethers.getContractFactory("Greeter",wallet1);
    const greeter = await Greeter.deploy("Hello, world!");
    await greeter.deployed();

    expect(await greeter.greet()).to.equal("Hello, world!");

    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
}); */

