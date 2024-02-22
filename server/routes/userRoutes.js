const express = require('express');
const userController = require('../controllers/userController');

router = express.Router();

router.post('/login', userController.login, (req, res) => {
    res.status(200).json({
        _id: res.locals.user._id,
        name: res.locals.user.name,
        email: res.locals.user.email,
        isAdmin: res.locals.user.isAdmin
    })
})

router.post('/signup', userController.signup, (req, res) => {
    res.status(200).json({
        _id: res.locals.newUser._id,
        name: res.locals.newUser.name,
        email: res.locals.newUser.email,
        isAdmin: res.locals.newUser.isAdmin
    })
})



module.exports = router;