//Single level Middleware 
module.exports= reqFilter=(req,resp,next)=>{
    if(!req.query.age){
        resp.send('please provide age')
    }if(req.query.age && req.query.age < 18 ){
        resp.send('Only 18 or above age allowed')
    }else{
        next();
    }
}



