const { dir } = require('console');
const fs =require('fs');
const path=require('path');

const dirPath=path.join(__dirname,"CRUD");
const filePath=dirPath+"/my_log.txt";

// CRUD OPERATION

// fs.writeFileSync(filePath,`this is my curl log 1`);

// fs.readFile(filePath,'utf8',(err,files)=>{
//     console.log(files)
// })

// append new text
// fs.appendFile(filePath,` and also add new log `,(err)=>{
//     if(!err) console.log("File Updated");
// });


// rename
// fs.rename(filePath,dirPath+"/my_log_2023.txt",(err)=>{
//     if(!err) console.log('remaned successfully')
// })


// delete
// fs.unlinkSync(dirPath+"/my_log_2023.txt");