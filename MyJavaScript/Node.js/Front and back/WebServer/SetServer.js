var http=require("http");
var fs=require("fs");
var url=require("url");

//创建服务器
http.createServer(function (request,respons) {
    //解析请求，包括文件名
    var pathname=url.parse(request.url).pathname;

    //输出请求的文件名
    console.log("Request for"+pathname+"received.");

    //从文件系统中读取请求的文件内容
    fs.readFile(pathname.substr(1),function (err,data) {
        if(err){
            console.log(err);
            //HTTP状态码：404 NOT FOUND
            //Content Type:text/plain
            respons.writeHead(404,{'Content-Type':'text/html'});
        }
        else
        {
            //HTTP状态码：200 OK
            respons.writeHead(200,{'Content-Type':'text/html'});
            //响应文件内容
            respons.write(data.toString());
        }
        //发送响应数据
        respons.end();
    });
}).listen(4616);

//控制台输出信息
console.log('Server running at http://127.0.0.2:4616/');