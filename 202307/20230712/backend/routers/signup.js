const router = require("express").Router();
const {signUp} = require('../controller/signUpController');

router.post('/',signUp);


module.exports=router;