// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
   if ( err ) {
    return	console.log('Unable to connect to MongoDb Server');
   }
   console.log('Connected to MongoDb Server');
   
   // db.collection('Todos').find({
   //    _id: new ObjectID('5bdedace3749ed09301f3002')
   //    }).toArray().then( (docs) => {
   //    console.log('Todos');
   //    console.log(JSON.stringify( docs, undefined, 2));
   // }, (err) => {
   //    console.log('Unable to fetch Todos', err);
   // });


   db.collection('Todos').find().count().then( (count) => {
      console.log(`Todos ${count}`);
      
   }, (err) => {
      console.log('Unable to fetch Todos', err);
   });

   db.collection('Users').find({
      name : 'Krishna'
   }).toArray().then( (docs) => {
       console.log(JSON.stringify( docs, undefined, 2));
      
   }, (err) => {
      console.log('Unable to fetch Todos', err);
   });

   // db.close();

});