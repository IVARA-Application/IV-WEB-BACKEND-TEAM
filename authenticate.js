const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwt = require('jsonwebtoken');
const FacebookTokenStrategy = require('passport-facebook-token');

const config = require('./config');

exports.local = passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

exports.getToken = function (user) {
    return jwt.sign(user, process.env.TOKEN_SECRET_KEY, { expiresIn: 3600 });
};

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.TOKEN_SECRET_KEY;

exports.jwtPassport = passport.use(new JwtStrategy(opts,
    (jwt_payload, done) => {
        console.log('JWT payload: ', jwt_payload);
        User.findOne({ _id: jwt_payload._id }, (err, user) => {
            if (err) {
                return done(err, false);
            } else if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
    }));

exports.verifyUser = passport.authenticate('jwt', { session: false });

exports.verifyAdmin = function (params, err, next) {
    if (params.user.admin) {
        return next();
    } else {
        var err = new Error('Only administrators are authorized to perform this operation.');
        err.status = 403;
        return next(err);
    }
};

// exports.googlePassport = passport.use(new GoogleStrategy({
//     clientId: process.env.GCLIENT_ID,
//     clientSecret: process.env.GCLIENT_SECRET
// }, function verify(accessToken, profile, refreshToken, done) {
//     console.log("Profile", profile);
//     User.findOne({ googleId: profile.sub }, (err, user) => {
//         if (err) {
//             return done(err, false);
//         }
//         if (!err && user !== null) {
//             return done(null, user);
//         }
//         else {
//             user = new User({ username: profile.email });
//             user.googleId = profile.sub;
//             user.save((err, user) => {
//                 if (err)
//                     return done(err, false);
//                 else
//                     return done(null, user);
//             })
//         }
//     });
// }));

const GoogleStrategy = require('passport-google-oauth20').Strategy;

exports.googlePassport = passport.use(new GoogleStrategy({
    clientID: process.env.GCLIENT_ID,
    clientSecret: process.env.GCLIENT_SECRET,
    callbackURL: "http://localhost:5000/users/google/callback"
},
    function (accessToken, refreshToken, profile, cb) {
        console.log(profile);
        User.findOne({ googleId: profile.id }, (err, user) => {
            if (err) {
                return cb(err, false);
            }
            if (!err && user !== null) {
                return cb(null, user);
            }
            else {
                user = new User({ username: profile.emails[0].value });
                user.googleId = profile.id;
                user.firstname = profile.name.givenName;
                user.lastname = profile.name.familyName;
                user.save((err, user) => {
                    if (err)
                        return cb(err, false);
                    else
                        return cb(null, user);
                })
            }
        });
    }
));



exports.facebookPassport = passport.use(new FacebookTokenStrategy({
    clientID: process.env.FBCLIENT_ID,
    clientSecret: process.env.FBCLIENT_SECRET
}, (accessToken, refreshToken, profile, done) => {
    User.findOne({ facebookId: profile.id }, (err, user) => {
        if (err) {
            return done(err, false);
        }
        if (!err && user !== null) {
            return done(null, user);
        }
        else {
            user = new User({ username: profile.displayName });
            user.facebookId = profile.id;
            user.firstname = profile.name.givenName;
            user.lastname = profile.name.familyName;
            user.save((err, user) => {
                if (err)
                    return done(err, false);
                else
                    return done(null, user);
            })
        }
    });
}
));