const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require('bcryptjs');

const SALT_WORK_FACTOR = 10;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    }
}, {
    timestamps: true
});

userSchema.methods.comparePassword = async function(passwordInput){
    return await bcrypt.compare(passwordInput ,this.password)
}

userSchema.pre('save', function(next){
    try {
        if(!this.isModified('password')){
            return next();
        }

        bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
            if(err) return next(err);

            bcrypt.hash(this.password, salt, (err, hash)=> {
                if(err) return next(err)

                this.password = hash;

                return next();
            })
        })

    } catch (error) {
      return next(error)
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;