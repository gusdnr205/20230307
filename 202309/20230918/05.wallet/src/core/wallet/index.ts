import { randomBytes } from "crypto";
import elliptic from "elliptic";
import { SHA256 } from "crypto-js";
import fs from "fs";
import path from "path";
// 자갑 클래스 만들고 페이지에서 지갑생성을 한번 확인해보기

// elliptic 인스터스 생성
const ec = new elliptic.ec("secp256k1");

// 기본 지갑 정보 저장 경로

const dir = path.join(__dirname, "../../data");
export class Wallet {
  public account: string;
  public privatekey: string;
  public publickey: string;
  public balance: number;
  constructor(privatekey: string = "") {
    // 생성 단계에서 개인키값이 없으면 만들어넣자
    this.privatekey = privatekey || this.getPrivatekey();
    this.publickey = this.getPublickey();
    this.account = this.getAccout();
    this.balance = 0;
    if (privatekey == "") Wallet.createWallet(this);
  }
  static createWallet(myWallet: Wallet) {
    // fs 모듈로 파일 생성
    // 지갑을 생성하면 주소를 저장할 것.
    // 주소안에는 개인키 넣어보기
    const filename = path.join(dir, myWallet.account);
    const filecontents = myWallet.privatekey;
    fs.writeFileSync(filename, filecontents, "utf-8");
  }
  static getWalletList(): string[] {
    // 폴더를 읽어서 안에있는 파일내용을 문자열로 가져온다.
    const files: string[] = fs.readdirSync(dir);
    return files;
  }
  public getPrivatekey(): string {
    return randomBytes(32).toString("hex");
  }
  public getPublickey(): string {
    const keypair = ec.keyFromPrivate(this.privatekey);
    console.log(`kepair.getPublic`, keypair.getPublic().encode("hex", false));
    return keypair.getPublic().encode("hex", false);
  }
  // data 폴더안에 해당하는 지갑 주소를 찾아서 반환
  static getWalletprivatekey(accout: string): string {
    const filename = path.join(dir, accout);

    const filecontents = fs.readFileSync(filename);

    return filecontents.toString();
  }

  public getAccout(): string {
    return `0x${this.publickey.slice(26).toString()}`;
  }
}
