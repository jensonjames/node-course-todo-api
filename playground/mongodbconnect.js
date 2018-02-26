const {MongoClient, ObjectId} = require('mongodb');

var obj = new ObjectId();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{

  if (err){
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to MongoDB Server' );

  db.collection('Todos').insertOne({
    text: 'Nothing to do',
    completed: false
  }, (err,result) => {
    if(err){
      return console.log('Unable to insert');
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  });


  db.collection('Users').insertOne({
    name : 'Aditya',
    age: 25,
    location : 'Bangalore'
  }, (err,result) => {
    if(err){
      return console.log('Unable to insert');
    }

    console.log(result.ops);
  });

  db.close();
})
