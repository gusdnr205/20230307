const router=require("express").Router();
const {Write,readall,Uppdate,Delete} = require("../controller/writeController");
const {islogin} = require("../middleware/loginMiddleware");


router.post('/',Write);
router.get('/viewall',islogin,readall);
router.put('/:postId',Uppdate );
router.delete('/:postId', Delete);

module.exports=router;