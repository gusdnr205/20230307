import "./App.css";
import { useEffect, useState } from "react";
import Web3 from "web3";
function App() {
  // 브라우저에서 이더리움 블록체인 상호작용
  // 브라우저에서 메타마크스 확장 프로그램 통해 네트워크에 상호작용 할수있다.
  // 외부 소유 계정 정보를 가지고있다. 네트워크의 정보도 가지고있다.
  // 트랜잭션을 발생시키면 서명의 정보가 필요한데. 개인키를 직접 전달을 하는게 아니고
  // 메타마스크 안에 안전하게 보관이 되어있다.

  // 원격 프로시저 호출을 통해 컨트랙트의 함수를 실행시킬수있고
  // 네트워크의 함수 메서드도 사용을해서 계정의 정보나 등등 로직을 사용할수있다.

  // 데이터베이스를 가지고 로그인을 구현을하면
  // 아이디 비밀번호를 익력해서 중앙화된 데이터베의스에 값이 저장되고 있고

  // 사용자가 로그인했을때 프로세스를
  // 지갑 로그인으로 가져가고 (탈중앙화된 어플리케이션 로그인 처리 방식)
  // ct test
  // npm i web3
  const [account, setAccount] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [balance, setBalanc] = useState(0);
  useEffect(() => {
    (async () => {
      // 배열의 구조 분해할당
      // window
      const [data] = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(data);
      setWeb3(new Web3(window.ethereum));
      setAccount(data);
    })();
  }, []);

  const balanceBtn = async () => {
    const balance = await web3.eth.getBalance(account);
    const _balance = await web3.utils.fromWei(balance, "ether");
    console.log(_balance);
    setBalanc(_balance);
  };

  // 카운트앱
  // 스마트 컨트랙트 배포

  // 트랜잭션 EOA=> EOA
  // 잔액 송금해보는 버튼
  return (
    <div className="App">
      {/* 지갑의 내용을 가지고 걔쩡조회 */ account || "로그인하셈"}
      <br />
      {balance} ETH
      <br />
      <button onClick={balanceBtn}>조회</button>
    </div>
  );
}

export default App;
