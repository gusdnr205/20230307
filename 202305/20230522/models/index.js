const Sequelize = require("sequelize");
const config = require("../config");
const User = require('./users');
const Post = require('./posts');

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
User.init(sequelize);
Post.init(sequelize);
// 매개변수 db를 통해 줄것이라 믿고 생성한것에 가까움
User.associate(db);
Post.associate(db);

module.exports = db;