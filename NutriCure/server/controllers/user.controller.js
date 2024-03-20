const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    registerUser: async (req, res) => {
        try {
            const newUser = new User(req.body);
            await newUser.save();

            const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

            res.status(201).json({ user: newUser, token });
        } catch (error) {
            res.status(400).json(error);
        }
    },

    loginUser: async (req, res) => {
        try {
            const user = await User.findOne({ email: req.body.email });

            if (!user) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }

            const isMatch = await bcrypt.compare(req.body.password, user.password);

            if (!isMatch) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }

            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

            res.cookie('usertoken', token, { httpOnly: true }).json({ message: 'Successfully logged in!' });
        } catch (error) {
            res.status(400).json(error);
        }
    },

    getUserProfile: (req, res) => {
        User.findById(req.params.id)
            .then(user => res.json(user))
            .catch(error => res.status(400).json(error));
    },

    updateUserProfile: (req, res) => {
        User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
            .then(updatedUser => res.json(updatedUser))
            .catch(error => res.status(400).json(error));
    },

    deleteUser: (req, res) => {
        User.deleteOne({ _id: req.params.id })
            .then(deletionResult => res.json({ result: deletionResult }))
            .catch(error => res.status(400).json(error));
    },

    logoutUser: (req, res) => {
        res.clearCookie('usertoken');
        res.json({ message: 'You have successfully logged out.' });
    }
};
