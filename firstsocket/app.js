const http=require("http");
const path=require("path");
const express=require("express");
const app=express();
const server=http.createServer(app);
const io = require('socket.io')(server);
app.get("/",(req,resp)=>{
    resp.send("你好亚");
})
io.on('connection',function(socket) {
    //接收数据
    // console.log("新用户连接");
    // console.log(socket.id);
    socket.on('message', function (obj) {                
        // 发送数据
        //console.log(socket.id+obj);
        io.emit('message',obj);  
    });
  });

server.listen(9990,"127.0.0.1",()=>{
    console.log("服务器启动");
})