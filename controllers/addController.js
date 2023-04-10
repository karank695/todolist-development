const Todo = require('../models/todo');
module.exports.add = (req, res) => {
    let date = new Date(req.body.date);
    console.log(date);
    //insertion of task in database
    Todo.create({
        description: req.body.description,
        category: req.body.category,
        due_date:date
    }).then((data) => {
        console.log(data);
        return res.redirect('back');

    }).catch((err) => {
        console.log(err);
    })
}