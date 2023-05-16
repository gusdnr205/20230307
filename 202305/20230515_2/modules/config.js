const mysql2=require('mysql2/promise');

const mysql =mysql2.createPool({
    user:"root",
    password:"gusdnr2ekt",
    database:"test12",
    host:"127.0.0.1",
    multipleStatements:true
}
)

module.exports=mysql;