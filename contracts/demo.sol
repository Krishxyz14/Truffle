// SPDX-License-Identifier: UNLICENSED
 pragma solidity 0.8.16;

contract demo{
    uint public Number;

    function getNum(uint _Number) public {
        Number = _Number;
    }
    function setNum() public view returns(uint){
        return Number;
    }
}