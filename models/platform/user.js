const mongoose = require('mongoose');
const uuidv4 = require('uuid/v4');
const schemaCreator = require('../utilities/schemaCreator');

const schema = schemaCreator.createSchema(
  {
    _id: {
      type: String,
      default: uuidv4,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: String,
    lastName: String,
    email: String,
    isEmailVerified: Boolean,
    emailOneTimePassword: String,
    phone: String,
    isPhoneVerified: Boolean,
    phoneOneTimePassword: String,
    country: String,
    state: String,
    city: String,
    userSearchable: Boolean,
    unconfirmedEmail: String,
    tagline: String,
    taglineStatus: Boolean,
    profileImage: String,
    pending: {
      type: Boolean,
      default: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

module.exports = mongoose.model('User', schema);
