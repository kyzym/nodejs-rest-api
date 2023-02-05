const { User } = require('../../models/user');
const bcrypt = require('bcryptjs');

const findUser = async (email) =>
  await User.findOne({ email });

const hashPass = async (password) => {
  return await bcrypt.hash(password, 10);
};

const createNewUser = async (user, avatarURL) => {
  const hashedPassword = await hashPass(user.password);

  const newUser = await User.create({
    ...user,
    password: hashedPassword,
    avatarURL,
  });
  return newUser;
};

module.exports = {
  findUser,
  createNewUser,
};
