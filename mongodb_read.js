const dbConnect=require('./mongodb_connect');


// handle promise method 1
// let developerConnect=dbConnect('developer');
// developerConnect.then((items)=>{
//         items.find({name:"pankaj sharma"}).toArray().then((data)=>{
//             console.log(data);
//         }).catch(console.error).finally(()=>client.close())
// })


// handle promise method 2 latest way
const main = async () =>{
    let data=await dbConnect('developer');
    
    // data=await data.find().toArray();
    
    // find by where 
    data=await data.find({name:"pankaj sharma"}).toArray();
    console.log(data)
}

main();