const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const passportLocalMongoose = require("passport-local-mongoose");

const ContactSchema = new Schema({
    name: {
        type: String,
        
    },
    email: {
        type: String,
        
    },
    query: {
        type: String,
        
    }
});

// UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Contact", ContactSchema);
