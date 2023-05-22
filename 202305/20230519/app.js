// 시퀄라이즈 orm(객체 관계 매핑)
// 객체와 데이터 베이스를 orm 라이브러리가 매핑을 시켜주어서 자바 스크립트 구문으로 sql을 제어할수있다.
// 자바스크립트로만 sql 작업을 할수있도록 도와주는 라이브러리.

// 프로젝트 시작 package.json
// 설치할 모듈 express ejs sequelize mysql2
// 서버 객체 만들고
// 서버 대기상태
// view엔진 경로 설정
// view엔진 ejs 사용
// body객체사용

const express =require("express");
const path=require("path");
const { Sequelize,User, Post } = require("./models");
const app = express();
const dot = require("dotenv").config();


//시퀄라이즈 구성 연결 매핑
// sync 함수는 데이터베이스를 동기화 시켜주는 메서드 
Sequelize.sync({focus:true}).then(()=>{
    console.log("연결성공")
}).catch((err)=>{
    console.log(err);
})

app.set("views",path.join(__dirname,"page"));
app.set("view engine","ejs");
app.use(express.urlencoded({extended:false}));

Sequelize.sync({focus:false})
.then(()=>{
    //연결 성공
    console.log("연결성공");
}).catch((err)=>{

    console.log(err);
}

)

app.get('/',(req,res)=>{
    res.render("create");
})
app.post('/create',(req,res)=>{
    const {name,age,msg}=req.body;
    // create insert 문을 실행시켜주는 메서드
    // 매개변수로 컬럼의 내용을 객체로 만들어서 전달
    User.create({
        // name컬럼의 값
        name: name,
        // age칼람의 값
        age: age,
        // msg 컬럼의 값
        msg:msg
    })
    res.send("값추가되었음");
    
})

app.get('/main',(req,res)=>{
    // 유저 전체 조회
    // 검색조건이 들어간다. finall 메서드 매개변수로 검색조건을 객체로 추가할수있따.
    User.findAll({})
    .then((e)=>{
        // 성공시
        res.render("main",{data:e});
    }).catch((e)=>{
        res.send("유저 조희 실패");
    })
})

app.post('/create_post',(req,res)=>{
    const {name, value} = req.body;
    console.log(name,value);
    // findOne 한개의 값을 조회 메서드
    User.findOne({
        // 검색 조건 추가
        where : {name : name}
    }).then((e)=>{
        Post.create({
            msg: value,
            user_id : e.id
        }).catch(()=>{
            console.log('여기였냥')
        })
    }).catch((err)=>{
        
        console.log(err)
    })
    res.send();
})

app.get("/view/:name",(req,res)=>{
    // 유저를 조회하고 가지고 있는 글을 볼거임
    User.findOne({
        
        where : {
            //해당 이름의 유저를 조회하면서
            name : req.params.name
        },
        // raw 속성을 주면 관계형으로 불러온 값을 다 풀러서 볼수가 있는데
        // raw : true,
        // 해당 유저의 id로 참조된 user_id가 있는 post 테이블의 값을 같이 조회한다.
        include : [
           { model : Post }
        ]
    }).then((e)=>{
        console.log(e);
        e.dataValues.Posts  = e.dataValues.Posts.map((i)=> i.dataValues);
        const Posts = e.dataValues;
        console.log(Posts);
        res.render("view", {data : Posts});

    })
    
})

app.listen(4000,()=>{
    console.log("서버 잘열림");
})