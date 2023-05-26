const router=require("express").Router();
const {login,viewUser} = require("../controller/loginController");
const {islogin} = require("../middleware/loginMiddleware");


router.post("/",login);
router.get('/view',islogin,viewUser);

module.exports=router;