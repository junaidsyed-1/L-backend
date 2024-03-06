const jwt = require('jsonwebtoken');
const SECRET_KEY = 'Thisismysecretkey';


const auth = (req, res, next) => {

    let token = req.headers.authorization;

    try {
        if (token) {
            token = token.split(' ')[1];
            const user = jwt.verify(token, SECRET_KEY);
        } else return res.status(401).json({ message: 'Unauthorized User' });

        next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized User' });
    }
};

module.exports = auth;