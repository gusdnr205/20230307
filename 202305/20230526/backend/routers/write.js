const router=require("express").Router();
const {Write,readall} = require("../controller/writeController");
const {islogin} = require("../middleware/loginMiddleware");


router.post('/',islogin,Write);
router.get('/viewall',islogin,readall);

module.exports=router;