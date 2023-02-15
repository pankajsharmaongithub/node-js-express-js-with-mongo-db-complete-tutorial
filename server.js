const http=require('http');
const data=require('./data');

const contentType='application/json';

http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-Type':contentType,'username':'pankajsharma1234'});
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(4400);
