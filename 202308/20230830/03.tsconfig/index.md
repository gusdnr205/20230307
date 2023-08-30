# tsconfig.json

- compilerOptions :typescript 파일을 컴파일 진행시
  어떤 형태로 컴파일을 진행할지 속성정의하는 부분

- include :컴파일을 진행할 폴더를 지정
- exclude :컴파일에서 제외할 폴더 지정

## compilerOptions

- module : 모듈 시스템 지정
- outDir : 내보낼 경로 지정
- target : 번들링 문법 지정 ex) es5 es6
- esModuleiInterop : true <br>(import/export 문법을 자연스럽게 변경해주는 행위?) 그냥 true로 설정
  (CommonJS 형식과 ES6 형식의 혼용을 자연스럽게 통합해주는 속성)
- strict : true 로 두자 엄격
- baseUrl : 모듈의 상대 경로를 지정 ./src
- paths : "baseUrl" 경로를 기준으로 상대위치를 가져오는 매핑값(경로를 변수처럼 사용한다.)<br>
  @build/

```sh
npm init -y
npx tsc --init
```

```json
{
  "compilerOptions": {
    "module": "CommonJS",
    "outDir": "./dist",
    "target": "ES6",
    "esModuleInterop": true,
    "strict": true,
    "baseUrl": "./src",
    "paths": {
      //src폴더안에있는 user폴더의 모든것
      "@user/*": ["user/*"]
    }
  },
  "include": ["src/**/*"],
  // test.ts 확장자가 붙은 파일은 모두 제외하겠다는뜻
  "exclude": ["**/*.test.ts"]
}
```

```json
//package.json 추가
"scripts": {
  "build": "tsc"
}

```

### 문제 경로 @user 이 부분이 컴파일되고 변환이 안되었다.

### tsc-alias

//"@user/_": ["user/_"] 이걸별칭이라고한다.

### 빌드시 별칭그대로 경로가 들어가는데 별칭그대로 경로가지정되어있으면 문제가 생긴다.

### 이별칭을 경로로 변환해주는 패키지

```sh
npm install -D tsc-alias
```

```json
// package.json 안에 바꿔줘야함
"build":"tsc&& tsc-alias"
```
