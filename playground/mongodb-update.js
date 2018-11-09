// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
   if ( err ) {
    return	console.log('Unable to connect to MongoDb Server');
   }
    
  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID("5be426f9ee06c51e483438e7")
  },
  {
    $set: {
      completed: true
    }
  }, {
      returnOriginal: false
  }).then( (result) => {
     console.dir(result);
  });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5bdedc54afc91f09788a9d6f")
  },
  {
    $set: {
      age: 30
    }
  }, {
      returnOriginal: false
  }).then( (result) => {
     console.dir(result);
  });
    //db.close();
});