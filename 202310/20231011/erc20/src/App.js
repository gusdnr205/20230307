import { useEffect, useState } from "react";
import useWeb3 from "./hooks/web3.hook";
import abi from "./abi/ERC20.json";

const App = () => {
  const { user, web3 } = useWeb3();
  const [contract, setContract] = useState(null);
  const [token, setToken] = useState("0");
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    if (web3 !== null) {
      if (contract) return;
      // 네트워크에서 컨트랙트 조회해서 인스턴스로 가져옴
      const ERC20 = new web3.eth.Contract(
        abi,
        "0x0187538598DA7AdcC4C743aeDE9490ba85F4B1e0",
        { data: "" }
      );
      setContract(ERC20);
    }
  }, [web3]);

  // 해당 지갑의 포켓몬 조회
  const getPokemon = async (account) => {
    const result = await contract.methods.getPokemons().call({
      from: account,
    });
    return result;
  };

  const buyPokemons = async (account) => {
    try {
      const result = await contract.methods
        .buyPokemon()
        .send({ from: account });
      console.log(
        "포켓몬을 구매했습니다. 트랜잭션 해시:",
        result.transactionHash
      );
      getAccounts();
    } catch (error) {
      console.error("포켓몬 구매 중 오류 발생:", error);
    }
  };

  useEffect(() => {
    if (!contract) return;
    getAccounts();
  }, [contract]);

  // 지갑의 토큰량 조회
  const getToken = async (account) => {
    if (!contract) return;
    let result = await web3.utils
      .toBigInt(await contract.methods.balanceOf(account).call())
      .toString(10);
    result = await web3.utils.fromWei(result, "ether");
    return result;
  };

  // 메타마스크 계정들 조회
  const getAccounts = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const _accounts = await Promise.all(
      accounts.map(async (account, index) => {
        const token = await getToken(account);
        const pokemon = await getPokemon(account);
        // 추가로 포켓몬들고, 어떤 포켓몬을 들고있는지 추가할 부분
        return { account, token, pokemon };
      })
    );

    setAccounts(_accounts);
  };

  if (user.account === null) return "지갑 연결하세요";

  return (
    <div>
      <button onClick={() => buyPokemons(user.account)}>포켓몬 뽑기</button>
      토큰 보유량: {token}
      {accounts.map((item, index) => (
        <div key={index}>
          계정 {item.account} : 토큰 값: {item.token}
          <div>
            포켓몬들
            <br />
            {item.pokemon.map((pokemon, index) => (
              <div key={index}>
                {pokemon.name}:{" "}
                <img
                  style={{ width: "200px", height: "auto" }}
                  src={pokemon.url}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
