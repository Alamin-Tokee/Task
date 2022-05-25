const router = require('express').Router();
const User = require('../models/user');
const passport = require('../config/passport');


router.post('/', (req, res) => {
    console.log('User signup')

    const {username,password} = req.body;

    User.findOne({username:username}, (err, user) => {
        if(err){
            console.log('User posting error: ', err);
        }else if(user){
            res.status(400).json({
                error: `Sorry, that username already exists with ${username}`
            })
        }else{
            const newUser = new User({
                username: username,
                password: password
            })
            newUser.save((err, savedUser) => {
                if(err) return res.json(err);
                res.json(savedUser);
            })
        }
    })
})


//User login
router.get('/login', (req, res, next) => {
    console.log('routes/user.js, login, the value of req.body is: ') // line only for debugging for me
        console.log(req.body)
        /* the above is only for debugging and will print in the terminal -  { username: 'rohanpaul2@gmail.com', password: '123456' }  */
    next()
}, passport.authenticate('local'),(req, res) => {
    console.log('Loggedin', req.user);
    var userInfo = {
        username: req.user.username
    };
    res.send(userInfo)
})


// Only see the user info

router.get('/', (req, res, next) => {
    console.log('*****user*****')
    console.log(req.user) ;
    if (req.user) {
        res.json({user: req.user})
    } else {
        res.json({user: null})
    }
})


router.post('/logout', (req, res) => {
    if(req.user){
        req.logout();
        res.send({msg: 'Logging out'})
    }else{
        res.send({msg: 'No user to logout'})
    }
})


module.exports = router;