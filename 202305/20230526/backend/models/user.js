const Sequelize =require("sequelize");

class User extends Sequelize.Model{
    static init(seq){
        return super.init({
            name:{
                type: Sequelize.STRING(20),
                allowNull:false
            },
            age:{
                type:Sequelize.INTEGER,
                allowNull:false
            },
            user_id:{
                type:Sequelize.STRING(20),
                allowNull:true
            },
            user_pw:{
                type:Sequelize.STRING(64),
                allowNull:true
            },
            user_profile:{
                type:Sequelize.STRING(128),
                allowNull:true
            },
        },{
            sequelize:seq,
            timestamps:true, // 추가수정시간 자동생성
            underscored: false ,// 카멜 케이스할거임?
            modelName:"User" ,// 노트 프로젝트에서 사용할이름 조회했을때 사용할 이름(include)
            tableName:"users", // 데이터 베이스 테이블의 이름
            paranoid:false, // 삭제시간 표기할거임?
            charset:"utf8" , // 이것역시 꼭 작성
            collate:"utf8_general_ci", // 인코딩 방식은 꼭 정해야한다.
        })
    }
}

module.exports=User;