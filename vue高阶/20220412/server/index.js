const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))

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
    console.log('post请求成功！');
    res.send({
        data:req.body,
        age:22,
        sex:'女'
    })
})
app.listen(3030,()=>{
    console.log('服务器开启成功.....https://localhost:3030');
})