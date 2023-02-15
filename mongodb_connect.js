const {MongoClient} = require('mongodb');
const url='mongodb://localhost:27017';
const dbName="dev_portfolio";
const client=new MongoClient(url);

async function dbConnect(collectionName){
    await client.connect();
    let db= client.db(dbName);
    return db.collection(collectionName);
}

module.exports=dbConnect;
