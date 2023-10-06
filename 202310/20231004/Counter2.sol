// SPDX-License-Identifier: MIT

pragma solidity ^0.8.13;
import "./Counter.sol";


contract Counter2{
  uint256 value; // 상태변수 uint 정수 부등호가 없는 정수 상태 변수
  Counter counter; // Counter 컨트랙트의 구조를 가지고있는 counter상태변수를 선언
  constructor(){
    // Counter 인스턴스를 하나 생성
    counter = new Counter(); // 이렇게 생성하면 counter 로 안에있는 메서드들을 사용할수있다. 물론 public으로 지정되어있는경우

  }
  //원격 프로시저 호출해서 send로 보낸다.
  function setValue(uint256 _value)public{
    value=_value;
    }
  function getValue()public view returns(uint256){
    return value;
   }
   function getValue2() public view returns(uint256)
   {
    return counter.getValue();
   }
}