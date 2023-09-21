import Block from "@core/block/block";
import Chain from "@core/chain/chain";

import { GENESIS } from "@core/config";
import { randomBytes } from "crypto";
import elliptic from "elliptic";
import { SHA256 } from "crypto-js";
const ec = new elliptic.ec("secp256k1");
import Transaction, { Receipt } from "@core/transaction/transaction";
import Unspent from "@core/transaction/unspent";

describe("지갑 만들기", () => {
  let privKey: string;
  let pubKey: string;
  let signature: elliptic.ec.Signature;
  let newBlock: Block;
  let newChain: Chain;
  let addres: string;
  let addres2: string;

  it("개인키 생성", () => {
    // 256자리의 2진수 랜덤 값을 만들고 toString("hex")를 사용해서
    // 16 진수로 나타내줌
    privKey = randomBytes(32).toString("hex");
    console.log("개인키 : " + privKey);
    console.log("길이 : " + privKey.length);
  });

  it("공개키 생성", () => {
    const keyPair = ec.keyFromPrivate(privKey);
    pubKey = keyPair.getPublic().encode("hex", true);
    console.log("공개키 : " + pubKey);
    console.log("길이 : " + pubKey.length);
    // 공개키는 130자 문자열
  });

  it("서명 만들기", () => {
    // 개인키랑 hash 값이 필요해서 SHA256함수 사용
    const keyPair = ec.keyFromPrivate(privKey);
    const hash = SHA256("transaction data").toString();
    signature = keyPair.sign(hash, "hex");
    console.log("서명 : ", signature);
  });
  it("검증하기", () => {
    // 필요한 값 : 서명, 공개키, hash
    const hash = SHA256("transaction data").toString();
    const verify = ec.verify(hash, signature, ec.keyFromPublic(pubKey, "hex"));
    console.log(verify);
  });

  // 계정 만들기
  it("지갑 주소", () => {
    addres = pubKey.slice(26).toString();
    addres2 = "0e59bc1ee2db9b6628a596aa6e725f9024a0f2a7";
    console.log("계정 : " + `0x${addres}`, addres.length);
  });
  it("블록 추가", () => {
    const data = [addres];
    newBlock = Block.generateBlock(GENESIS, data, GENESIS);
    // 블록의 난이도에 따른 마이닝을 동작해서
    // 조건에 맞을때까지 연산을 반복한뒤에 생성된 블록을 newBlock에 받아온다.
    // 이전 블록은 GENESIS(최초 블록)
    console.log(newBlock);
  });
  let transaction: Transaction;
  transaction = new Transaction();
  let unspent = new Unspent();
  // 테스트 케이스 실행 전에 실행되는 코드
  beforeEach(() => {});
  it("블록 체인 추가 및 코인베이스 보상획득", () => {
    newChain = new Chain();
    newChain.addToChain(newBlock);

    console.log(newChain.get());

    console.log(newChain.getBlockByHash(newBlock.hash));
    console.log("ㄴ업ㅈㄷ8", addres.length);
    console.log("address test", addres);

    let qwe = transaction.createCoinbase(addres, newChain.length());
    unspent.update(qwe);
  });
  it("txOut 생성", () => {
    // 임시 보내는 값
    const amount = 40;

    // 트랜잭션 객체를 사용
    // txOut객체 하나 생성
    const txout = transaction.createTxOut(addres, amount);

    console.log(txout);
    let asd = unspent.getUTXO(addres);
    console.log("asd", asd);
    const receipt: Receipt = {
      sender: { account: addres },
      received: addres2,
      amount: 20,
      signature,
    };
    transaction.create(receipt, asd);
    console.log(transaction.getPool(), "송금 시작");

    // expect(txout.account).toBe(addres2);
    // expect(txout.amount).toBe(amount);
  });
});
