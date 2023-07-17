const Sequelize=require("sequelize");
const config=require("../config");
const User=require("./user");
const Post=require("./post");
// const sequelize = new Sequelize(
//     config.dev.database,
//     config.dev.username,
//     config.dev.password,
//     config.dev
// )
const sequelize = new Sequelize('test', 'root', 'gusdnr2ekt', {
    host: '127.0.0.1',
    dialect: 'mysql',
  });
  

const db={

};

db.sequelize=sequelize;
db.User=User;
db.Post=Post;

User.init(sequelize);
Post.init(sequelize);

module.exports=db;