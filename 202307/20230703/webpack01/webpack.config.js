const path = require("path");

// webpack 구성 객체를 만들어서 내보내 주자
module.exports = {
    // 진입점 시작점 설정
    entry:"./src/index.js"
    ,
    // 번들된 파이르이 내보낼 옵션? 어떤파일로 내볼낼건지
    output:{
        filename: "bundle.js",
        // 파일의 폴더 설정
        path : path.join(__dirname,"dist"),
    }
}