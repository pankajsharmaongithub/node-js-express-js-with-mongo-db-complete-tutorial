const { dir } = require('console');
const fs=require('fs');
const path=require('path');

const dirPath=path.join(__dirname,'files');

// for(i=1;i<=5;i++){
//     fs.writeFileSync(`${dirPath}/log${i}.txt`,`Log data ${i}`);
// }

fs.readdir(dirPath,(err,files)=>{
        files.forEach((items)=>{
            console.log(items);
        })
})