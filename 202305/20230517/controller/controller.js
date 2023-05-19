const session = require("express-session");
const {ehdgml,InitPostTable,InsertPost,PostList,DeletPost,InsertToken,SelectToken,UpdateToken} = require("../models");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const dot = require("dotenv").config();


// 가입
const CreateHash =(password)=>{
  return new Promise((resolve,reject)=>{
    bcrypt.hash(password,10,(err,data)=>{
      if(err) reject (err);
      resolve(data);
    })
  })
}
// 로그인
const Compare = (password,hash)=>{
  return new Promise((resolve,reject)=>{
    bcrypt.compare(password,hash,(err,same)=>{
      if (err) reject(err)
      resolve(same);
    })
  })
}

exports.postList = async(req,res)=>{
  try {
    const data = await PostList()
    console.log("컨트롤러",data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
exports.Deletpost = async(id)=>{
  try {
    DeletPost(id)
  } catch (error) {
    console.log(error);
  }
}

exports.InsertPost = async(req,res)=>{
  try {
    const {title,content} = req.body;
    const data = InsertPost(title,content);
    return data;
  } catch (error) {
    console.log(error);
  }
}

exports.InsertUser = async(req,res)=>{
  try {
    const {user_id,user_pw} = req.body;
    const hash = await CreateHash(user_pw);
    await ehdgml.InsertUser(user_id,hash);
  } catch (error) {
    console.log(error);
  }
}

exports.LoginUser = async(req,res)=>{
  try {
    const {user_id,user_pw} = req.body;
    const data = await ehdgml.LoginUser(user_id,user_pw)
    const result = await Compare(user_pw,data[0].user_pw)
    if (result) {
      console.log("로그인됨");

      const accessToken = jwt.sign({
        user_id : data[0].user_id,
      },process.env.ACCESS_TOKEN_KEY,{
        expiresIn : "5s"
      });

      const refreshToken = jwt.sign({
        user_id : data[0].user_id,
      },process.env.REFRESH_TOKEN_KEY,{
        expiresIn : "30s"
      })
      await InsertToken(accessToken,refreshToken);
      await ehdgml.RefreshUser(user_id,refreshToken);
      
      
      res.redirect("/mypage")
    }else{
      console.log("로그인 실패");
    }
  } catch (error) {
    console.log(error);
  }
}

exports.VerifyLogin = async(req,res,next)=>{
  const {access_token,refresh_token} = await SelectToken();
  console.log(access_token,refresh_token);
  jwt.verify(access_token,process.env.ACCESS_TOKEN_KEY,(err,acc_decode)=>{
    if (err) {
      console.log('access썩었다',err);
      console.log(access_token);


      jwt.verify(refresh_token,process.env.REFRESH_TOKEN_KEY,async(err,ref_decode)=>{
      // console.log(refresh_token);
        console.log("err",err);
        console.log("ref_decode",ref_decode);
        if (err) {
          console.log("refresh 토큰 만료",err);
          res.send("다시 로그인 하세요")

        }else{
          const data = await ehdgml.UserSelect(ref_decode.user_id);
          console.log("data임",data);
          //user 도 토큰을 가지고 있어야 비교할수있음 data 에서 토큰이없음
          // if 문은 다른 브라우저에서 로그인 시도할때 막기 위해서임 
          // 결론 : user 테이블에 refresh 토큰을 담아주고
          // 토큰 테이블이랑 비교한다
          console.log(data.token);
          if (data.token == refresh_token) {

            const access_token = jwt.sign({
              user_id : data.user_id,
            },process.env.ACCESS_TOKEN_KEY,{
            expiresIn : "5s"
            })
            console.log(access_token);
            await UpdateToken(access_token,refresh_token)
            console.log("ac토큰 재발급");
            next()

          }else{
            console.log("중복 로그인 방지");
            next()
          }
        }

      })

    }else{
      console.log("로그인 정상 유지중");
      next()
    }
  })
}