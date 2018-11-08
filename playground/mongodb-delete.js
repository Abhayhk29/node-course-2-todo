// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
   if ( err ) {
    return	console.log('Unable to connect to MongoDb Server');
   }
    
   // db.collection('Todos').deleteMany({ text: 'Hare Krishna'}).then((result) => {
   //    console.log(result);
   // }); 

   // db.collection('Todos').deleteOne({ text: 'New Document'}).then((result) => {
   //    console.log(result);
   // });

   db.collection('Todos').findOneAndDelete({ completed: true}).then((result) => {
      console.log(result);
   }); 
    //db.close();

});