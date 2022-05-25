const passport = require('passport')
const LocalStrategy = require('./localStrategy')
const User = require('../models/user')


passport.serializeUser((user, done) => {
    done(null, {_id:user._id})
})


// Deserialize user

passport.deserializeUser((id, done) => {
    cconsole.log('DeserializeUser called')
    User.findOne(
        {_id: id},
        'username',
        (err, user) => {
            console.log('*** Deserialize called, user: '); // only for debugging to see result in terminal
            console.log(user); // the whole raw user object - only for debugging to see result in terminal
            done(null, user)
        }
    )
})


passport.use(LocalStrategy);

module.exports = passport;