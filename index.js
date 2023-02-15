const express=require('express');
const path=require('path');

const app=express();

const userData={ name:'pankaj sharma',role:"web developer",city:'New delhi'
,skills:['HTML 5','CSS 3','Bootstrap 5','Javascript','Jquery','Codeigniter','React Js','NodeJs','ExpressJs','MongoDB','Mysql','Git']}
const company={ name:'3s studio', location:"new delhi", business:'Application Development'}

app.set('view engine','ejs')

const publicPath=path.join(__dirname,'public');

app.get('',(_,resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
})

app.get('/profile',(_,resp)=>{
    resp.render('profile',{userData,company})
})

app.get('/about',(_,resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
})

app.get('*',(_,resp)=>{
    resp.sendFile(`${publicPath}/404.html`)
})

// app.use(express.static(publicPath)); 

app.listen(3000);