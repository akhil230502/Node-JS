import express from 'express'

const app = express()

app.get('/',(req,res)=>{
    // res.status()
    // res.json()
    // res.send("")
    res.status(200).send("it's working")
})

app.get("/test",(req,res)=>{
    const name = req.body.first
    const {id} = req.params

    res.send("hi")
})

app.listen(5000,function(){
    console.log(`server listening on port 5000...`);  
})