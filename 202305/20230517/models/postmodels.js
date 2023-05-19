const mysql = require("./config");

exports.InitTokenTable = async()=>{
  try {
    await mysql.query("CREATE TABLE token (id INT AUTO_INCREMENT PRIMARY KEY, access_token VARCHAR(200), refresh_token VARCHAR(250))")
  } catch (error) {
    console.log(error);
  }
}

exports.InsertToken = async(access_token,refresh_token)=>{
  try {
    await mysql.query("INSERT INTO token(access_token,refresh_token) VALUES(?,?)", [access_token,refresh_token])
  } catch (error) {
    console.log(error);
  }
}
exports.SelectToken = async()=>{
  try {
    const [data] = await mysql.query("SELECT * FROM token ORDER BY id DESC LIMIT 1;")
    return data[0]
  } catch (error) {
    console.log(error);
  }
}
exports.UpdateToken = async(access_token,refresh_token)=>{
  try {
    await mysql.query("UPDATE token SET access_token=? WHERE refresh_token =?",[access_token,refresh_token]);
  } catch (error) {
    console.log(error);
  }
}

exports.InitPostTable = async()=>{
  try {
    await mysql.query("CREATE TABLE post (id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(50), content VARCHAR(200))");
  } catch (error) {
    console.log(error);
  }
}

exports.InsertPost = async(title,content)=>{
  try {
    const data = await mysql.query("INSERT INTO post(title,content) VALUES(?,?)", [title,content])
    return data
  } catch (error) {
    console.log(error);
  }
}

exports.PostList = async()=>{
  try {
    const [data] = await mysql.query("SELECT * FROM post");
    return data
  } catch (error) {
    console.log(error);
  }
}

exports.DeletPost = async(id)=>{
  try {
    await mysql.query("DELETE FROM post WHERE id=?",[id])
  } catch (error) {
    console.log(error);
  }
}

