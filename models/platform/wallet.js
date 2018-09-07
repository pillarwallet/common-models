const mongoose = require('mongoose');
const uuidv4 = require('uuid/v4');
const schemaCreator = require('../utilities/schemaCreator');

const schema = schemaCreator.createSchema(
  {
    _id: {
      type: String,
      default: uuidv4,
    },
    publicKey: {
      type: String,
      required: true,
      unique: true,
    },
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    ethAddress: {
      type: String,
      required: true,
      unique: true,
    },
    fcmToken: {
      type: String,
      required: true,
      unique: true,
    },
    signalRegistrationId: String,
    bcxRegistered: Boolean,
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

module.exports = mongoose.model('Wallet', schema);
