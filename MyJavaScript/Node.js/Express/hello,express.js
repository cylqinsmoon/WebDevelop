var express=require('express');
var app=express();
//Express 应用使用回调函数的参数： request 和 response 对象来处理请求和响应的数据。
app.get('/',function (req,res) {
    // res.send()：传送HTTP响应
    res.send('Hello express');
})
//app.listen(path, [callback])
//
// Starts a UNIX socket and listens for connections on the given path.
// This method is identical to Node’s http.Server.listen().
var server=app.listen(4616,function () {
    var host=server.address().address
    var port=server.address().port
    console.log("应用实例，访问地址为 http://%s:%s",host,port)
})