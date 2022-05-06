//SPDX-License-Identifier: ISC
pragma solidity 0.7.6;
pragma experimental ABIEncoderV2;

// Inherited
import "@openzeppelin/contracts/access/Ownable.sol";

contract TestOwnable is Ownable {
    constructor() Ownable() {}
}
