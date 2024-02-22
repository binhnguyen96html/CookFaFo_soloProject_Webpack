const User = require("../models/userModel");

const userController = {};


// @desc  Login
// @route   POST /api/user/login
// @access Public
userController.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).exec();

    if (user && await user.comparePassword(password)) {
      res.locals.user = user;
      return next();
    } else {
      res.status(401).json("Invalid email or password");
      // throw new Error("Invalid email or password");
    }
  } catch (error) {
    // console.log(error);
    return next("Error in userController.login: " + error.message);
  }
};

// @desc  Signup
// @route  POST /api/user/signup
// @access Public
userController.signup = async (req, res, next) => {
  try {
    const {name, email, password} = req.body;

   const newUser = await new User({name, email, password}).save();

   if(newUser){
    res.locals.newUser = newUser;
    return next();
   }else{
    res.status(500).json('Cannot create new user!')
   }
  } catch (error) {
    return next("Error in userController.signup: " + error.message)
  }
}

module.exports = userController;
 