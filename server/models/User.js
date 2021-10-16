const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

//! Set up schema
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Please enter an email."],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter a valid email address."],
  },
  password: {
    type: String,
    minlength: [6, "Password must be at least 6 characters long."],
    required: [true, "Please enter password."],
  },
  refreshTokens: [String],
});
//! Set up schema

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const authentication = await bcrypt.compare(password, user.password);
    if (authentication) return user;
    else {
      throw new Error("Incorrect password.");
    }
  }
  throw Error("Incorrect email.");
};

//! Initialize mongoose
const User = mongoose.model("user", userSchema);
//! Initialize mongoose

module.exports = User;
