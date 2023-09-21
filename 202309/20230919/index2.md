# 이더리움

- 우리가 블록체인을 배우면서
- 만든사람한테 물어보는거?
- 이더리움을 만든 사람이 누구지?
- 비탈릭 부테린

- 이더리움 백서?
  중요 항목 : 이더리움 계정 , 메시지, 메시지와거래
- https://ethereum.org/ko/whitepaper/#ethereum-accounts
- 액기스만 한번 내용을 보자

# 차세대 스마트 컨트랙트와 탈중앙화된 어플리케이션 플랫폼

- 이더리움 창시장 : 비탈릭 부태린
- 비트코인의 보완을 좀더 신경쓴거 같은 느낌
- 비트코인이 많이 언급 되는걸로 보아 아마 사토시 나카몸토를 옹호하는 경향이있을것으로 추측된다.
- 내용을 보면 비트코인과 다른점이 크게 다른점이 있는데

- 비트코인은 결제라는 포커스에 맞춰서 구현을했다면
- 이더리움은 탈중앙화한 어플리케이션을 제안 했다고 보면된다.
- 여기서 중요한 내용은 스마트 컨트랙트와 어플리케이션이라는 키워드가 중요합니다.

- 비트코인이 결제에 포커스가 맞춰저 있다면

- 이더리움은 결제에 대해서 포커스가 맞춰저 있지 않다. 플랫폼에 포커스가 맞춰저 있다할수있다.

- 백서의 내용을보면 블록체인 기술을 사용한 대안적인 어플리케이션이 두가지가있는데

- 사용자 정의 화폐와 금융 상품을 블록체인 위로 표현하기 위한 컬러드 코인

- 물리적 대상의 소유권을 표현하는 스마트 자산

- 도메인 이름과 같은 비동질적 자산을 기록하는 네임코인

- 임의적인 계약의 규칙을 구현한 코드에 의해 디지털 자산을 좀 더 관리하는게 편하도록
- 스마트 컨트랙트를 만들고
- 더 나아가 블록체인을 기반으로 자율조직 DAO 등이 있고.

- 이더리움은 완벽한 튜링완전 프로그래밍 언어가 심어진 블록체인이다.
- 튜링완전은 무엇인가? 간단히 말해서 계산 가능한 문제를 해결할 수 있는 모든 기계의 공통된 능력

- 이 프로그래밍 언어는 코딩된 규칙에 따라 어떤 상태를 다르게 변환 시키는 기능
- 누가? 유저들이 작성할 수 있게 해서 설명한 시스템을 구현 가능하게 하고
- 우리가 아직 상상하지 못한 어플리케이션들도 쉽게 만들수 있도록 도와주는것.

- 역사(비트코인)

- 과거에 비트코인과 비슷하게 암호화폐를 만들려고 시도는했는데
- 중앙화 되어있던 데이터 의존, 조명을 받기힘들었고
- 탈중앙화 개념을 제안 및 시도 그러나 번번히 실패
- 사토시 나카모토가 합의 알고리즘(POW)의 사용으로 탈중앙화를 실현시켰다.
- 비탈릭 부테린은
- 작업증명의 2가지 문제를 동시에 해결했다고 한다.

1. 아주 간단하고, 효과가 좋은 합의 알고리즘 제공
2. 누구나 합의 프로세스에 참여할수 있다.

- 이후에 지분증명(POS) 라는 새로운 방식의 합의 알고리즘이 등장

- POW
- 각 노드가 가진 계산 능력을 통해서 nonce를 증가시켜 hash를 찾기

- POS
- 화폐의 보유랑에 따라 각 노드의 결정된 정도를 계산하는것?
- 결국 이더리움은 지분 증명을 선택했다.

- 누구나 합의 프로세스에 참여를 할수 있는데 컴퓨터 파워가 많이 올라가다보니 채굴에 급급한 마이너들이<br>
  그룹을 만들어서 자기들끼리 보상을 나누어 먹는 형태를 만들었고

- 그 그룹이 거대해지면 결국 중앙화가 되는것이 아니냐라는 말이 나올정도

- 이러한 이유로 이더리움은 POW에서 POS로 변경되었다.

(이더리움은 비트코인의 utxo 트랜잭션을 그냥 상태변환이라 말한다.)

# 상태 변환 시스템으로 비트코인

- 이더리움 백서에서는 비트코인의 트랜잭션을 상태변환 시스템이라고 말하고있다.<br>
  비트코인의 트랜잭션은 UTXO인데 이더리움은 트랜잭션 내용을 상태 처리라고 하고잇어요

- 우리가 배운 내용에서 쉽게 보자면 추상적으로 리액트의 상태로 라고 봐도 무방하긴하다.
- 상태에 대해 간단히 설명하면
- 쇼핑몰을 만들었는데 상품을 구매하는 프로세스에서 상품의 현재 상태를 나타낼 테이블을 하만들었다.
- 상품테이블에 주문이라는 상태가 있고

- 주문접수 -> 결제확인 -> 상품 준비 -> 상품 발송 -> 배송완료 -> 상품수령

- order -> state

- UTXO -> Transaction -> UTXO ->

- 우리가 UTXO를 통해 계정의 Account 들의 balance를 구했고
- 새로운 트랜잭션 처리가 되면 새로운 UTXO를 만들어주는 것을 상태에 비유했다.

# 스크립팅

- 비트코인이 정말 낮은 수준의 스마트 컨트랙트가 존재하는데 별로 효율적이지 못하다.<br>
  비탈릭 부테린은 서명에 관련된 로직을 스마트 컨트랙트라는 시점으로 바라보고 있다.

- 비트코인의 UTXO는 공개키만으로 해당 계정의 잔액을 조회할수 있는데
- 단순 스택의 기반으로 프로그래밍 언어로 표현되어있는데.

- 토이 비트코인을 만들면서 한명의 서명을 만들어 트랜잭션 생성 처리를 했는데

- 비트코인에서 2,3개의 개인키를 가지고 서명을 만들어서 검증을 할수있도록 간단한 스크립틍을 작성할수있다.
- 이걸 실제로 사용한 플랫폼을 본적이없다. 실용성이 없고 어렵고 효율적이지않다.

- 그래서 이더리움은 이내용을 스마트 컨트랙트 개념으로 보고있다.

- 문제점
- 튜링 불안정성
- 가치가없다
- 다양한 상태를 표현할수없다
- 블록체인의 해독할방법이없다.?? 비문이..

# 이더리움

- 이더리움을 한줄로 표현한다면..
- 이더리움의 목적은 분산 어플리케이션 제작을 위한 대체 프로토콜

- 이렇게 생산하는 이유는.

1. bitcoin을 가지고 예금, 보험 및 금융상품에 대한 것을 구현할수가없다. (이자 구현 x)
2. 사이트 및 게임에 적용하기 힘든 부분들이 많다. (상품 및 게임아이템 매칭 x)

- 비트코인은 결제에 포커스가 맞춰저있고 결제에대한 부분만 처리를 하고 있기때문에
- 이자의 부분은 따로 구현을 해서 처리를 해야겠다.

- 그렇지만 이더리움은 이 부분을 보완해서, 이더리움이라는 플랫폼을 만든것

- 작은 시간으로 탈중앙화를 사용해서 데이터를 저장하는 사이트, 혹은 게임을 만들수 있게 되었다.
- 우리는 이런것들은 DAPP이라고 부른다.

- 탈중앙화랑 통신을 할수있는 프로토콜을 유저가 쉽게 구현할수있도록 도와준다.
- 탈중앙화에 데이터를 지정할수없다 === 스마트 컨트랙트

- 그로 인해 비트코인의 UTXO 형시적인 데이터 아닌 상태 즉 변화를 만들어서 , 데이터를 만들어서 데이터를 저장하고
- 사용할수있도록 트랜잭션의 구조를 완전히 바꾼것

# 이더리움 어카운트

- 이더리움에는 상태 state 는 account라고 하는 객체로 구성되어있다.

- 토이 비트코인에서 만들었던.
- 개인키를 가지고
- 공개키를 만들고
- 12byte 를 잘라서 만들었던게 account이고

```javascript
interface Account {
  nonce: number; // 계정이 발생시킨 트랜잭션의 횟수 , 이중지불 방지 용도로 존재한다.
  balance: string; // 이더리움 잔액
  storageRoot: string; // account의 상태 저장 공간 초기에는 비어 있다.
  codeHash: string; // 스마트 컨트랙트 계약의 코드
}
```

- 이더 라는 이더리움 플랫폼의 화폐 단위가 있고

- 트랜잭션을 발생 시킬때 수수료를 지불하는데
- 이더리움네트워크는 이더라는 친구가없으면 코드를 실행할수 없게 하기 위해서
- 데이터를 저장할수가없다.

### account의 두가지 개념

- address라고도 많이 말한다.?(교수님은)

- EOA: 프라이빗 키에 의해서 통제되는 외부 소유 어카운트
- CA: 컨트랙트 코드애 의해 통제되는 컨트랙트 어카운트

### EOA

- 쉽게 말해 EOA는 우리가 토이로 만들었던 비트코인의 ACCOUNT의 개념이고

- 다른 Account에 이더를 전송하거나 주고 받을수 있는. 개인키가 존재하고 개인키를 가지고 서명을해서 트랜잭션을 생성

- 트랜잭션을 이더리움에서는 메시지

```javascript
// EOA
interface Account {
  nonce: number; // 계정이 발생시킨 트랜잭션의 횟수 , 이중지불 방지 용도로 존재한다.
  balance: string; // 이더리움 잔액
  storageRoot: string; // 사용 x
  codeHash: string; // 사용 x
}
```

## CA

- 컨트랙트 코드에 의해 통제되는 컨트렉트 어카운트
- CA 계정은 Account 객체 구조에 있는 모든 속성을 사용한다.

  ```javascript
  // CA
  interface Account {
    nonce: number; // 트랜잭션의 횟수 카운터 (이중지불 방지 용도)
    balance: string; // 이더리움의 잔액
    storageRoot: string; // account의 상테 저장 공간(초기에는 비어있다.)
    codeHash: string; // 스마트 컨트랙트 계약의 코드
  }
  ```

  - 개인키가 없어 전송이 불가하다.
  - 나중에 스마트 컨트랙트 코드를 솔리디티 언어를 사용해서 코드를 작성할 것.

  ```
  pragma solidity ^0.8.0

  contract testContract {
    uint256 value;          // 상태 변수 선언
    function setValue(unit256 newValue) public {
        value = newValue;       // 상태 변수를 변경
        function getValue() public view returns (uint256){
            return value;       // 상태 변수 조회
        }
    }
  }
  ```

- 이때 codehash들은 코드를 컴파일해서 결과를 저장한다.
- storageRoot에는 value 상태 변수를 키가 값의 형태로 데이터 저장을 한다.

- 그리고 CA는 메시지를 발생시킬 수 없다.

  - 왜냐하면 개인키가 존재하지 않기 때문이다.

- 그렇다면 CA는 어떻게 사용하지??
- Message라는 것을 받으면 CA가 자신의 코드를 활성화 시키고, Message가 어떤 값인지를 보고 읽거나 상태 변수의 내용을 변경하게 된다.
- 또는 Message를 보낼 수 있게된다.

# 메시지와 트랜잭션

- 이더리움에서 서명이 있는 영수증은 트랜잭션이라고 말하고 서명이 없는 영수증은 Message라고 말한다.
- EOA -> Transaction
- CA -> Message

```javascript
interface Message {
  from: string; // 메시지를 보내는 account or 컨트랙트의 주소
  to: string; // 메시지를 받는 어카운트 or 컨트랙트 주소
  gas: number; // 메시지를 처리하기 위해 사용할 가스의 양
  gasPrice: number; // 가스 당의 가격
  value: number; // 메시지와 함께 전송할 이더 량
  data: string; // 메시지 데이터
  nonce: number; // 메시지를 전송한 account의 nonce값
}

interface Transaction extends Message {
  v: number; // 서명 v 값.
  r: string; // 서명 r 값.
  s: string; // 서명 s 값.
}
```

- 가스는 이후에 우리가 좀 더 진행을 하면서 추가로 알아볼건데
- 예를 들어, 우리가 차를 끌고 주유소에 가서 리터 당 얼마인지 확인을 한다.
  - 1L 당, 2000원
  - 알기로는 byte당 5gas로 측정된다.