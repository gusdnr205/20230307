const mysql =require("./config");

exports.usersInit= async ()=>{
    try {
        await mysql.query("SELECT *FROM user")
    } catch (error) {
        await mysql.query("CREATE TABLE user(id INT AUTO_INCREMENT PRIMARY KEY,user_id VARCHAR(20), user_pw VARCHAR(128))")
    }
}

exports.userSelect= async (user_id)=>{
    try {
        // 첫번쨰 배열의 값을 구조 분해할당으로 받은것
        const [result] = await mysql.query("SELECT *FROM user WHERE user_id=?",[user_id]);
        return result[0];
        } catch (error) {
            console.log(error);
    }
}

exports.userInsert = async (user_id,user_pw)=>{
    try {
        // 중복체크
        const [user] = await mysql.query("SELECT *FROM user WHERE user_id =?",[user_id]);
        if(user.length!=0)
        {
            //이미 존재하는아이디
            let err = new Error("중복된아이디임");
            console.log(err);
            return err;
        }
        // 중복되지않았다면 정상적인 회원가입진행
        await mysql.query("INSERT INTO user(user_id,user_pw) VALUES(?,?)",[user_id,user_pw]);
    } catch (error) {
        console.log(error);
        }
}