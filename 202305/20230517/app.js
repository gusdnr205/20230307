const express = require("express");
const app = express();
const path = require("path");
const ejs = require("ejs");
const postRouter = require("./router/postRouter");


app.set("views",path.join(__dirname,"page"));
app.set("view engine","ejs");

app.use(express.urlencoded({extended : false}));
app.use('/',postRouter)


app.listen(4000,()=>{
  console.log("잘 열림");
})