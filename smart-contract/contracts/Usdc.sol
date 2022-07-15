// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Usdc is ERC20, Ownable {
    constructor() ERC20("usdc", "USDC") {}

    function mint(address to, uint256 amount) public payable {
        _mint(to, amount);
    }
    receive() external payable {
        _mint(msg.sender, msg.value);
    }
}