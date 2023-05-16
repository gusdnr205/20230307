const { userInit,userList,userInsert,userSelect,userPWUpdate,useerDelete,userRefresh} = require("./usersModel")

// userInit();

// async function test(){
//     userPWUpdate("aaa","bb222b");
// }

// test();
// 객체로 내보낸것
module.exports ={userList,userInsert,userSelect,userPWUpdate,useerDelete,userRefresh};