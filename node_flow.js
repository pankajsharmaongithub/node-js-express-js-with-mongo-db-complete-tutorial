console.log("starting log");

setTimeout(()=>{
    console.log('waiting log 3 sec');
},3000);

setTimeout(()=>{
    console.log('waiting log 2 sec');
},2000);

setTimeout(()=>{
    console.log('waiting log 0 sec f1');
},0);


setTimeout(()=>{
    console.log('waiting log 0 sec f2');
},0);


setTimeout(()=>{
    console.log('waiting log 0 sec f3');
},0);

console.log("second  log");

console.log("3rd  log");



