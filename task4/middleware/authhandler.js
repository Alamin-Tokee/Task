//a middleware to check if a user is logged in or out
const isNotLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()){
        return next();
    }
    res.redirect("/");
};

const isLoggedIn = (req, res, next) => {
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/user/login");
};

module.exports = {isNotLoggedIn, isLoggedIn};