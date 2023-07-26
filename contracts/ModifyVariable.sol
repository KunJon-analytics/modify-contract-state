//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract ModifyVariable {
  uint public x;
  string public dev;

  constructor(uint _x, string memory _dev) {
    x = _x;
    dev = _dev;
  }

  function modifyToLeet() public {
    x = 1337;
  }

  function modifyDev(string calldata _dev) public {
    dev = _dev;
  }

}