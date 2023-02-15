const express=require('express');
const app=express();
const port = 3000

app.get('',(req,resp)=>{
    resp.send(`<h3>Welcome to Home page <br> <a href="/about">Go to About Page</a></h3>`);
})


app.get('/about',(req,resp)=>{
    resp.send(`
    <input type="text" value="${req.query.name}">
    <h3>Welcome to about page <br> <a href="/">Go to Home Page</a></h3>
    `);
})


app.get('/result',(req,resp)=>{
    resp.send({
        "name":"pankaj sharma",
        "Role":"Web Developer",
        "Age":30,
    });
})



// ============Create====server======
app.listen(port,()=>{
        console.log(`Server running on http://127.0.0.1:${port}`);
})


