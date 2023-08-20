//1. mongoes package  first
const mongoose = require('mongoose');
// we can use the validator package to validate email
const validator = require('validator');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please tell us your name'],
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    // this is from the documentation it is a function
    validate: [validator.isEmail, 'Please provide a valid email'],
  },

  photo: String,

  role: {
    type: String,
    enum: ['user', 'guide', 'guide-lead', 'admin'],
    default: 'user',
  },

  password: {
    type: String,
    required: [true, 'please provide a password'],
    minlength: 8,

    // this make sure the password doesnt show
    select: false,
  },

  passwordConfirm: {
    type: String,
    required: [true, 'please confirm your password'],
    minlength: 8,
    validate: {
      // this only works on create and save
      validator: function(el) {
        return el === this.password;
      },
      message: 'Passwords are not the same',
    },
  },

  passwordChangedAt: Date,

  passwordResetToken: String,
  passwordResetExpires: Date,

  active: {
    type: Boolean,
    default: true,
    select: false, // we don't want to user or anyone else to see it
  },
});

// next middleware , we want to encrpt password when it is created
userSchema.pre('save', async function(next) {
  // only run this function if password is modified
  if (!this.isModified('password')) {
    return next();
  }

  // hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;

  next();
});

userSchema.pre('save', function(next) {
  if (!this.isModified('password') || this.isNew) return next();

  // this is a small hack but it is ok
  this.passwordChangedAt = Date.now() - 1000;
  next();
});

// this is query middleware, it points to the current query

// we only find active not  false  users
userSchema.pre(/^find/, function(next) {
  this.find({ active: { $ne: false } });
  next();
});

userSchema.methods.correctPassword = async function(
  candidatePassword,
  userPassword
) {
  // retrun true or false
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function(JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );

    // true means changed
    return JWTTimestamp < changedTimestamp;
  }

  // false means not changed,
  return false;
};

userSchema.methods.createPasswordResetToken = function() {
  // it needs to be encryp tho
  const resetToken = crypto.randomBytes(32).toString('hex');

  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  console.log({ resetToken }, this.passwordResetToken);

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
