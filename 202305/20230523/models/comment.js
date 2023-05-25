const Sequelize = require("sequelize");


class Comment extends Sequelize.Model {
    static init(sequelize){
        // 모델을 정의해주는것 sync를 통해 실제 테이터베이스에 저장된것과 비교한다.
        return super.init({
            // 컬럼의 내용
            commnet_content : {
                type : Sequelize.STRING(100),
                allowNull : false,
            },
            writer_id : {
                type : Sequelize.STRING(20),
            },
            
        },{
            // 테이블의 내용
            sequelize,
            timestamps : true, // 생성 시간, 업데이트 시간 자동으로 생성
            underscored : false, // 카멜 케이스 설정 유무
            modelName : "commnet", // 모델 이름
            tableName : "comments", // 복수형으로 테이블 이름 설정
            paranoid : false, // 삭제시간 생성 유무
            charset : "utf8", // 인코딩 방식은 꼭 설정 해야한다.
            collate : "utf8_general_ci", // 인코딩 방식은 꼭 설정 해야한다.
        })
    }

    static associate(db){
        db.Comment.belongsTo(db.Post, {foreignKey : "id", targetKey: "id"});
    }
}

module.exports = Comment;