const {MongoClient, ObjectId} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{

  if (err){
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to MongoDB Server' );

db.collection('Todos').findOneAndUpdate({
_id : new ObjectId('5a9416c71108431d3ce60b62')
},{
  $set :{
    completed : false
  }
}, {
  returnOriginal : false
}).then((res)=>{
  console.log(res);
})
  db.close();
})
