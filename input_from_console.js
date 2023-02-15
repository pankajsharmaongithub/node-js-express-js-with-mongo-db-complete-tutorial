const fs=require('fs');

const input1=process.argv[2];
const input2=process.argv[3];
const input3=process.argv[4];
const input4=process.argv[5];

if(input1=="pankaj" && input2 == 1234 ){
    console.log("Welcome to admin panel");
    fs.writeFileSync(input3,input4);
    fs.writeFileSync(input1,input4);
    console.log("File Created please check directory"+__dirname);
    fs.unlinkSync(input3);
}else{
    console.log("Access denied");
}
