// 빌드폴더안에 컴파일된 Counter.json 을가져온다.
const Counter = artifacts.require("Counter");

// 배포관련된 객체가 들어온다

module.exports = (deployer) => {
  // deployer.deploy 메서드로
  // 가져온 json 파일 내용으로 배포를 진행
  deployer.deploy(Counter);
};
