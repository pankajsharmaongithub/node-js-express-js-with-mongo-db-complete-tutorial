const dbConnect=require('./mongodb_connect');

const update=async()=>{
        let data=await dbConnect('developer');
        const byWhere={name:"Ps"};
        const setData={$set:{name:'Pankaj sharma'}}
        
        // for single
        // let result=await data.updateOne(byWhere,setData)
        
        // for multiple
        let result=await data.updateMany(byWhere,setData);
        
        console.log(result);
}
// update();