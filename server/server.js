var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// save new something

// var Todo = mongoose.model( 'Todo', {
// 	text: {
// 		type: String,
// 		required: true,
// 		minlength:1,
// 		trim: true
// 	}, 
// 	completed: {
// 		type: Boolean,
// 		default: false
// 	},
// 	completedAt: {
// 		type: Number,
// 		default: null
// 	}
// });

// var newTodo = new Todo({
// 	text: '   yuPrepare Prassadam    '
// });

// newTodo.save().then((doc) => {
// 	console.log(`Save todo ${doc}`);
// }, (e) => {
// 	console.log('Unable to save ToDO');
// });

var User = mongoose.model('User', {
	email: {
		type: String,
		required: true,
		trim: true,
		minlength: 1	
	}
});

var user = new User( {
	email: "abhayhk29@gmail.com  "
});

user.save().then((doc) => {
	console.log(`Save todo ${doc}`);
}, (e) => {
	console.log('Unable to save ToDO');
});

