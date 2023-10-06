import { useEffect, useState } from "react";
import useWeb3 from "./hooks/web3hook";
import abi from "./abi/Counter.json";
// const App = () => {
//   const { user, web3 } = useWeb3();
//   const [count, setCount] = useState(0);

//   // CA 컨트랙트 주소에 상태변수를 조회하는 함수를 작성
//   const getCount = () => {
//     // web3있는지확인
//     if (web3 == null) return;
//     // find 배열을 순회하면서 값을 찾는데
//     // 순회하는 요소는 객체 data
//     // 순회하는 요소 객체에 name키가 getvalue인것을 찾는다.
//     const getValueData = abi.find((data) => data?.name === "getValue");
//     const data = web3.eth.abi.encodeFunctionCall(getValueData, []);
//     // data 실행시킬 내용이 담겨있음
//     // 원격 프로시저 호출
//     web3.eth
//       .call({
//         to: "0xc9a193067cAE79AabAA4b366a85c597ed24B8783",
//         data,
//       })
//       .then((data) => {
//         // toBN 큰 자리수의 값을 다루기 떄문에
//         // .toString(10) 10진수 변경 16진수에서
//         // const result = web3.utils.toBigInt(data).toString(10);
//         const result = parseInt(data, 16);
//         setCount(Number(result));
//       });
//   };
//   // 값을 블록체인 네트워크에 요청해서 상태변수를 변경하는 함수
//   const increment = async () => {
//     const incrementData = abi.find((data) => data?.name === "increment");
//     const data = web3.eth.abi.encodeFunctionCall(incrementData, []);

//     // 접속한 지갑의 주소
//     // useWeb3 hook에서 지갑의 정보를 받아왔음
//     const from = user.account;
//     const _data = await web3.eth.sendTransaction({
//       from: from,
//       to: "0xc9a193067cAE79AabAA4b366a85c597ed24B8783",
//       data,
//     });
//     console.log(_data);
//     getCount();
//   };
//   // 값을 감소시키는 함수
//   const decrement = async () => {
//     const decrementData = abi.find((data) => data?.name === "decrement");
//     const data = web3.eth.abi.encodeFunctionCall(decrementData, []); // [] 전달하는 매개변수가없다는의미

//     const from = user.account;
//     const _data = await web3.eth.sendTransaction({
//       from: from,
//       to: "0xc9a193067cAE79AabAA4b366a85c597ed24B8783",
//       data,
//     });
//     console.log(_data);
//     getCount();
//   };
//   useEffect(() => {
//     // 최초의 값조회
//     if (web3 !== null) {
//       getCount();
//     }
//   }, [web3]);
//   if (user.account === "") return "지갑 로그인하셈";
//   return (
//     <>
//       <div>
//         <h2>카운트:{count}</h2>
//         <button onClick={increment}>증가</button>
//         <button onClick={decrement}>감소</button>
//       </div>
//     </>
//   );
// };

// export default App;

const App = () => {
  const { user, web3 } = useWeb3();
  const [count, setCount] = useState(0);

  const getCount = () => {
    if (web3 == null) return;

    const getValueData = abi.find((data) => data?.name === "getValue");
    const data = web3.eth.abi.encodeFunctionCall(getValueData, []);

    web3.eth
      .call({
        to: "0x5B048Ae7440e90863D27E17F31723318C04Fec11",
        data,
      })
      .then((data) => {
        const result = parseInt(data, 16);
        setCount(Number(result));
      });
  };

  const increment = async () => {
    const incrementData = abi.find((data) => data?.name === "increment");
    const data = web3.eth.abi.encodeFunctionCall(incrementData, []);

    const from = user.account;
    await web3.eth.sendTransaction({
      from: from,
      to: "0x5B048Ae7440e90863D27E17F31723318C04Fec11",
      data,
    });
    getCount();
  };

  const decrement = async () => {
    const decrementData = abi.find((data) => data?.name === "decrement");
    const data = web3.eth.abi.encodeFunctionCall(decrementData, []);

    const from = user.account;
    await web3.eth.sendTransaction({
      from: from,
      to: "0x5B048Ae7440e90863D27E17F31723318C04Fec11",
      data,
    });
    getCount();
  };

  useEffect(() => {
    if (web3 !== null) {
      getCount();
    }
  }, [web3]);

  if (user.account === "") {
    return <div>지갑 로그인하셈</div>;
  }

  return (
    <>
      <div>
        <h2>카운트:{count}</h2>
        <button onClick={increment}>증가</button>
        <button onClick={decrement}>감소</button>
      </div>
    </>
  );
};

export default App;
