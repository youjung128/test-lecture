"use strict";

//모듈
const express = require("express");
const app = express();

const PORT = 3005;

//라우팅
const home = require("./src/routes/home");

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));


app.use("/", home); // use -> 미들웨어 등록해주는 메소드

//보내주기
module.exports = app;

