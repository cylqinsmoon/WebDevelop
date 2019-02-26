var http=require('http');
var url=require('url');
var util=require('util');
http.createServer(function (req,res) {
    res.writeHead(200,
        {'Content-Type':'text/plain;charset=utf-8'});
    //解析url参数
    var params=url.parse(req.url,true).query;
    res.write(util.inspect(url.parse(req.url,true))+"\n");
    res.write("网站名："+params.NAME+"\n");
    res.write("网站URL："+params.URL+"\n");
    res.end();
}).listen(4616);