// SPDX-License-Identifier: MIT

pragma solidity ^0.8.13;

contract Baseball{
  // 컨트랙트를 배포한 사람
  // 컨트랙트 소유자

  // 컴퓨터가 숫자 3개를 랜덤하게 뽑고
  // 이 숫자를 플레이어들이 맞추는 게임
  // 숫자를 입력해서 값을 비교하고 틀리면 그사람은 이더를 CA에 보낸다.
  // CA플레이어들이 게임을 하면서 모인 이더를 최종적으로 맞춘 사람에게 보상으로 주고
  // 게임 플레이 횟수가 있는데 
  // 게임 플레이 횟수가 있는데 횟수만큼 진행했는데 못맞췄다
  // 보상은 아무도 못받고 컨트랙트 소유자가 이더를 가져간다.

  // 컨트랙트 배포자
  address private owner;

  // 게임의 횟수 
  // constant 구문을 추가하면 상태를 변경하지 않을 상태변수 상수다
  uint256 private constant GAME_COUNT =5;
  // ticketa 게임을 하고싶으면 지불해야하는 이더
  uint256 private ticket= 5 ether;

  // 정답의 값을 담아놓을 변수
  // 컴퓨터가 정할 랜덤값 
  // 3자리수의 숫자
  uint256 private random;

  // 게임의 진행도
  uint256 private progress;

  // 총모여있는 상금
  uint256 private reward;

  // 게임의 현재 상태
  enum GameStatus{
    playing, // 0
    GameOver // 1
  }
  // 최초의 상태값은 0 
  // 게임 플레이중 playing
  GameStatus gameStatus ; // 0
  // 컨트랙트 생성자
  // 컨트랙트 배포될때 딱 한번 실행되는데
  // msg는 컨트랙트를 실행시킨사람의 정보를 담고있다.? dd 실행시킨사람
  constructor(){
    // 최초에 딱 한번 배포자가 상태변수에 담기고
    owner=msg.sender;
    // keccak256 : 솔리디티에서 랜덤값을 뽑을때 사용 매개변수를 해시값으로 변경해준다. SHA-3 이걸 사용한다. 해시값만들때 
    // block
    // abi.encodePacked : 매개변수로 전달된 내용들을 가지고 바이트 배열로 만들어준다.
    random = uint256(keccak256(abi.encodePacked(block.timestamp,block.difficulty,block.coinbase,block.number)));
    // 큰숫가자가 나오는데
    // 이숫자를 가지고 나머지 연산을 통해 원하는 자리수의 숫자를 구하자

    // 100 ~999 까지의 범위를 지정을 할거다.
    random = (random % 900 )+100;
    // 100 ~999의 랜덤값
  }
  // 유저의 값을 받아서 비교를 통해 값이 맞는지 게임의 정답을 맞췄는지 구할 함수
  // payable 이더로 돈을 내고 해야하기떄문
  function gameStart(uint256 _value) public payable{
    require(progress<GAME_COUNT,"GameOver");
    require(msg.value==ticket,"ticket amount error(5 ether)");
    require((_value>=100)&& (_value<1000),"_value should be (99<_value<1000)");
    progress +=1;
    if(_value==random)
    {
      // 게임 끝 정답 
      // CA의 잔액이 보상 만큼 있는지 검사 
      require(reward<=address(this).balance);
      payable(msg.sender).transfer(address(this).balance);
      reward= 0;
      // gameStatus 상태가 상수값 1로 들어감
      // 1은 게임이 끝났다는 얘기
      gameStatus = GameStatus.GameOver;
    }else if(progress==GAME_COUNT)
    {
      // 게임 끝 정답 
      // CA의 잔액이 보상 만큼 있는지 검사 
      require(reward<=address(this).balance);
      payable(owner).transfer(address(this).balance);
      reward= 0;
      // gameStatus 상태가 상수값 1로 들어감
      // 1은 게임이 끝났다는 얘기
      gameStatus = GameStatus.GameOver;
    }
    else{
      reward += msg.value;
    }
  }
  // 지금 현재 쌓인 보상을 보여줄 함수
  function getRward()public view returns(uint256){
    return reward;
  }
  // 게임이 얼마나 진행됬는지 보여줄함수
    function getProgress()public view returns(uint256){
    return progress;
  }
  // 테켓의 금액을 보여줄함수               
                          // 지정자 제한자
  function getTicketPrice() public view returns(uint256){
    return ticket;
  }
  // 어드민 모드
  // 정답을 확인하는 함수
  function getRandom() public returns(uint256) {
    // msg.sender는 payable달려잇어야한다.
    // require(owner==msg.sender,"admin");
    if (address(owner)== address(msg.sender))
    {    return random;
    }else{
    return 0;
      
    }
  }
  // 게임중인지 확인할 함수
  function getplaying()public view returns(uint256) {
    // 게임이 진행되고있는 상수값이 0
    uint256 Playing = 0;
    if((gameStatus !=GameStatus.playing) || (progress == GAME_COUNT))
    {
      // 게임이 끝났다.
      Playing = 1;
    }
    
    return Playing;
  }
  function showowner()public view returns(address){
    return owner;
  }
  function gamerestart()public payable{
    random= uint256(keccak256(abi.encodePacked(block.timestamp,block.difficulty,block.coinbase,block.number)));
    random = (random % 900 )+100;
    progress=0;
    reward=0;
  }
}