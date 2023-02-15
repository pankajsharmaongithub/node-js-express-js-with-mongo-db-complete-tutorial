const express=require('express')
const app=express()

//Application level Middleware 
const reqFilter=(req,resp,next)=>{
    if(!req.query.age){
        resp.send('please provide age')
    }if(req.query.age && req.query.age < 18 ){
        resp.send('Only 18 or above age allowed')
    }else{
        next();
    }
}

//Call middleware at application level
app.use(reqFilter)

app.get('/',(req,resp)=>{
    resp.send(`welcome to home , ${req.query.age}`)
})

app.get('/about',(req,resp)=>{
    resp.send('welcome to about us')
})

app.get('/profile',(req,resp)=>{
    resp.send('welcome to about us')
})


app.listen(3000)