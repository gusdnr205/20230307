const merkle = require("merkle");

// merkle tree 데이터의 암호화 구조가 트리 형태

// 머클트리

const data = ["A", "B", "C", "D", "E", "F"]; // 만역 홀수일떄는어떻게 해쉬화하는가? 마지막값을 하나 복사해서 붙인뒤 짝수화해서 처리한다.
// 데이터의 무결성 검증에 사용되는 트리구조
// 블록의 필수 요소 이고 데이터들을 해시화해서 더한후 해시화 반복
// 트리처럼 뻗어서 마지막 루트 해시값을 구해서 사용한다.

const merkleTree = merkle("sha256").sync(data);
const Root = merkleTree.root();
// console.log("트리", merkleTree);
console.log("루트", Root);

// 검증해보고싶다면 A 해시화 B 해시화 둘다 더함 ab
// 검증해보고싶다면 C해시화 D 해시화 둘다 더함 cd
// 검증해보고싶다면 E 해시화 F 해시화 둘다 더함 ef

// ab 해시화 cd 해시화 더해 ABCD
// ef ef efef
// abcdefef
