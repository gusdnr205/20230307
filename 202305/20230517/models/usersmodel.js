const mysql = require("./config");

const ehdgml = {
  InitTable: async () => {
    try {
      await mysql.query("CREATE TABLE user (id INT AUTO_INCREMENT PRIMARY KEY, user_id VARCHAR(20), user_pw VARCHAR(128), token VARCHAR(250))")
    } catch (error) {
      console.log(error);
    }
  },

  UserSelect: async(user_id)=>{
    try {
      const [data] = await mysql.query("SELECT * FROM user WHERE user_id = ?",[user_id]);
      console.log("배열데이터",data[0]);
      return data[0];
    } catch (error) {
      console.log(error);
    }
  },

  InsertUser: async (user_id, user_pw) => {
    try {
      const [data] = await mysql.query("SELECT * FROM user WHERE user_id = ? ",[user_id]);
      if (!data.length) {
        await mysql.query("INSERT INTO user(user_id,user_pw) VALUES(?,?)", [user_id, user_pw])
      }else{
        let err = new Error("에러남")
        console.log(err);
      }
    } catch (error) {
      console.log(error);
    }
  },

  RefreshUser : async (user_id, refresh_token) => {
    try {
        await mysql.query("UPDATE user SET token= ? WHERE user_id =?",[refresh_token,user_id])
    } catch (error) {
      console.log(error);
    }
  },

  DeleteUser: async (user_id) => {
    try {
      await mysql.query("DELETE FROM user WHERE user_id = ?", [user_id])
    } catch (error) {
      console.log(error);
    }
  },

  LoginUser: async (user_id, user_pw) => {
    try {
      const [data] = await mysql.query("SELECT * FROM user WHERE user_id =?", [user_id]);
      return data
      // if (data[0].user_pw == user_pw) {
      //   console.log("로그인 됨");
      // }
    } catch (error) {
      console.log(error);
    }
  },

  PwUpdate: async (user_id,user_pw) => {
    try {
      await mysql.query("UPDATE user SET user_pw= ? WHERE user_id =?",[user_pw,user_id]);
    } catch (error) {
      console.log(error);
    }
  }

}
ehdgml.UserSelect("123");
// ehdgml.LoginUser("현욱","현욱123")
// ehdgml.InitTable()
// ehdgml.InsertUser()
module.exports= ehdgml;