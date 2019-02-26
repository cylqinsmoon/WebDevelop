var http=require('http');
var fs=require("fs");
const path=require('path');
var querystring=require('querystring');
var postHTML='<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Cookie的使用</title> <script src="https://unpkg.com/react@16/umd/react.development.js"></script> <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script> <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script> <link href="https://cdn.bootcss.com/twitter-bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet"> <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.3.1.js"></script> <script src="https://cdn.bootcss.com/twitter-bootstrap/4.1.3/js/bootstrap.min.js"></script> <style> body { background-color: #6c757d;); } </style> <script type="text/babel"> class Table extends React.Component { constructor() { super(); this.Submit=this.Submit.bind(this); this.OpePass=this.OpePass.bind(this); this.Close=this.Close.bind(this); } OpePass(e) { e.preventDefault(); } Submit() { document.cookie=encodeURI("用户名="+document.userregist.username.value); document.cookie=encodeURI("密码="+document.userregist.password.value); alert("提交成功！"); } Close() { var cookieString=decodeURI(document.cookie); var cookieArray=cookieString.split(";"); for(var i=0;i<cookieArray.length;i++) { var cookieNum=cookieArray[i].split("="); var cookieName=cookieNum[0]; var cookieValue=cookieNum[1]; console.log("Cookie 名称为："+cookieName+";Cookie值为："+cookieValue); } } render() { return ( <div className="container" style={{padding: "10rem"}}> <form action="" method="post" name="userregist"> <table className="table table-light"> <thead className="thead-dark"> <tr> <th colSpan="2">用户注册</th> </tr> </thead> <tr> <td align="right">用户名：</td> <td> <input name="username" type="text"/> </td> </tr> <tr> <td align="right">密码：</td> <td> <input name="password" type="password" onPaste={this.OpePass}/> </td> </tr> <tr> <td></td> <td> <input type="submit" className="btn-primary" onClick={this.Submit}/>&nbsp; <button type="reset" className="btn btn-primary">重置 </button>&nbsp; <button type="button" className="btn btn-secondary" onClick={this.Close}>关闭 </button> </td> </tr> </table> </form> </div> ) } } class Test extends React.Component { render() { return ( <div className="container"> <h2>表头颜色</h2> <p>.thead-dark 类用于给表头添加黑色背景， .thead-light 类用于给表头添加灰色背景:</p> <div className="table-responsive"> <table className="table"> <thead className="thead-dark"> <tr> <th>Firstname</th> <th>Lastname</th> <th>Email</th> </tr> </thead> <tbody> <tr> <td>John</td> <td>Doe</td> <td>john@example.com</td> </tr> <tr> <td>Mary</td> <td>Moe</td> <td>mary@example.com</td> </tr> <tr> <td>July</td> <td>Dooley</td> <td>july@example.com</td> </tr> </tbody> </table> </div> <table className="table"> <thead className="thead-light"> <tr> <th>Firstname</th> <th>Lastname</th> <th>Email</th> </tr> </thead> <tbody> <tr> <td>John</td> <td>Doe</td> <td>john@example.com</td> </tr> <tr> <td>Mary</td> <td>Moe</td> <td>mary@example.com</td> </tr> <tr> <td>July</td> <td>Dooley</td> <td>july@example.com</td> </tr> </tbody> </table> </div> ) } } ReactDOM.render( <Table/>, document.getElementById("Content") ) </script> </head> <body> <div id="Content"></div> </body> </html>';
http.createServer(function (req,res) {
    //定义了一个post变量，用于暂存请求体的信息
    var post='';

    //通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
    req.on('data',function (chunk) {
        post+=chunk;
    });
    //在end事件触发后，通过quertstring.parse将post解析为真正的POST请求格式，然后向客户端返回
    req.on('end',function () {
        //解析参数
        post=querystring.parse(post);
        //设置响应头部信息及编码
        res.writeHead(200,{
            'Content-Type':'text/html;charset=utf8'
        });
        if(post.username&&post.password)
        {//输出提交的数据
           /* res.write("用户名："+post.username+"<br>");
            res.write("密码："+post.password);*/
           var content="用户名："+post.username+"\n"+"密码："+post.password;
           console.log(content);
            fs.open(path.join(__dirname,"素材/test.txt"),"a+",function (err,fd) {
                if(err)
                    return console.log(err);
                fs.writeFile(fd,content,function (err) {
                    if(err)
                        return console.log(err);
                    console.log("数据写入成功！");
                })
            });
        }
        else
        {//输出表单
            res.write(postHTML);
            //console.log("数据缺失");
        }
        res.end();
    });
}).listen(3000);