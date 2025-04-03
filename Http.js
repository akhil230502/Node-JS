import http from "http";                            //module type
//                                                     // common js = const http = require("http")
// const server = http.createServer((req,res)=>{
//     res.write("Welcome1")
//     res.end()
// })

// server.listen(5000)         //5000-port number

// console.log("hello")


const server = http.createServer((req, res) => {
    // res.write("Welcome to our page")
    // res.end()
    if(req.url === '/hi'){
        res.end("Welcome to our Home page")
    }
    if(req.url === '/about'){
        res.end("Welcome to About Page")
    }
    // res.write("Welcome to our page")
    res.end(`
    <h1>Begin</h1>
    <p>We had a Problem</p>
    <a href="/"> Back Home</a>
    `)
})

server.listen(5000)