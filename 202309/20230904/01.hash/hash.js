const { SHA256 } = require("crypto-js");
// const  SHA256  = require("crypto/sha256");

// SHA-256 현재 블록체인에서 가장 많이 체택하고있는 암호 방식
// 출력속도가 빠르고 단방향성 암호화 방법을 제공한다.
// 복호화가 불가능하다. 아직까지 큰 단점은 발견된건없고
// 속도가빨라서 인증서나 블록체인에 많이 사용중임
// SHA256 알고리즘은 256비트로 구성된 64자리 문자열로 암호화해준다.

const str = "안녕하세요";

console.log("해시 결과 : ", SHA256(str).toString());
console.log("길이는? : ", SHA256(str).toString().length);
