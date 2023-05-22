const Sequelize = require("sequelize");
const config = require("./config");
const User=require("./users");
const Post= require('./post');

//시퀄라이즈 객체 생성
const _sdequelize = new Sequelize(
    config.dev.database,
    config.dev.username,
    config.dev.password,
    config.dev
);

// 이내용으로 시퀄라이즈 객체를새엉했다.
// 내보낼 빈객체
const db={};
db.Sequelize= _sdequelize;
db.User=User;
db.Post=Post;

//테이블을 초기화하는 부분 
const le=User.init(_sdequelize);
console.log(typeof le);
Post.init(_sdequelize);
User.associate(db);
Post.associate(db);

// 단축키 
module.exports = db;