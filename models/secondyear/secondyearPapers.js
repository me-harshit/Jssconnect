const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const secondyearPaperSchema = new Schema({
    resname: String,
    year: Number,
    department: String,
    subject: String,
    link: String,
});

const secondyearPapers = mongoose.model('secondyearPapers',secondyearPaperSchema);

module.exports = secondyearPapers;