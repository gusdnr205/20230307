import { Transaction } from "sequelize";
import {
  TrransactionData,
  TransactionRow,
  TransactionPool,
  TxIn,
  TxOut,
  UnspentTxOut,
  UnspentTxOutPool,
} from "./transaction.interface";

// UTXO
// 각 노드의 UTXO 데이터베이스
// 각 주소별로 가지고있는 잔액 금액을 가지고있는 객체가 포함되어있다.

// A가 B에게 1비트를 보내면
// 트랜잭션을 발생시키고
// txIn에 이전 트랜잭션에서 남은 미사용 객체 UTXO를 참조해서 (A가 얼마나 가지고있는지 확인 잔액들)
// txOut 결과물의 UTXO객체를 만듫어놓고
// 보내는 금액보다 많이 가지고있으면 트랜잭션을 승인
// UTXO에 결과로 생성된 잔액과 주소를 포함한 객체를 추가

class Unspent {
  // UTXO 객체 목록
  // 누가 얼마를 가지고있는지 의 내용이 배열로 담겨있다.
  // 미사용 객체들이 담겨있을 예정
  private readonly unspentTxOuts: UnspentTxOutPool = [];
  constructor() {}
  // 보열줄함수가 필요 private 라서 get UTXO 내용 반환위해서
  getUnspentTxOutPool() {
    return this.unspentTxOuts;
  }
  // 미사용 객체를 txin에서 참조할떄 객체를 조회하는데
  // 사용하고나면 객체 값을 수정하는게 아니라 한번도 사용하지않은 객체들이 UTXO에 담겨있고
  // 사용을하면 제거
  delete(txin: TxIn) {
    const { txoutId, txOutIndex } = txin;
    const index = this.unspentTxOuts.findIndex((unspentTxOut: UnspentTxOut) => {
      return (
        // utxo가 포함된 트랜잭션 아이디와 인덱스가 같은지 비교
        unspentTxOut.txOutId === txoutId &&
        unspentTxOut.txOutIndex === txOutIndex
      );
    });
    // 미사용 객체 검증
    // unspentTxouts에서 찾은 값을 제거 (사용한 객체 제거)
    if (index !== -1) this.unspentTxOuts.splice(index, 1);
  }
  // 새로운 객체가 생성이되면
  // txout 정보를 가지고 utxo에 생성 목록에 추가
  create(hash: string) {
    return (txout: TxOut, txOutIndex: number) => {
      const { amount, account } = txout;
      this.unspentTxOuts.push({
        txOutId: hash, // 트랜잭션의 해시값
        txOutIndex, // 트랜잭션의 인덱스
        account, // 누가 소유한것인지
        amount,
      });
    };
  }
  update(transaction: TransactionRow) {
    // 처리되는 트랜잭션의 내용
    // txIns 입력값 누가 누구에게 송긍하는지 내용잔액 확인
    // txOuts 누가 받았는지 acoount,amount 잔액, 주소
    const { txIns, txOut, hash } = transaction;
    if (!hash) throw new Error("Hash가 정상이지않다.");
    // 트랜잭션 출력값을 UTXO에 추가
    // 목록에 추가 미사용 객체
    txOut.forEach(this.create(hash));
    // 사용한 객체 제거
    //utxo목록에서 사용한 객체들은 제거
    // bind 현재 작성된 위치의 객체를 참조
    txIns.forEach(this.delete.bind(this));
  }
  // 특정 계정(account)의 객체를 UTXO에서 목록을 조회
  getUTXO(account: string): UnspentTxOut[] {
    // 계정의 잔액의 정보를 가지고있는 객체를 조회하는함수
    const myUnspentTxouts = this.unspentTxOuts.filter(
      (utxo) =>
        // utxo에 있는 요소들을 순회하면서
        // account가 찾는 account매개변수 값이랑 같으면
        utxo.account === account
    );
    return myUnspentTxouts;
  }
  // 특정 계정의 잔액 금액의 총합을 조회하는 메서드
  getAmount(myUnspentTxouts: UnspentTxOut[]) {
    // 초기값은 0으로 매개변수 두번쨰로 전달
    // 첫번쨰 매개변수로 콜백함수
    // 콜백함수의 첫번쨰 매개변수는 누적값 순회하고 변환 누적값
    // 콜백의 두번쨰 매개변수는 순회하는 요소
    // 값의 합을 내보낸것
    return myUnspentTxouts.reduce((acc, utxo) => acc + utxo.amount, 0);
  }
  // 주어진 계정의 잔고가 보내는 금액보다 큰지 검증
  isAmount(account: string, sendamount: number) {
    // 내 주소와 잔액 정보가있는 사용하지않은 객체 조회 (배열)
    const myUnspentTxouts = this.getUTXO(account);
    // 본인의 총잔액
    const totalAmount = this.getAmount(myUnspentTxouts);
    // 계정의 총잔고가 보내는 금액보다 크면 true
    if (totalAmount > sendamount) return true;
    // 아니면 false 로 못보냄
    return false;
  }
}

export default Unspent;
