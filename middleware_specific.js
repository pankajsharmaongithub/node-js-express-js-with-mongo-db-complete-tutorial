const express=require('express')
const reqFilter=require('./middleware');
const app=express()
const route=express.Router();

route.use(reqFilter);

// ========Routing=======
app.get('/',(req,resp)=>{
    resp.send(`welcome to home `)
    resp.end()
})

app.get('/about',(req,resp)=>{
    resp.send('welcome to about us')
    resp.end()
})

// ========Grouped Route middleware=======

route.get('/profile',(req,resp)=>{
    resp.send(`welcome to User Profile, Your age is ${req.query.age}`)
    resp.end()
})

route.get('/contact',(req,resp)=>{
    resp.send(`welcome to User Contact page, Your age is ${req.query.age}`)
    resp.end()
})

// ======Calling route===
app.use('/',route);

app.listen(3000)