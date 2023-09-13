import { Block } from "@core/block/block";
import { GENESIS } from "@core/config";
import { Failable } from "@core/interface/failable.interface";

class Chain {
  private chain: Block[] = [GENESIS];
  private readonly INTERVAL = 10;
  // 현재 체인을 반환하는 함수
  get() {
    return this.chain;
  }

  // 길이를 반환하는 함수
  length() {
    return this.chain.length;
  }
  // 체인에 마지막 블록 변환함수
  latestBlock() {
    return this.chain[this.length() - 1];
  }
  // 블록 추가 메서드
  addToChain(receivedBlock: Block) {
    this.chain.push(receivedBlock);
    return this.latestBlock();
  }

  // 블록을 조회하는 메서드
  getBlock(callbackFn: (block: Block) => boolean) {
    const findBlock = this.chain.find(callbackFn);
    if (!findBlock) throw new Error("찾은 블로깅없음");
    return findBlock;
  }

  // 블록의 높이로 블록을 조회하는 함수
  getBlockbyHeight(height: number) {
    return this.getBlock((block: Block) => block.height === height);
  }

  // 블록의 해시로 찾는 함수
  getBlockbyHash(hash: string) {
    return this.getBlock((block: Block) => block.hash === hash);
  }

  // 10번쨰 블록들을 찾는 함수 현재위치에서
  getAdjustBlock() {
    const { height } = this.latestBlock();
    const findHeight =
      height < this.INTERVAL
        ? 1
        : Math.floor(height / this.INTERVAL) * this.INTERVAL;
    // 10번째들의 블록의 높이로 블록을 조회해서 블록을반환
    return this.getBlockbyHeight(findHeight);
  }

  // 다른 네트워크로 체인을 보낼때
  serialize() {
    return JSON.stringify(this.chain);
  }
  // 다른 네티워크에서 체인을 받을떄
  deserialize(chunk: string) {
    return JSON.parse(chunk);
  }
  // 상대방 체인과 본인의 체인을 비교
  replaceChain(receivedChain: Block[]): Failable<undefined, string> {
    // 본인의 체인과 상대방의 체인을 검사하는 로직
    // 실제 네트워크에서는 더복잡한 로직이 들어가있겠지만 우리는 체인의 길이를 비교하는 로지긍ㄹ 구혀할것
    // 전체 배경이 중요하다
    // 머클루트,해시값, 체인전체 검증 등등의 로직이 더추가 되어있을건데
    // 중요한건 체인의 길이를 비교하는것,롱기스트 체인룰

    // 상대방의 체인의 마지막 블록
    const latestReceivedBlock: Block = receivedChain[receivedChain.length - 1];
    // 본인의 마지막 블록
    const latestBlock: Block = this.latestBlock();

    if (latestReceivedBlock.height === 0) {
      return {
        isError: true,
        value: "상대방 네트워크 체인은 마지막 블록이 최초블록이다.",
      };
    }
    if (latestReceivedBlock.height <= latestBlock.height) {
      return {
        isError: true,
        value: "상대방 네트워크의 체인보다 내 체인이 같거나 크다",
      };
    }
    // 상대방의 체인이 내체인보다 길면
    // 내체인을 교체한다 전달받은 체인으로 업데이트
    this.chain = receivedChain;
    return { isError: false, value: undefined };
  }
  // 현재 블록 생성시점에서
  // -10번쨰 이전 블록구하기
  // 현재 높이값<10: 최초블럭을 반환하고
  // 현재높이가 >10: -10번째 블록을 반환
  // 이전 10번쨰 블록의 생성시간의 차이를 구해서
  // 그차이가 블록생성주기보다 빠르면 나ㅇㄴ이도를 증가
  // 생성주기가 느리면 난이도 하락
  // 비트코인 기준으로 블록의 생성시간은 10분에 1개
  // 10개를 생성하고자한다면 100분
  // 100분보다 빠르면 난이도를 상승시키고
  // 100분보다 느리면 난이도를 하락시킨다.
  getAdjustmentBlock() {
    const curremtlemgth = this.length();
    const adjustmentBlock: Block =
      this.length() < this.INTERVAL
        ? GENESIS
        : this.chain[curremtlemgth - this.INTERVAL];

    // 최초 블럭 or -10번쨰 블럭 반환
    return adjustmentBlock;
  }
}

export default Chain;