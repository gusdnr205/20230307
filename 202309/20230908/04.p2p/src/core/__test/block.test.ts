// 테스트 코드를 작성하면 시간이 오래걸리긴하지만
// 코드의 품질을 좀더 올릴수있따

// 단위별로 테스트를 진행해서 디버깅을하고 코드를 작성할수 있기떄문에

// 1단계 코드를 실행하고 2단계 코드를 실행하고 절차적으로 테스트를 우리가 진행을 해볼수가있다.

import { Block } from "@core/block/block";
import Chain from "@core/chain/chain";

import { GENESIS } from "@core/config";

// describe : 테스트들의 그룹화 그룹을 지정 할수있다.
// 첫번쨰는 그룹의 명 이름 어떤 테스트 그룹인지?
// 두번쨰 매개변수로 테스들을 실행시키는 콜백함수
// describe("block 테스트 코드 그룹", () => {
//   //테스트들의 단위를 어떻게 작성하냐
//   // 하나의 테스트 단위 첫번쨰 매개변수에는 테스트 이름 명
//   // 두번쨰 매개변수에는 테스트의 동작을 가지고있는 콜백함수.
//   it("제네시스 블록 테스트", () => {
//     console.log(GENESIS);
//   });
//   it("오류테스트", () => {
//     // 오류가 여기 잡힐거고
//     console.log(GENESIS2);
//   });
// });
// describe : 테스트 코드의 그룹단위
// 블록의 난이도에 따른 마이닝을 동작해서 조건에 맞을떅까지 연산을 반복한뒤에 생성된 블록을 newBlock에 받아온다.
// 이전 블록은 GENESIS (최소블록)
describe("block 검증 ", () => {
  let newBlock: Block;
  let newBlock2: Block;
  let newChain: Chain;
  let newChain2: Chain;
  // it : 테스트할 코드의 최소단위
  it("블록 추가", () => {
    const data = ["Block 1"];
    // newBlock = Block.generateBlock(GENESIS, data);
    // newBlock = Block.generateBlock(GENESIS, data);
    // newBlock = Block.generateBlock(GENESIS, data);

    console.log(newBlock);
    // const data2 = ["Block 2"];
    // newBlock2 = Block.generateBlock(newBlock, data2);
    // console.log(newBlock2);
  });
  it("블록의 유효성 검증,", () => {
    // const isValidNewBlock = Block.isValidNewBlock(newBlock, GENESIS);
    // if (isValidNewBlock.isError) {
    //   //expect: tobe : 값이 맞는지 확인할때
    //   // 성공한 결과가 맞는지 확인할떄 사용하는 코드
    //   // true false 비교해서 맞는지 확인
    //   return expect(true).toBe(false);
    // }
    // expect(isValidNewBlock.isError).toBe(false);
  });

  // it("블록 체인 추가", () => {
  //   newChain = new Chain();
  //   newChain.addToChain(newBlock);
  //   console.log(newChain.get());
  // });
  it("블록 체인 추가", () => {
    // newChain = new Chain();
    // newChain.addToChain(newBlock);
    // console.log(newChain.get());
    // console.log(newChain.getBlockbyHeight(1));
    // 블록을 생성될 때마다 해시 값이 바뀌기 때문에 이미 결과로 나온 해시값으로 확인은 어렵다.
    // console.log("해시", newChain.getBlockbyHash(newBlock.hash));
  });

  // it("네트워크 체인 비교(롱기스트 체인 룰)", () => {
  //   newChain2 = new Chain();
  //   newChain2.replaceChain(newChain.get());
  //   console.log(newChain2.get());
  // });

  it("이전 10번째 블록 or 최초 블록", () => {
    // 현재 블록을 생성한다 가정하고
    // 현재 블록이 생성된 시간이 이전 10번째 블록으로부터 얼마나 걸렸는지
    // 확인을 하고 블록의 정해진 생성 주기보다 빠르면 난이도를 올리고 아니면 내린다.
    newChain = new Chain();
    for (let i = 0; i < 50; i++) {
      let asd = newChain.getAdjustmentBlock();
      let asd2 = newChain.latestBlock();
      let block = Block.generateBlock(
        newChain.latestBlock(),
        ["block"],
        asd2.timestamp - asd.timestamp
      );

      console.log(
        "체인의 마지막 블럭 - 10개전 블럭 시간 ",
        asd2.timestamp - asd.timestamp
      );

      newChain.addToChain(block);
    }
    console.log(newChain);
  });
});
