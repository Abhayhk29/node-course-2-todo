const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// var id = '5be7c9f7b810032708e72e4a1';

// if( !ObjectID.isValid(id) ) {
// 	console.log('Not valid');
// }
// Todo.find( {
// 	_id : id
// }).then( (todos) => {
// 	console.log('Todos', todos);
// });


// Todo.findOne( {
// 	_id : id
// }).then( (todos) => {
// 	console.log('Todos', todos);
// });

// Todo.findById(id).then((todo) => {
// 	if (!todo) {
// 		return console.log('Id Not Found');
// 	}
// 	console.log('ToDo By Id', todo);
// }).catch((e) => console.log(e));

User.findById('5be6ab8866de4b1f687b5674').then( (user) => {
	if( !user ) {
		return console.log('Unable to find user');
	}
	console.log(JSON.stringify( user, undefined, 2))
}, (e) => {
	console.log(e);
});
