const dbConnect=require('./mongodb_connect');

const insert= async ()=>{
    let data=await dbConnect('developer');
    // let myObj=[
    //     {name:'Ps',email:'pspankaj@gmail.com',role:'Mern Stack developer 88'},
    // ];
    // Insert single 
    // const result=await data.insertOne(myObj);

    // Insert Multiple 
    let myObj=[
        {name:'Ps',email:'pspankaj@gmail.com',role:'Mern Stack developer 88'},
        {name:'Ps',email:'pspankaj@gmail.com',role:'Mern Stack developer 99'}
    ];
    const result=await data.insertMany(myObj);

    console.log(result);
}

// insert();