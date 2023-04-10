const PersonDetail = require('../models/person');
const path = require('path');
let pd;
PersonDetail.find().then((person_details) => {
    pd = person_details;

}).catch((err) => {
    console.log(err);
})
module.exports.home = (req, res) => {
    res.render(path.join(__dirname, '../views/home.ejs/'),{person_details:pd});
    
}