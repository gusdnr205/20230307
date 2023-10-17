import { useState, useEffect } from "react";
import axios from "axios";
import useWeb3 from "./hooks/web3.hook";
import abi from "./abi/NFT.json";
const App = () => {
  const [file, setFile] = useState(null);
  const [contract, setContract] = useState(null);
  const [name, setName] = useState("");
  const [accounts, setAccounts] = useState([]);
  const [description, setDescription] = useState("");

  const { user, web3 } = useWeb3();
  useEffect(() => {
    if (web3 !== null) {
      if (contract) return;
      // 네트워크에서 컨트랙트 조회해서 인스턴스로 가져옴
      const ERC20 = new web3.eth.Contract(
        abi,
        "0x5F80E8e0D93f19639a84256071a76859d97Ee9cB",
        { data: "" }
      );
      setContract(ERC20);
    }
    console.log("준비완료", user.account);
  }, [web3]);

  useEffect(() => {
    if (!contract) return;
    getAccounts();
  }, [contract]);

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
      {/* <div>
        <a href="https://coral-dear-gibbon-930.mypinata.cloud/ipfs/QmZJVDhfMdybvkKMHFYY7WxcUWzoAsSaZmAeDHkML67zTd">
          <img
            src="https://coral-dear-gibbon-930.mypinata.cloud/ipfs/QmZJVDhfMdybvkKMHFYY7WxcUWzoAsSaZmAeDHkML67zTd"
            style={{ width: "200px", height: "auto" }}
          />
        </a>
      </div> */}
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
    </>
  );
};

export default App;
