const Todo = require('../models/todo');
const path = require('path');
module.exports.home = (req, res) => {
    //getting task list from database
    Todo.find().then((todos) => {
        todos_list = todos;
        console.log(todos)
        res.render(path.join(__dirname, '../views/home.ejs/'), {
            todos_list: todos
        });

    }).catch((err) => {
        console.log(err);
    })

}