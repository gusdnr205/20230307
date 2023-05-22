const Sequelize = require("sequelize");

// user클래스에 시퀄라이즈 안의 model클래스를 상속시켜준다.
class User extends Sequelize.Model{
    static init(sequelize){
        // super 상속받은 부모의 함수를 실행 init 실행시켜서 반환
        // init 메서드는 첫번째 매개변수에는 컬럼에 대한 설정에대한 값이 들어가고
        // 두번쨰 매개변수로 테이블의 자체 설정 값이 들어간다. 
        return super.init({
            // 컬럼에 대한 설정
            //name 컬럼
            // string이 varchar임 매핑되어있는거 https://sequelize.org/v5/manual/data-types.html 여기있음
            //allowenull: null을 허용할지안할지
            // unique : 중복되지않능ㄴ값
            name: 
            {type:Sequelize.STRING(20),
            allowNull:false,
            unique:true,
            // primaryKey:true,

        },
        // INT== INTEGER
        age:{
            type: Sequelize.INTEGER,
            allowNull:false,

        },
        //TEXT==Text
        msg:{
            type:Sequelize.TEXT,
            allowNull:false,
        } 


        },{
            // 테이블 자체 설정
            //매개변수로 전달받은 _sequelize 먼저 작성해주고
            sequelize,
            // 테이블에 rol 추가 했을떄 생성시간과 업데이트 시간을 표기해준다.
            // created_at 과 update_at 이라는 컬럼이 자동으로 추가된다.
            // 우리가 row추가했을때 시간을 기록해주고 수정했을떄도 시간을 기록해준다.
            timestamps:true,
            // 표기법을 바꿔준다 기본적으로 스네이크 표기법으로 되어있는데 칼럼이
            // 칼럼의 표기법을 카멜 표기법으로 바꿔준다. create_at => createdAt
            underscored:false,
            modelName: "User", // 모듈의 이름을 설정 노드 프로젝트에서 사용한다.
            tableName : "Users", // 복수형으로 설정해주자 웬만하면.. 추가될테이블의이름
            paranoid:false, // paranoid true로 설정하면 deleted_at 이라는 컬럼도 생성이 됩니다. 삭제해도 값이 남게되고 삭제 시간이 표기된다. deleted_at 칼럼이 생성되며
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
        db.User.hasMany(db.Post,{foreignKey:"user_id",  sourceKey:"id"});
    }
}


module.exports=User;