// html-webpack-plugin
// html 파일을 만들어줌
const path = require("path");

// 앱 포함된 번들을 관리하는 프로세스를 만들어준다.
// 주로 리액트같은 앱 작성할떄 주로 사용
//spa 싱글페잉지 앱 애플리케이션

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports={
    // 개발 모드 설정 // 빌드할떄 시간을 최적화 단계를 건너뒤고
    mode : "development",

    // 진입점 시작점 
    entry : "./src/index.js",

    // 모듈의 규칙
    module:{
        rules:[
            {
                // test : .js. jsx. 확장자를 가진 파일에대한 규칙을 설정
                test : /\.(js|jsx)$/,
                // node_modules 폴더를 제외하고 파일처리
                // exclude 제외할 폴더
                exclude : /node_modules/,
                //babel-loader 를 이용해서 파일을 번들링한다.
                use : ["babel-loader"],
            }
        ]
    },
    // 플러그인 설정 
    plugins : [
        // HtmlWebpackPlugin 을 사용해서 index.html 번들링 폴더에 생성
        new HtmlWebpackPlugin({
            template: "src/index.html",
            filename:"index.html"
        })

    ],
    // 번들링 내보낼 속성
    output: {
        filename: "bundle.js",
        // 경로설정
        path: path.join(__dirname,"dist")
    }
}