const Sequelize = require("sequelize");
const config = require("../config/config");
const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');
const dot = require("dotenv").config();


const sequelize = new Sequelize(
    config.dev.database,
    config.dev.username,
    config.dev.password,
    config.dev
)

const db = {};
db.sequelize = sequelize;
db.User = User;
db.Post = Post;
db.Comment=Comment;
User.init(sequelize);
Post.init(sequelize);
Comment.init(sequelize);
// 매개변수 db를 통해 줄것이라 믿고 생성한것에 가까움
User.associate(db);
Post.associate(db);
Comment.associate(db);
module.exports = db;