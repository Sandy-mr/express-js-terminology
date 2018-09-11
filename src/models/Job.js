const mongoose = require('mongoose');

const Schema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String

});

module.exports = mongoose.model('Job', Schema)
