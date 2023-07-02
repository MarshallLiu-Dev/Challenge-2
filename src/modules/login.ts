const mongoose = require('mongoose');

const Auth = mongoose.model('Auth', {
  email: String,
  password: String,
});

module.exports = Auth;
