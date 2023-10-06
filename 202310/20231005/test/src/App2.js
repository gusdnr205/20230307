import { useEffect, useState } from "react";
import useWeb3 from "./hooks/web3.hook";
import abi from "./abi/Baseball.json";

const App = () => {
  const { user, web3 } = useWeb3();
  const [ticket, setTicket] = useState("0");
  const [BaseballContract, SetBaseballContract] = useState(null);
  // 우리가 입력해서 매개변수로 요청할 값 우리가 정한 정답
  const [value, setValue] = useState("");
  // 게임을 한사람들이 얼마나 이더를 쌓아놨는지
  // 정답 맞추면 다 그사람 것
  const [reward, setReward] = useState("0");
  // 게임을 몇판이나 사람들이 진행했는지
  const [progress, setProgress] = useState("0");
  // 컨트랙트 배포자만 알수있는 답
  const [random, setRandom] = useState("000");
  // 게임이 진행중인지 여부
  const [message, setMessage] = useState("");
  // 주인 판단
  const [Owner, setOwner] = useState("");
  useEffect(() => {
    if (web3 !== null) {
      if (BaseballContract === null) {
        const Baseball = new web3.eth.Contract(
          abi,
          "0x94832d64A02A7C3d0D3b0F8d574c1274df6d6b22",
          { data: "" }
        );
        SetBaseballContract(Baseball);
      }
    }
  }, [web3]);
  const getTicket = async () => {
    if (BaseballContract === null) return;
    const result = web3.utils
      .toBigInt(await BaseballContract.methods.getTicketPrice().call())
      .toString(10);
    setTicket(await web3.utils.fromWei(result, "ether"));
  };

  const getReward = async () => {
    if (BaseballContract === null) return;
    const result = web3.utils
      .toBigInt(await BaseballContract.methods.getRward().call())
      .toString(10);
    setReward(await web3.utils.fromWei(result, "ether"));
  };

  const getPlaying = async () => {
    const playing = web3.utils
      .toBigInt(await BaseballContract.methods.getplaying().call())
      .toString(10);
    setMessage(playing);
  };

  const getProgress = async () => {
    const progress = web3.utils
      .toBigInt(await BaseballContract.methods.getProgress().call())
      .toString(10);
    setProgress(progress);
  };
  const getRandom = async () => {
    const Random = web3.utils
      .toBigInt(
        await BaseballContract.methods.getRandom().call({
          from: user.account,
        })
      )
      .toString(10);
    setRandom(Random);
    console.log(Random);
  };
  const gameStart = async () => {
    if (value.length < 3) {
      alert("숫자 3자리이상 입력해라");
      return;
    }
    await BaseballContract.methods.gameStart(Number(value)).send({
      from: user.account,
      value: web3.utils.toWei("5", "ether"),
    });

    render();
  };
  const gamerestart = async () => {
    console.log("재시작 버튼 클릭");
    await BaseballContract.methods.gamerestart().send({
      from: user.account,
    });
    render();
  };

  const showOwner = async () => {
    const Owner = await BaseballContract.methods.showowner().call();

    // console.log(web3.utils.toBigInt(Owner).toString(10));
    setOwner(Owner);
    console.log(Owner);
    console.log(user.account);
    // Owner;
    // render();
  };
  const render = () => {
    getTicket();
    getReward();
    getPlaying();
    getProgress();
    getRandom();
    showOwner();
  };

  useEffect(() => {
    if (BaseballContract !== null) {
      render();
    }
  }, [BaseballContract]);
  if (user.account === null) return "지갑연결하세요";

  return (
    <>
      <div>컨트랙트 주인: {Owner}</div>
      <div>플레이유저: {user.account}</div>

      <div>티켓 가격 : {ticket}</div>
      <div>현재 게임 진행도 : {progress}/5</div>
      <div>총 상금 : {reward}</div>
      <div>진행 상황 : {message == 0 ? "게임중" : "게임종료"}</div>
      <div>어드민인가?{random !== "000" ? random : "어드민이 아니시군요"}</div>
      <input
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          gameStart();
        }}
      >
        게임시작
      </button>
      {message == 1 ? (
        <button
          onClick={() => {
            gamerestart();
          }}
        >
          게임 재시작
        </button>
      ) : null}
    </>
  );
};

export default App;
