let a=100;
let b=0;

// setTimeout(()=>{
//     b=30;

//     console.log("waiting result "+a+b)

// },3000);

// console.log(a+b)


let waitingEngine=new Promise((resolve,reject)=>{

    setTimeout(()=>{
        resolve(30);
    },2000)

});

waitingEngine.then((data)=>{
    b=data;
    console.log(a+b)
})



