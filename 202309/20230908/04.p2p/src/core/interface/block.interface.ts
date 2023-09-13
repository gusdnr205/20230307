export interface IBlockHeader {
  version: string;
  height: number;
  timestamp: number;
  previousHash: string;
}

export interface IBlock extends IBlockHeader {
  merkleRoot: string;
  hash: string;
  nonce: number; // 얼마나 이 블록을 채굴하기위해서 연산을 돌렸는가?;
  difficulty: number;
  data: string[];
}
