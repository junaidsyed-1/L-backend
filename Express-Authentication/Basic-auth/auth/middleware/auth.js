function isUserLoggedIn(req, res, next) {
    if (req.path === '/login' || req.path === '/register') {
        return next();
    }

    // Check if there is a session cookie
    if (!req.cookies.session) {
        return res.redirect('/');
    }

    // If there is a session cookie, proceed to the next middleware
    next();
};

module.exports = isUserLoggedIn;