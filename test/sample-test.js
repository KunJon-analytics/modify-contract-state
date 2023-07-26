// import testing libraries: https://www.chaijs.com/guide/styles/
const { expect, assert } = require("chai");
const {
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");

// the `describe` scope encapsulates an entire test called `TestModifyVariable`
// the `it` says the behavior that should be expected from the test
describe("TestModifyVariable", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployOneYearLockFixture() {
    const X = 10;
    const DEV = "KunJon";

    const ModifyVariable = await ethers.getContractFactory("ModifyVariable");
    const contract = await ModifyVariable.deploy(X, DEV);

    return { contract };
  }
  it("should change x to 1337", async function () {
    const { contract } = await loadFixture(deployOneYearLockFixture);

    // modify x from 10 to 1337 via this function!
    await contract.modifyToLeet();

    // getter for state variable x
    const newX = await contract.x();
    assert.equal(newX.toNumber(), 1337);
  });

  it("it should change dev to jostondo", async function () {
    const { contract } = await loadFixture(deployOneYearLockFixture);

    const NEW_DEV = "Jostondo";

    // modify dev from kunjon to jostondo via this function!
    await contract.modifyDev(NEW_DEV);

    // getter for state variable dev
    const newDev = await contract.dev();
    assert.equal(newDev, NEW_DEV);
  });
});
