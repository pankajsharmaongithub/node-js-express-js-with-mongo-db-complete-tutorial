const dbConnect=require('./mongodb_connect');

const deleteData=async()=>{

    let data=await dbConnect('developer');
    
    // for single 
    // let result=await data.deleteOne({name:"Pankaj sharma"})
    
    // for many
    let result=await data.deleteMany({name:"Pankaj sharma"})

    console.log(result);
}

// deleteData();