// index 를 경로에서 찾음 폴더명까지만 적으면
const {userInsert,userSelect} = require("../models");
const bcrypt = require("bcrypt");
// 모듈추가 암호화 모듈
// 강력한 암호화를 지원하고 쉽게 사영가능하다.

// bcrypto 모듈 사용하자
// npm i bcrypto
// alg 는 고정이다
//     키스트레칭 횟수 cost가 ㅇㅇ 그넫 2의 n승 이런식으로 들어간다. n에는 기본적으로 10을 많이사용한다. 이보다 더높이면 느려질수있다.
// alg cost salt hash 형태로 생성된다.
// $2ㅁ$[cost]$[salt][hash]
// [salt] : 인코딩된 salt값 문자열의 일부분을 salt값으로 사용한다 알고리즘에서
// [hash] : 비밀번호와 salt값을 합하고 해시해서 인코딩된 값 

// bcrypt : 보안에 집작하기로 유명한 openBSD에사용
// 반복회술르 늘려 연산속도를 늦출수있기떄문에 연산능력이 증가해도
// 공격에 대비할수있다.
// 암호화된 무자열중에서 일부분을 salt값으로 사용하고있다.

const createHash=(password)=>{
    return new Promise((resolve,reject)=>{
        // hash 메서드로 해시값을 만들어줄수잇다.
        // 비밀번호 스트레칭 콜백함수 문자열?
        bcrypt.hash(password,10,(err,data)=>{
            if(err)reject(err)
            resolve(data);
        });
    })
}

const compare=(password,hash)=>{
    return new Promise((resolve,reject)=>{
        // compare 메서드를 사용해서 문자열과 해시값을 전달해주고 매개변수로 
        // 검증결과를 확인한다.
        bcrypt.compare(password,hash,(err,same)=>{
            resolve(same);

        })
    })
}

//회원가입
exports.SignUp=async (req,res)=>{
    const {user_id,user_pw} =req.body;
    try {
        const hash= await createHash(user_pw);
        await userInsert(user_id,hash);
        res.redirect('/login');
    } catch (error) {
        console.log(error);
    }
}

exports.Login= async (req,res)=>{
    const {user_id,user_pw}=req.body;
    try {
        const data = await userSelect(user_id);
        if(!data?.user_id)
        {
            return res.send("아이디없음");
        }
        const compare_pw= await compare(user_pw,data.user_pw); // true false값 반환
        if(compare_pw){
            return res.send("비밀번호 틀림");
        }
        res.send("로그인됨")
    } catch (err) {
        console.log(err);
    }
}