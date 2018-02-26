const {MongoClient, ObjectId} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{

  if (err){
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to MongoDB Server' );


  // db.collection('Todos').find({
  //   _id  : new ObjectId('5a940a920d9a0c11646af76a')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('unbale to fetch todos' + err);
  // });

  //
  // db.collection('Users').find().count().then((count)=>{
  //   console.log(`count is ${count}`);
  // }, (err) =>{
  //   console.log('error', err);
  // })


db.collection('Users').find({name : 'Aditya'}).toArray().then((docs)=>{
  console.log(JSON.stringify(docs, undefined, 2));
},(err) =>{
  console.log('none found');
})
  db.close();
})
