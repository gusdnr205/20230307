// SPDX-License-Identifier: MIT

pragma solidity ^0.8.13;

contract Counter{
  uint256 value; // 상태변수 uint 정수 부등호가 없는 정수 상태 변수
  // address sender = 0x0000000000000000000000000000000000000000000000000000000000000000000000000000000; // 40개 여야함
  constructor(){}
  //원격 프로시저 호출해서 send로 보낸다.
  function setValue(uint256 _value)public{
    value=_value;
    }
  function getValue()public view returns(uint256){
    return value;
   }
}