const User = require('../models/User.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
// const crypto = require('crypto');
// const nodemailer = require('nodemailer');

module.exports = {
    authenticate(req, res, next) {
        const allowedUrls = ["/pages/login-v1", "/pages/register-v1", "/pages/error-404", "/pages/connection-lost", "/pages/under-construction", "/pages/coming-soon"];
        const requestUrl = req.originalUrl;
        if (allowedUrls.includes(requestUrl)) {
            return next();
        }
        const token = req.cookies.token;
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;
            next();
        } catch (error) {
            return res.redirect("/pages/login-v1")
        }
    },
    // Register a new user
    async signup(req, res) {
        try {
            const { email, password, firstname, lastname, phone_number } = req.body;
            const existigUser = await User.findOne({ email })
            if (existigUser) {
                return res.status(400).json({
                    error: "Email is taken!"
                });
            }
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            const user = new User({ email, password: hashedPassword, firstname, lastname, phone_number });
            await user.save();
            return res.redirect("/pages/login-v1")

        } catch (error) {
            return res.status(500).json({
                error: "Something went wrong! Please try again later."
            });
        }
    },
    async login(req, res) {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({
                    error: "Invalid email or password!"
                });
            }
            const isPasswordMatch = await bcrypt.compare(password, user.password);

            if (!isPasswordMatch) {
                return res.status(400).json({
                    error: "Invalid email or password!"
                });
            }
            
            const token = jwt.sign(
                { _id: user._id },
                process.env.JWT_SECRET,
                { expiresIn: '1h' }
            );
            res.cookie('token', token, { maxAge: 900000, httpOnly: true });
            return res.status(200).json({
                token,
                user: {
                    _id: user._id,
                    email: user.email
                }
            });
        } catch (error) {
            return res.status(500).json({
                error: "Something went wrong! Please try again later."
            });
        }
    },
}