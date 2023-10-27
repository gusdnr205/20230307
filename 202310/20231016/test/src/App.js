import { useState, useEffect } from "react";
import axios from "axios";
import useWeb3 from "./hooks/web3.hook";
import abi from "./abi/NFT.json";
import NFTList from "./component/NFTlist"; // NFTList 컴포넌트를 import

const App = () => {
  const [file, setFile] = useState(null);
  const [contract, setContract] = useState(null);
  const [name, setName] = useState("");
  const [nft, setnft] = useState([]);
  const [description, setDescription] = useState("");
  //  0x8c3c59f7907744F5F45A6F1045aF88592A00E20e
  const { user, web3 } = useWeb3();
  const [myNFT, setmyNFT] = useState([]);
  useEffect(() => {
    if (web3 !== null) {
      if (contract) return;
      // 네트워크에서 컨트랙트 조회해서 인스턴스로 가져옴
      const ERC20 = new web3.eth.Contract(
        abi,
        "0x6361825E4F69932F990f79B49ebBfA2BBa7C176f",
        { data: "" }
      );
      setContract(ERC20);
      console.log("준비완료", user.account);
    }
  }, [web3]);
  // 최신 블록 번호 가져오기

  useEffect(() => {
    if (!contract) return;
    getAccounts();
  }, [contract]);

  const gettestdata = async () => {
    // const result = await web3.eth.getBlock(222, true);
    // console.log(result);
    // if (result.transactions) {
    //   result.transactions.forEach((transactionHash) => {
    //     console.log("Transaction Hash:", transactionHash);
    //   });
    // } else {
    //   console.log("No transactions found in this block.");
    // }
    web3.eth.getBlock("latest", true).then((block) => {
      console.log(block);
      block.transactions.forEach((tx) => {
        console.log(tx.hash); // 트랜잭션 해시 출력
      });
    });
    web3.eth
      .getTransaction(
        "0x057f5e9de8f87c319d73c2d4b8928d0da8aab5ac3e9c128f0dc08ad83626b75b"
      )
      .then((transaction) => {
        if (transaction) {
          console.log("Transaction:", transaction);
        } else {
          console.log("Transaction not found.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const subscribetest = async () => {
    // "newBlockHeaders" 이벤트 구독
    const subscription = await web3.eth.subscribe(
      "newBlockHeaders",
      (error, blockHeader) => {
        if (!error) {
          console.log("Block Header:", blockHeader);
        } else {
          console.error("Error:", error);
        }
      }
    );

    // 이벤트 핸들러를 추가
    await subscription.on("data", (blockHeader) => {
      console.log("New Block Header:", blockHeader);
    });

    // subscription.on("error", (error) => {
    //   console.error("Subscription Error:", error);
    // });

    console.log(subscription);
  };
  const msgsenderOwntoken = async (sender) => {
    try {
      const result = await contract.methods.msgsenderOwntoken(sender).call();
      console.log("msgsenderOwntoken 내가가진 토큰", result);
      const arr = [];
      for (let i = 0; i < result.length; i++) {
        arr.push(
          await geturlmaker(
            await contract.methods.tokenURI(Number(result[i])).call()
          )
        );
      }
      console.log(arr);
      setmyNFT(arr);
      return arr;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getjsondata();
  }, [myNFT]);
  useEffect(() => {}, [nft]);
  const getjsondata = async () => {
    console.log("getjsondata", myNFT);
    const result = [];
    for (let i = 0; i < myNFT.length; i++) {
      result.push(await axios.get(myNFT[i]));
    }
    setnft(result);
    console.log("getjsondata", result);
  };
  // useEffect(() => {
  //   // URL로부터 데이터 가져오기
  //   axios
  //     .get(
  //       "https://coral-dear-gibbon-930.mypinata.cloud/ipfs/Qmaz8pnzEG5nxUatKMkWDLyJokG4bmzhFAqSMNTahybT4q"
  //     )
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("데이터를 가져오는 중 오류 발생:", error);
  //     });
  // }, []);
  const testenvent = async () => {
    const contractAddress = "0x95fF8D3CE9dcB7455BEB7845143bEA84Fe5C4F6f";

    const contractABI = [
      // ERC-20 Transfer 이벤트 ABI
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        name: "Transfer",
        type: "event",
      },
      // ERC-20 Approval 이벤트 ABI
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        name: "Approval",
        type: "event",
      },
    ];

    const newcontract = new web3.eth.Contract(contractABI, contractAddress);

    console.log(contract);
    // ERC-20 Transfer 이벤트 구독
    const reuslt2 = newcontract.events.Transfer();
    console.log(reuslt2);
    reuslt2.on("data", (event) => {
      console.log("Transfer Event data:", event.returnValues);
    });

    reuslt2.on("error", (error) => {
      console.error("Event error:", error);
    });

    // ERC-20 Approval 이벤트 구독
    const reuslt3 = newcontract.events.Approval();
    console.log(reuslt3);
    reuslt3.on("data", (event) => {
      console.log("Approval Event data:", event.returnValues);
    });
    reuslt3.on("error", (error) => {
      console.error("Event error:", error);
    });
  };
  const gettestabigenerator = async () => {
    const result = await web3.eth.getTransaction(
      "0x97ea66f8ea9431e3e73c4c315088e45c460c2209c2677839126999faad59c123"
    );
    console.log(result);
    const input = result.input;
    console.log(input);
    const contractABI = web3.eth.abi.decodeParameter("string", input);
    // .then((transaction) => {
    //   // 트랜잭션의 input 데이터를 ABI로 파싱
    //   const input = transaction.input;
    //   const contractABI = web3.eth.abi.decodeParameter("json", input);

    //   console.log("Contract ABI:", JSON.parse(contractABI));
    // })
    // .catch((error) => {
    //   console.error("Error:", error);
    // });
  };
  const geturlmaker = async (url) => {
    const result = await contract.methods.urlmaker(url).call();
    console.log(result);
    return result;
  };
  const getTotalsupply = async () => {
    const result = await contract.methods.showtotalsupply().call();
    console.log(Number(result));
    return Number(result);
  };
  const minting = async (_tokenId, tokenuri) => {
    const fromAddress = user.account; // 또는 원하는 발행 주소
    const result = await contract.methods
      .minting(_tokenId, tokenuri)
      .send({ from: fromAddress });
    console.log("minting", result);
  };

  const getAccounts = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
  };

  const upload = async () => {
    const filedata = new FormData();
    filedata.append("file", file);
    const pinataApiKey = "a63f32b8318edcbf3323";
    const pinataSecretKey =
      "b2eca7e56fb1df87e043ad638c9bf208ed0d4a3da116d911570186802c60fa4a";
    const resp = await axios.post(
      "https://api.pinata.cloud/pinning/pinFileToIPFS",
      filedata,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          pinata_api_key: pinataApiKey,
          pinata_secret_api_key: pinataSecretKey,
        },
      }
    );
    console.log(resp);
    let allurl = await geturlmaker(resp.data.IpfsHash);
    const Totalsupply = await getTotalsupply();

    const json = {
      name: name,
      description: description,
      image: allurl,
      attributes: [],
    };

    console.log("json", json);

    const resp2 = await axios.post(
      "https://api.pinata.cloud/pinning/pinJSONToIPFS",
      {
        pinataContent: json,
        pinataMetadata: { name: "pinnie.json" },
      },
      {
        headers: {
          "Content-Type": "application/json",
          pinata_api_key: pinataApiKey,
          pinata_secret_api_key: pinataSecretKey,
        },
      }
    );
    console.log(resp2);
    await minting(Totalsupply, resp2.data.IpfsHash);
  };

  return (
    <>
      <div>
        <h1>NFT List</h1>
        <NFTList nftData={nft} />{" "}
        {/* NFTList 컴포넌트를 사용하여 배열 데이터를 표시 */}
      </div>
      <div>
        <label>IFPS에 파일 업로드</label>
        <input
          type="file"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        ></input>
      </div>
      <div>
        <label>이름</label>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <label>설명</label>
        <input
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></input>
      </div>
      <button onClick={upload}>파일 업로드</button>
      <button
        onClick={() => {
          msgsenderOwntoken(user.account);
        }}
      >
        내가 가진 nft 보기
      </button>
      <button onClick={gettestdata}>테스트데이터얻기</button>
      <button onClick={subscribetest}>구독 테스트</button>
      <button onClick={gettestabigenerator}>abi판단 테스트</button>
      <button onClick={testenvent}>이벤트 테스트</button>
    </>
  );
};

export default App;
