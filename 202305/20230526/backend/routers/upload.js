const router = require("express").Router();
const { Upload } = require("../middleware/imgUpload");
const {islogin} = require("../middleware/loginMiddleware");

// Upload.single("form에서 정한 파일의 name")
// Upload.single 매개변수로 form에서 이미지 파일을 가지고 있는 input의 name을 작성해주자.
router.post("/", islogin,Upload.single("upload"), (req,res)=>{
    console.log(req.session);
    console.log("여기 오나?")
    const{file, body} = req;
    console.log(file, body);
    // 데이터베이스에 이미지 경로를 추가
    // /img
    res.send("파일 저장됨");
})

module.exports = router;