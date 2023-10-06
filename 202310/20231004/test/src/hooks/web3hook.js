// import { useEffect, useState } from "react";
// import Web3 from "web3";
// // npm i web3
// // customhook 작성시 use를 붙여야한다.
// const useWeb3 = () => {
//   // 현재 접속한 메타마스크 지갑정보를 담을변수
//   const [user, setUser] = useState({
//     account: "",
//     balance: "",
//   });
//   // 네트워크와 연결한 web3 인스턴스를 담을 변수
//   const [web3, setWeb3] = useState(null);
//   useEffect(() => {
//     // 메타마스크가 설치되어있는지 확인
//     // ethereum 객체가 있는지 확인
//     if (window.ethereum) {
//       console.log("eth", window.ethereum);
//       // 로그인
//       window.ethereum
//         .request({
//           method: "eth_requestAccount",
//           // then 다음 애로우펑션 매개변수로 받음 요청하고 받은값을 구조분해할당해서 반환받은값의 첫번째 값이 필요
//           // 배열 구조분해할당 [data]
//         })
//         .then(async ([data]) => {
//           // Web3 인스턴스 생성
//           const web3Provider = new Web3(window.ethereum);
//           setWeb3(web3Provider);
//           setUser({
//             account: data,
//             // Web3Provider.utils.toWei 요청을 보내고
//             // 매개변수로
//             // await web3Provider.eth.getBalance(data) 현재 지갑의 잔액을 조회해서
//             // 조회한단위는 wei단위 이것을
//             // ethet 단위로 변경하자
//             balance: web3Provider.utils.toWei(
//               await web3Provider.eth.getBalance(data),
//               "ether"
//             ),
//           });
//         });
//     } else {
//       alert("메타마스크를 설치하십쇼");
//     }
//   }, []);

//   return {
//     user,
//     web3,
//   };
// };

// export default useWeb3;
import { useEffect, useState } from "react";
import Web3 from "web3";

const useWeb3 = () => {
  const [user, setUser] = useState({
    account: "",
    balance: "",
  });

  const [web3, setWeb3] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum
        .request({
          method: "eth_requestAccounts",
        })
        .then(async ([data]) => {
          const web3Provider = new Web3(window.ethereum);
          setUser({
            account: data,
            balance: web3Provider.utils.toWei(
              await web3Provider.eth.getBalance(data),
              "ether"
            ),
          });
          setWeb3(web3Provider);
        });
    } else {
      alert("메타마스크를 설치하십쇼");
    }
  }, []);

  return {
    user,
    web3,
  };
};

export default useWeb3;
