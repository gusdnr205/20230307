// 지갑 서버

import express from "express";
import { Wallet } from "./index";
import path from "path";
import fs from "fs";

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 지갑페이지 접속했을때
app.get(`/`, (req, res) => {
  const page = fs.readFileSync(
    path.join(__dirname, "/view/index.html"),
    "utf8"
  );
  res.send(page);
});
// app.use(express.static(path.join(__dirname,)));

// 지갑을생성 요청

app.post("/newWallet", (req, res) => {
  res.json(new Wallet());
});

// 지갑들 정보 불러오기
app.post("/walletList", (req, res) => {
  const list = Wallet.getWalletList();
  res.json(list);
});
//해당 지갑 주소로 지갑 찾기
app.post("/walletSelect/", (req, res) => {
  const { account } = req.body;
  const privatekey = Wallet.getWalletprivatekey(account);
  res.json(new Wallet(privatekey));
});

app.listen(4000, () => {
  console.log("server listening on");
});
