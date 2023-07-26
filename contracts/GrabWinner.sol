//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

interface Contract {
  function attempt() external ;
}

contract GrabWinner {
  
  function toggleWinner(address winnerContract) external {
    Contract(winnerContract).attempt();
  }

}