const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new Schema({
  firstname: {
    type: String,
    default: "",
  },
  lastname: {
    type: String,
    default: "",
  },
  phoneno: {
    type: Number,
    default: "",
  },
  email: {
    type: String,
    default: "",
    unique: false,
    required: false,
  },
  resetToken: String,
  expireToken: Date,
  facebookId: String,
  googleId: String,
  admin: {
    type: Boolean,
    default: false,
  },
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);
