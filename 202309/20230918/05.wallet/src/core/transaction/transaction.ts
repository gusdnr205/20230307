import {
  TransactionPool,
  TransactionRow,
  TrransactionData,
  TxIn,
  TxOut,
  UnspentTxOut,
} from "./transaction.interface";

import { SignatureInput } from "elliptic";
import { SHA256 } from "crypto-js";

// 보내는 사람의 타입 구조 정의
class Sender {
  account: string; // 보낼 사람의 계정 주소
}
// 영수증
// 누가 누구에게 보냈는지의 내용을 가지고있는 객체 구조 정의
class Receipt {
  sender: Sender; // 보내는 사람의 정보
  received: string; // 받는 사람의 계정
  amount: number; // 보낸 금액
  signature: SignatureInput; //서명정보
}

class Transaction {
  // 블록 채굴을 하면
  // 블록 생성권하을 얻고
  // 트랜잭션을 처리하는데
  // 첫번쟤 트랜잭션으로 트랜잭션이 하나 추가되는데
  // 특수한 트랜잭션이 블록의 첫번째로 추가되는데
  // 채굴한 사람의 주소, 전달도는 금액 보상이 들어간다.
  private readonly REWARD = 50; // 코인베이스 트랙잰션의 보상
  private readonly trasnsaionPool: TransactionPool = []; // 트랜잭션이 처리되지않은 내용이 있는 공간
  constructor() {}
  // 트랜잭션 목록을 확인 조회하는 함수
  getPool() {
    return this.trasnsaionPool;
  }
  // 트랜잭션 추가
  create(recipt: Receipt, unspentTxOuts: UnspentTxOut[]) {
    // 트랜잭션의 output내용의 객체를 utox에 추가
    // 서명을 확인하고
    if (!recipt.signature) throw new Error("서명이 정상적이지않다.");

    // 잔액 계산
    const [txIns, amount] = this.createInput(
      unspentTxOuts,
      recipt.amount,
      recipt.signature
    );
    // 출력 트랜잭션 객체를 생성
    const txOuts = this.createOutput(
      recipt.received,
      recipt.amount,
      recipt.sender.account,
      amount
    );
    // 트랜잭션 객체 생성
    const transaction: TransactionRow = {
      txIns, // 누가 누구에게 전송한 금액의 내용이 포함되어있고 잔약확인
      txOuts, // 최종적으로 결과물 누구의 주소에 얼마나 포함되는지 객체가 생성
    };
    // 트랜잭션 객체에 hash 값 추가
    transaction.hash = this.serializeRow(transaction);
    this.trasnsaionPool.push(transaction);
    // 바로 트랜잭션이 처리되는게 아니라 pool에 담기고
    // 대기상태로 있다가 블록이 채굴되면 검증하고 승인이 되면 트랜잭션을 처리하고 하나의 블록에
    // 여러개의 트랜잭션 내용을 기록한다.
    return transaction;
  }
  createInput(
    myUnspentTxouts: UnspentTxOut[],
    ReceiptAmout: number,
    signature: SignatureInput
  ): [TxIn[], number] {
    // 0보다 큰지 비교
    let targetAmount = 0;
    const txins = myUnspentTxouts.reduce(
      (acc: TxIn[], unspentTxOut: UnspentTxOut) => {
        // 현재 순회하는 요소 (본인의 마사용 객체 utxo)의
        // 잔액과 포함된 트랜잭션 hash 값 포함딘 트랜잭션 index 를 구조분해할당
        const { amount, txOutId, txOutIndex } = unspentTxOut;
        // 검증 혹시나 0을 보내면
        if (targetAmount >= ReceiptAmout) return acc;
        targetAmount += amount;
        acc.push({ txOutId, txOutIndex, signature });
        return acc;
      },
      // type추론이 안된 TxIn[] 타입인지
      [] as TxIn[]
    );
    return [txins, targetAmount];
  }
  createOutput(
    received: string,
    amount: number,
    sender: string,
    sendamount: number
  ) {
    // amout 받은사람의 금액? 얼마를 받았는지
    // send amount보낸사람의 잔약
    console.log(received, amount, sender, sendamount);
    const txouts: TxOut[] = [];
    // 객체 생성
    // txout 받는 사람, 얼마를 받았는지
    txouts.push({ account: received, amount });
    // 잔액은 보낸사람으로 다시 새로운 객체를 만들어서 목록에 추가
    if (sendamount - amount > 0) {
      txouts.push({ account: sender, amount: sendamount - amount });
    }
    // 잔액을 비교해서 검증
    const outAmount = txouts.reduce(
      (acc, txout: TxOut) => acc + txout.amount,
      0
    );
    console.log(outAmount, sendamount);
    // 전체 금액 검증
    // 내가 가지고있는 금액에서
    // 보낸값과 내가 다시남은 잔액이
    // 총금액과 같은지 검증
    if (outAmount !== sendamount) {
      throw new Error("금액이 안맞음 오류");
    }
    return txouts;
  }
  serializeTxOut(txOut: TxOut): string {
    // 트랜잭션을 문자열로 반환
    const { account, amount } = txOut;
    const text = [account, amount].join("");

    return SHA256(text).toString();
  }
  serializeTxIn(txIn: TxIn): string {
    // 입력 트랜잭션을 문자열로 반환
    const { txOutIndex } = txIn;
    const text = [txOutIndex].join("");

    return SHA256(text).toString();
  }
  // 트랜잭션을 직렬화한 문자열로 반환
  serializeTx<T>(data: T[], callback: (item: T) => string) {
    // 데이터를 배열로 문자열반환
    // acc는 초기값이 "" 배열 수만큼 반복시키면서 callback함수 반환값 문자열을 계쏙 더해서
    // 긴문자열 반환
    return data.reduce((acc: string, item: T) => acc + callback(item), "");
  }
  // 트랜잭션 row를 전부 직렬화해서 반활할 함수
  serializeRow(row: TransactionRow) {
    const { txIns, txOuts } = row;
    // 직렬화된 문자열로 변환
    const txOutsText = this.serializeTx<TxOut>(txOuts, (item) =>
      this.serializeTxOut(item)
    );
    const txInText = this.serializeTx<TxIn>(txIns, (item) =>
      this.serializeTxIn(item)
    );
    return SHA256(txOutsText + txInText).toString();
  }
  // 블록을 채굴하면 채굴자가
  // 블록의 채굴 보상을 받는데
  // 특수한 트랙잭션이 생성된다.
  // 블록의 첫번째로 기록이 되는데
  // 코인베이스 트랜잭션
  // 채굴자의 주소와 보상이 제공된다.
  createCoinbase(account: string, latestBlockHeight: number) {
    const txin = this.createTxIn(latestBlockHeight + 1);
    const txout = this.createTxOut(account, this.REWARD);
    return this.createRow([txin], [txout]);
  }

  createRow(txIns: TxIn[], txOuts: TxOut[]) {
    // txIns,txout
    // 문자열로 변환 해시값으로 변환
    const transactionRow = new TransactionRow();
    transactionRow.txIns = txIns;
    transactionRow.txOuts = txOuts;
    transactionRow.hash = this.serializeRow(transactionRow);
    return transactionRow;
  }
  createTxIn(
    txOutIndex: number,
    txOutId?: string,
    signature?: SignatureInput
  ): TxIn {
    // 단순하게 입력 트랜잭션 생성
    const txIn = new TxIn();
    txIn.txOutIndex = txOutIndex;
    txIn.txOutId = txOutId;
    txIn.signature = signature;
    return txIn;
  }
  createTxOut(account: string, amount: number): TxOut {
    // 받는 계ㅉ어 주소랑 출력 트랜잭션 생성
    if (account.length !== 40) throw new Error("정상적인 주소가 아니다");
    const txout = new TxOut();
    txout.account = account;
    txout.amount = amount;
    return txout;
  }

  // 트랜잭션 pool업데이트
  update(transaction: TransactionRow) {
    const findCallback = (tx: TransactionRow) => transaction.hash == tx.hash;
    const index = this.trasnsaionPool.findIndex(findCallback);
    if (index !== -1) this.trasnsaionPool.splice(index, 1);
  }
  // 트랜잭션 목록 업데이트
  sync(transaction: TrransactionData) {
    if (typeof transaction == "string") return;

    transaction.forEach(this.update.bind(this));
  }
}

export default Transaction;
