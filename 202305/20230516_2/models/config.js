const mysql2=require("mysql2/promise");

const mysql = mysql2.createPool({
    user:"root",
    password:"gusdnr2ekt",
    database:"test13",
    multipleStatements:true,
    host:"127.0.0.1"
})


//config js 를불러오면 mysql을 받을수있다.
module.exports=mysql;