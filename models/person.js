const mongoos = require('mongoose');
const personSchema = new mongoos.Schema({
    person_name: { type: String, required: true },
    age: {
        type: Number,
        min: [20, 'you enter less value than required'],
        max:60
    },
    employed: { type: Boolean },
    city: { type: String }
});
const PersonDetail = mongoos.model('PersonDetail', personSchema);
module.exports = PersonDetail;