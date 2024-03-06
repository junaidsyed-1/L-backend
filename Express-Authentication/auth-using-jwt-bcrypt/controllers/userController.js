const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const SECRET_KEY = 'Thisismysecretkey';

const signup = async (req, res) => {
    // Sign in Logic
    // check if a user already exists
    // Hashed password
    // User create
    // Token generate
    const { email, name, password } = req.body;

    try {
        const existingUser = await userModel.findOne({ email: email });
        if (existingUser) { return res.status(409).json({ message: 'User already exists' }) };

        // Hased Pass
        const salt = 10;
        const hashedPassword = await bcrypt.hash(password, salt)

        // User create
        const user = await userModel.create({ email: email, name: name, password: hashedPassword });

        // Token generate
        const token = jwt.sign({ email: user.email, id: user._id }, SECRET_KEY)
        res.status(201).json({ message: 'User created successfully', token: token, user: user });

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error })
    }
};

const signin = async (req, res) => {

    const { email, password } = req.body;

    try {
        const existingUser = await userModel.findOne({ email: email });
        if (!existingUser) { return res.status(404).json({ message: 'User does not exists' }) };

        const matchPassword = await bcrypt.compare(password, existingUser.password);

        if (!matchPassword) { return res.status(400).json({ message: 'Invalid credentials.' }) };

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, SECRET_KEY);
        res.status(200).json({ token: token, message: 'Sig in successfull', user: existingUser });


    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error", error: error });
    }

};

module.exports = { signup, signin }