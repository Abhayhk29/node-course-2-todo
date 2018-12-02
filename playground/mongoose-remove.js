const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

Todo.findByIdAndRemove('5bdedc1fa42ea8200ce8e5ba').then((todo) => {
	console.log(todo);
});