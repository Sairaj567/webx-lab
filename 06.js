const express = require('express');
const app = express();
const PORT = 3002;

app.get('/',(req, res)=>
{
    res.send('<h1>welcome to home page</h1><a href="/next">go to next page</a>')
});

app.get('/next',(req,res)=>{
    res.send('<h1>sucess reditret</h1>')
});

app.listen(PORT, ()=>{
    console.log('swervwe is runnnig')
})