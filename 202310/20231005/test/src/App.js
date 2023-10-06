import { useEffect, useState } from "react";
import useWeb3 from "./hooks/web3.hook";
import abi from "./abi/Counter.json";

const App = () => {
  const { user, web3 } = useWeb3();
  const [count, setCount] = useState("0");
  const [countContract, setCountCountract] = useState(null);

  useEffect(() => {
    if (web3 !== null) {
      if (countContract === null) {
        // web3.eth.Contract : 네트워크에 배포되어있는 컨트랙트를 조회하고 인스턴스로 생성해둔다
        // 메소드를 통해서 네트워크에 상호작용 할수있다.

        // web3.eth.Contract = (abi, CA, option)
        //  {data : ""} 빈값으로 일단 디폴트 옵션 추가
        const Counter = new web3.eth.Contract(
          abi,
          "0x5bDAe9FC399EE345B3a1B5Fb63F05fcE1b56e02A",
          { data: "", from: "" }
        );
        // 이후에 디폴트 옵션을 추가하고싶다 하면
        // 객체의 키값에 직접 추가해도 된다.
        Counter.options.from = "0x000";
        setCountCountract(Counter);
      }
    }
  }, [web3]);

  const getValue = async () => {
    if (countContract === null) return;
    const result = web3.utils
      .toBigInt(await countContract.methods.getValue().call())
      .toString(10);
    setCount(result);
  };

  const increment = async () => {
    await countContract.methods.increment().send({
      from: user.account,
      data: countContract.methods.increment().encodeABI(),
    });
    getValue();
  };

  const decrement = async () => {
    await countContract.methods.decrement().send({
      from: user.account,
      data: countContract.methods.decrement().encodeABI(),
    });
    getValue();
  };

  useEffect(() => {
    if (countContract !== null) getValue();
  }, [countContract]);

  if (user.account === null) return "연결된 지갑 주소가 없음";
  return (
    <>
      <div>{user.account}</div>
      <div>카운터 : {count}</div>
      <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>
    </>
  );
};

export default App;
