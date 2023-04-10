const mongoos = require('mongoose');
const todos = new mongoos.Schema({
    description: { type: String, required: true },
    category: {
        type: String,
    },
    due_date: { type: String}
});
const Todo = mongoos.model('Todo', todos);
module.exports = Todo;