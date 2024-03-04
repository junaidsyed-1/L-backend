const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/practicesession');

const userSchema = mongoose.Schema({
  username: String,
  desription: String,
  categories: {
    type: Array,
    default: [],
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('User', userSchema);