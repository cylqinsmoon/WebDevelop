// file name :Load.js
var express = require('express');
const path=require('path');
var app = express();
var bodyParse = require('body-parser')
var cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(bodyParse.urlencoded({extended: false}));
// 处理根目录的get请求
app.get('/', function (req, res) {
    res.sendfile(path.join(__dirname,"main.html"));
    console.log('main page is required ');
});
// 处理/login的get请求
app.get('/add', function (req, res) {
    res.sendfile(path.join(__dirname,"add.html"));
    console.log('add page is required ');
});
// 处理/login的post请求
app.post('/login', function (req, res) {
    name = req.body.name;
    pwd = req.body.pwd;
    console.log("用户名："+name + '\n密码：' + pwd);
    res.status(200).send(name + '--' + pwd);
});
// 监听3000端口
var server = app.listen(3000);
