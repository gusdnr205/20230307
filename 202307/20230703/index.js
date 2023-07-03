// babel

// 자바스크립트 코드의 변환을 도와주는 도구
// 자바스크립트를 컴파일 해주는 도구

// 자바스크립트 문법이 진화를 꾸준히 했고
// ES% -> ES6 문법이 개발되고
// ES6 문법이 개발되었는데 ES5에서 개발한것들을 모두 
// 변환하기는 힘들어서
// babel로 문법을 쉽게 고쳐서 쓰려고 변환시켜준다.

// 모듈 시스템

// ---------- commonjs = (require,module.exports) ---- //
// node js 환경
// a.js
// const text = "hihi";
// module.exportss=test;

// b.js에 가서 
// const {test} = require("a.js");
// console.log(text);
//----------------------------------------------------//


//ES6 

// a.js

// const text = "하이하이";

// 1. export {text}; 여러개를 내보낼 경우
// 2. exports default test 단일로 내보낼 경우 

// b.js
// 1. import {text} from "a.js"
// 2. import 원하는이름 from "a.js" 같은 2번의 경우

// console.log(text);

// babel 기본 사용범 

// babel 기본 사용법

// babel은 기본적으로 자바스크립트로 구성되어있다.
// npm 으로 설치가능 

// 1. babel default setting install 

// npm init -y default setting pack.json 
// npm install @babel/core @babel/cli @babel/preset-env


// 2. babel env setting 
// .babelrc 파일만들기 

// rc= Run Commands, Run Controll 등등의 의미 

/* 
    json 으로 설정
    {
        "presets" : ["@babel/preset-env"],


    }


*/
// 3. babel 실행

//npx babel [변환할 파일 명] -- out-file [내보낼 경로] 

// npx babel app.js --out-file dist/app.js

//2. babel02 만들고
// init -y
// npm install @babel/core @babel/cli
// npm install @babel/plugin-transform-modules-commonjs

// .babelrc 도 변환해야함. 키값의 키 이름 preset -> plugin 

//3. babel03 만들고 // jsx 문법 컴파일해보기 (리액트)

// npm init -y
// babel 설치
// npm install @babel/core @babel/cli
// npm install @babel/preset-react


// babel 코드 자체를 변활할때 , 단일파일
// --------------------------------- webpack -------------------------//
// webpack : 모듈 번들러 = 여러파일을 하나의 파일로 구성해주는것. 

// js 1
// js 2
// js 3
// js 4

// 모듈
// 모듈은 프로그램을 구성할때 구성요소로 . 관련된 데이터를 함수로 묶은 단위

// user
// user.controller
// user.service
// user.view

// 번들러는 의존성을 가지고 동작하는 모듈 코드를 하나의 파일로 만들어주는것.

// webpack 속성 
// entry : 진입점을 지정 시작점으로 사용할 모듈을 webpack에 알려줌
// output : 내보내는 번들링 방법을 결정 생성한 번들링 파일의 위치, 이름
// loaders : 번들링 중에 모둘의소스코드에 적용되는 자바스크립트나 css 이미지 파일을 처리 
// plugins : 추가 기능 사용시 번들 최적화 html 파일생성이나 환경 변수 삽입등등 

// webpack 기본사용 
// 패키지 설치 
// npm init -y 
// npm install webpack webpack-cli

// 2. 프로젝트 생성

// src 폴더를 만들거고 
// 번들링 진행을 해봅시다.

// webpack의 설정파일
// webpack.config.js


//webpack 실행
// npx webpack

// loaders 속성을 사용해서
// 다양한 유형의 파일을 모듈화 할수있다.
// css,Image 등등을 
// 번들링 해보자.

// 1. 패키지 설치
// npm init -y 
// npm install webpack webpack-cli css-loader style-loader

// 2. 프로젝트 구성
// src 폴더에 index.css , index.js 두 파일 생성


// 3. webpack.config.js 추가


//webpack pulgin 
//html 파일을 만들자

// 패키지 설정 
// npm init -y
// npm install webpack webpack-cli html-webpack-plugin 

// babel 설정
// .babelrc
/*
    {
        "preset" :["@babel/preset-env",@babel/preset-react]
    }
*/


// react 설치 react-dom
// npm i react react-dom
// npm i  "@babel/preset-env": "^7.22.5",
    // "@babel/preset-react": "^7.22.5",

// npm i     "@babel/core": "^7.22.5",
// npm i @babel/core babel-loader

// babel 속성은 
// presets ,plugin 


// npx create-react-app [폴더명]