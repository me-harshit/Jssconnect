const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const secondyearSchema = new Schema({
    resname: String,
    authorName: String,
    year: String,
    department: String,
    subject: String,
    link: String,
    yourname: String,
    yourimage: String,
    todaysMonth: String,
});

const secondyearNote = mongoose.model('secondyearNote',secondyearSchema);

module.exports = secondyearNote;