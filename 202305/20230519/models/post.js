const Sequelize =require("sequelize");

class Post extends Sequelize.Model {
    static init(sequelize){
        // 첫번째 매개변수 컬럼의 내용, 두번째 테이블의 내용
        return super.init({
            msg:{
                type:Sequelize.STRING(100),
                allowNull: false,    
            }
        },{
            sequelize,
            timestamps : true,
            modelName: "Post",
            tableName : "Posts",
            charset: "utf8", // 인코딩 방식 꼭 작성해줘야함
            collate : "utf8_general_ci" // 인코딩 방식 꼭 작성해줘야함
        })
    }
    static associate(db){
        // 1:N : 예0 하나의 유저가 여러개의 글읆 만드는 경우

        // 1:N 관계
        // 시퀄라이즈에서 1ㅣN 관계를 hasMany 메서드로 정의한다.
        // hashMany 메서드는 테이블의 관꼐를 정의해준다.
        // sourceKey : user테이블 안에 어떤키를 foreignKey와 연결해줄지.
        // hasMany 메서드의 처섭ㄴ재 매개변수로 넘긴 테이블이 foreignKey 연길이 되고 이름은 user_id다

        // db.User.hashMany(dp.Post,{foreignKey:"user_id",sourceKey:"id"});

        // belongsTo 메서드를 사용해서 user에서 id를 foreignKey 연결해줄지

        db.Post.belongsTo(db.User,{foreignKey:"user_id",targetKey: "id"});
    }
}

module.exports=Post;