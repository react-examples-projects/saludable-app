
class UserService {
  constructor() {
    this.UserModel = require("../models/User");
    this.optionsUpdate = { new: true };
  }

  async createUser(payload) {
    const user = new this.UserModel(payload);
    return new Promise((resolve, reject) => {
      user.save((err, result) => {
        if (err) return reject(err);
        result = result.toObject();
        delete result.password;
        resolve(result);
      });
    });
  }

  async existsUser(email) {
    const user = await this.UserModel.exists({ email });
    return user;
  }

  async isEmailInUse(email) {
    const users = await this.UserModel.find({ email }).lean();
    return users.length > 0;
  }

  async getUserById(id) {
    const user = await this.UserModel.findById(id, { password: 0 }).lean();
    return user;
  }
}

module.exports = new UserService();
