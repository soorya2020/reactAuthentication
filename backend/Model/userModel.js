const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const user = mongoose.Schema({
  id: {
    type: Number
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  password: {
    type: String,
    required: true,
  },

  
});

user.pre('save', function(next) {
  if (!this.isModified('password')) {
    return next();
  }

  bcrypt.hash(this.password, 8, (err, hash) => {
    if (err) {
      return next(err);
    }

    this.password = hash;
    next();
  });
});

user.methods.checkPassword = function(password) {

  const passwordHash = this.password;
  console.log(passwordHash);
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, passwordHash, (err, same) => {
      if (err) {
        console.log(err);
        return reject(err);
      }
      console.log(same);
      resolve(same);
    });
  });
};

const User = mongoose.model('user', user);

module.exports = User;

