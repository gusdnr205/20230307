const {usersInit,userInsert,userSelect}=require('./usersModels');

usersInit();

// 객체로 감싸서 내보낸것
module.exports={userInsert,userSelect};