const router = require("express").Router();
const{viewpostall,bordermain}=require("../controllers/bordercontroller")


router.get('/',bordermain);

module.exports=router;