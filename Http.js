import http from "http";                            //module type
                                                    // common js = const http = require("http")
const server = http.createServer((req,res)=>{
    res.write("Welcome1")
    res.end()
})

server.listen(5000)         //5000-port number

console.log("hello")