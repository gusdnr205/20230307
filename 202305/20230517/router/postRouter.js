const router = require("express").Router();
const {postList,Deletpost,InsertPost,InsertUser,LoginUser, VerifyLogin} = require("../controller/controller");


router.get('/',async (req,res)=>{
  try {
    const data =await postList(req,res)
    console.log("라우터",data);
    res.render("main",{data});
  } catch (error) {
    console.log(error);
  }
})
router.get('/delete:id',async(req,res)=>{
  try {
    const id = req.params
    await Deletpost(id)
    res.render("main")
  } catch (error) {
    console.log(error);
  }
})
router.get('/insert',(req,res)=>{
  try {
    res.render("insert")
  } catch (error) {
    console.log(error);
  }
})
router.get('/join',async(req,res)=>{
  try {
    res.render("join")
  } catch (error) {
    console.log(error);
  }
})
router.get('/login',async(req,res)=>{
  try {
    res.render("login")
  } catch (error) {
    console.log(error);
  }
})
router.post('/login', async(req,res)=>{
  try {
    await LoginUser(req,res);
    // res.redirect("/mypage")
  } catch (error) {
    console.log(error);
  }
})

router.get('/mypage',VerifyLogin,(req,res)=>{
  console.log("mypageeeeeeee");
  res.send("로그인 상태")
  console.log("마이페이지");
})

router.post('/insert',async(req,res)=>{
  try {
    await InsertPost(req,res);
    res.redirect("/login");
  } catch (error) {
    console.log(error);
  }
})

router.post('/join',async(req,res)=>{
  try {
    await InsertUser(req,res)
    res.redirect("/login");
  } catch (error) {
    console.log(error);
  }
})

module.exports = router;