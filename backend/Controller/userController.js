const User = require('../Model/userModel');

const findByEmail = ({ email }) => {
  return User.findOne({ email })
    .lean()
    .exec();
};

const findAll=()=>{
  return User.find()
    .lean()
    .exec()
}

const createUser = ({ email, password, name }) => {
  return User.create({ name,email, password });
};

module.exports = {
  findByEmail,
  createUser,
  findAll
};