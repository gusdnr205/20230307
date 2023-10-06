// const Counter = artifacts.Counter // 트러플안에있는 글로벌 명령어
const Coutner = artifacts.require("Counter");

module.exports = (deployer) => {
  // deployer 배포 내용이 포함된 객체를 전달받고
  // deploy 메서드가 해당 컴파일된 내용을 네트워크에 배포 진행
  deployer.deploy(Coutner);
};
