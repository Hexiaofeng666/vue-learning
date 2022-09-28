const express = require('express')

const app = express()


app.get('/getUser',(req,res)=>{
    res.set('Access-Control-Allow-Origin','*')
    res.send({
        name:req.query.name,
        age:18,
        sex:'女'
    })
})

app.post('/postUser',(req,res)=>{
    res.set('Access-Control-Allow-Origin','*')
    console.log(req.body);
    res.send({
        name:req.body.name,
        age:22,
        sex:'女'
    })
})
app.listen(3030,()=>{
    console.log('服务器开启成功.....https://localhost:3030');
})