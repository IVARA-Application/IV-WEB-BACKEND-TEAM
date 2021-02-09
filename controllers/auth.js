const googleOAuth = require('../utils/googleOAuth');
const User = require("../models/user");

exports.login = async (req, res) => {
  try {
    console.log("Req.body :",req.body)
    console.log("Req.body[] :",req.body)
    console.log("COde:",req.body.code)
    const code = req.body;
    const profile = await googleOAuth.getProfileInfo(code);

    
        User.findOne({ googleId: profile.id }, (err, user) => {
            if (err) {
               console.log(err)
            }
            if (!err && user !== null) {
                console.log(user);
            }
            else {
                user = new User({ username: profile.email });
                user.googleId = profile.sub;
                user.firstname = profile.given_name;
                user.lastname = profile.family_name;
                user.save((err, user) => {
                    if (err)
                        console.log(err);
                    else
                        console.log(user);
                })
            }
        });
    

    const user = {
      googleId: profile.sub,
      name: profile.name,
      firstName: profile.given_name,
      lastName: profile.family_name,
      email: profile.email,
    };
    console.log(user);
    res.send({ user });
  } catch (e) {
    console.log(e);
    res.status(401).send();
  }
};