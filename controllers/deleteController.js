const Todo = require('../models/todo');
module.exports.delete = (req, res) => {
    console.log('hi');
    let ids = req.params.id.split(" ");
    for (let i = 0; i < ids.length; i++) {
        let id = ids[i];
        console.log(typeof id);
        Todo.findByIdAndDelete(id).then(() => {
            console.log('deleted successfully');
        }).catch((err) => console.log(err));
    }
    res.redirect('back');
}