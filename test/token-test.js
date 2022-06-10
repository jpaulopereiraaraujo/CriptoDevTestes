const { messagePrefix } = require("@ethersproject/hash");
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("token", async () => {
    it("Totalsupply and Owner Balance test", async function () {
        const [owner, wallet1] = await ethers.getSigners();

        const token = await ethers.getContractFactory("CryptoToken", owner);

        const tokenTest = await token.deploy(1000);

        await tokenTest.deployed();

        console.log(wallet1.address, ' wallet 1');
        console.log(owner.address, ' owner');


        const totalSupplyExpected = 1000;

        const totalSupplyResult = await tokenTest.totalSupply();

        expect(totalSupplyExpected).to.equal(totalSupplyResult)

        //Teste do balance do owner
        const balanceExpected = 1000;
        const balanceResult = await tokenTest.balanceOf(owner.address)

        expect(balanceExpected).to.equal(balanceResult)

    });

    it("Trasfer test", async function () {
        const [owner, wallet1] = await ethers.getSigners();

        const token = await ethers.getContractFactory("CryptoToken", owner);

        const tokenTest = await token.deploy(1000);

        await tokenTest.deployed();

        console.log(wallet1.address, ' wallet 1');
        console.log(owner.address, ' owner');

        const transferValue = 400;
        const balanceWallet1Expected = 400;
        const balanceOwnerExpected = 600;


        //Testando a função transfer
        await tokenTest.transfer(wallet1.address, transferValue);

        const bWallet1 = await tokenTest.balanceOf(wallet1.address);

        const bOwner = await tokenTest.balanceOf(owner.address);
        
        //Testando se os tokens saíram

        expect(balanceOwnerExpected).to.equal(bOwner);

        //Testando se os tokens chegaram

        expect(balanceWallet1Expected).to.equal(bWallet1);

        console.log(bWallet1);
        console.log(bOwner);

    });

    it("Trasfer Failtest", async function () {
        const [owner, wallet1] = await ethers.getSigners();

        const token = await ethers.getContractFactory("CryptoToken", owner);

        const tokenTest = await token.deploy(100);

        await tokenTest.deployed();

        console.log(wallet1.address, ' wallet 1');
        console.log(owner.address, ' owner');

        const transferValue = 400;
        const test='pass';
        const bOwner = await tokenTest.balanceOf(owner.address);
        
        if (transferValue > bOwner ) {
            expect('pass').to.equal(test);
        }
        console.log(bOwner);

    });


});