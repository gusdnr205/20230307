class CryptoModule {
  static hashtoBinary(hash: string): string {
    let binary: string = "";
    // 16진수를 -> 2진수로 바꾸는식
    // 해시 문자열을 2글자식 가지고와서 반복
    for (let i = 0; i < hash.length; i += 2) {
      // 반복문에서i를 2씩증가
      const hexByte = hash.substr(i, 2);
      // 16진수의 바이트를 10진수로 변환하고
      const dec = parseInt(hexByte, 16);
      // 10진수를 2진 문자열로 변환 8자리로 패딩
      const binaryByte = dec.toString(2).padStart(8, "0");
      binary += binaryByte;
    }
    return binary;
  }
}

export default CryptoModule;
