// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
   if ( err ) {
    return	console.log('Unable to connect to MongoDb Server');
   }
   console.log('Connected to MongoDb Server');

   // db.collection('Todos').insertOne({
   // 	text: 'Hare Krishna',
   // 	completed: false

   // }, ( err, result) => {
   // 	if( err ) {
   // 		return console.log(' Unable to insert todo ', err);
   // 	}

   // 	console.log(JSON.stringify(result.ops, undefined, 2));
   // });

   //  db.collection('Users').insertOne({
   // 	name: 'Abhay K Pandey',
   // 	age: 29,
   // 	location: 'Mumbai'

   // }, ( err, result) => {
   // 	if( err ) {
   // 		return console.log(' Unable to insert User ', err);
   // 	}

   // 	console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
   // });
   // db.close();
});