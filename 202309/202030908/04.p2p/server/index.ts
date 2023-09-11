import { Block } from "@core/block/block";
import P2P from "./p2p";
import express, { Express, Request, Response } from "express";
import os from "os";
import cors from "cors";
//jeonghyeon-ug@jeonghyeon-ug-ui-MacBookPro 04.p2p % npm i -D @types/express
// npm i --D @types/ws
const app: Express = express();
const ws: P2P = new P2P();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/chains", (req: Request, res: Response) => {
  res.json(ws.get());
});

app.post("/block/mine", (req: Request, res: Response) => {
  // 블록에 기록할 내용을 받고
  const { data }: { data: Array<string> } = req.body;
  const newBlock: Block | null = Block.generateBlock(
    ws.latestBlock(),
    data,
    ws.getAdjustmentBlock()
  );
  if (newBlock === null) res.send("error");
  ws.addToChain(newBlock);
  res.json(newBlock);
});

// post 작성을했었는데 get으로 바꿀거고 오타이슈 보인 v4 확인도 귀찮아서??
app.get("/peer/add", (req: Request, res: Response) => {
  const networkinterface = os.networkInterfaces();
  let v4: string;
  for (const key in networkinterface) {
    const Array = networkinterface[key];
    for (const value of Array) {
      if (!value.internal && value.family === "IPv4") v4 = value.address;
      // v4 ip주소
    }
  }
  // private network 가나시에 맞춘것이다. 가나시란 테스트환경
  ws.addToPeer(`ws://${v4}:7545`);
  res.end();
});

app.get("/peer", (req: Request, res: Response) => {
  const sockets = ws.getSockets();
  res.json(sockets);
});

app.listen(8080, () => {
  console.log("서버 열림");
  ws.listen(7545);
});
