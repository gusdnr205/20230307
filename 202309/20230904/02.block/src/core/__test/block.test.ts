// 테스트 코드를 작성하면 시간이 오래걸리긴하지만
// 코드의 품질을 좀더 올릴수있따

// 단위별로 테스트를 진행해서 디버깅을하고 코드를 작성할수 있기떄문에

// 1단계 코드를 실행하고 2단계 코드를 실행하고 절차적으로 테스트를 우리가 진행을 해볼수가있다.

import { Block } from "@core/block/block";

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
  // it : 테스트할 코드의 최소단위
  it("블록 추가", () => {
    const data = ["Block 1"];
    newBlock = Block.generateBlock(GENESIS, data);

    console.log(newBlock);
    // const data2 = ["Block 2"];
    // newBlock2 = Block.generateBlock(newBlock, data2);
    // console.log(newBlock2);
  });
  it("블록의 유효성 검증,", () => {
    const isValidNewBlock = Block.isValidNewBlock(newBlock, GENESIS);
    if (isValidNewBlock.isError) {
      //expect: tobe : 값이 맞는지 확인할때
      // 성공한 결과가 맞는지 확인할떄 사용하는 코드
      // true false 비교해서 맞는지 확인
      return expect(true).toBe(false);
    }
    expect(isValidNewBlock.isError).toBe(false);
  });
});
