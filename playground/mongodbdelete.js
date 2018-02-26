const {MongoClient, ObjectId} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{

  if (err){
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to MongoDB Server' );

// //delete many
// db.collection('Todos').deleteMany({text : 'Nothing to do'}).then((res) =>{
//   console.log(res);
// })


//delete none
// db.collection('Todos').deleteOne({text : 'Nothing to do'}).then((res) =>{
//   console.log(res);
// })

//find one and delete
db.collection('Todos').findOneAndDelete({completed : true}).then((res) =>{
  console.log(res);
})


//  db.close();
})
