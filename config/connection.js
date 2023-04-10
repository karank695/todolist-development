const mongoose = require('mongoose');
async function main() {
    await mongoose.connect('mongodb://localhost:27017/contacts_db');
}
main().then(() => {
    console.log('connected successfully');
}).catch((err) => {
    console.log(err);
})