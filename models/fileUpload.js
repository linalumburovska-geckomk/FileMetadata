const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fileUpload = new Schema({
    name: String,
    type: String,
    size: String
});

const ModelClass = mongoose.model('fileUpload', fileUpload);

module.exports = ModelClass;