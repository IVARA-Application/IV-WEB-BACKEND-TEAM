const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const passportLocalMongoose = require("passport-local-mongoose");

const ContactSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    query: {
        type: String,
        required: true
    }
});

// UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Contact", ContactSchema);
