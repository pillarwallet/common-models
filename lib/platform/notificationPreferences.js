const mongoose = require('mongoose');
const uuidv4 = require('uuid/v4');
const schemaCreator = require('../../utilities/schemaCreator');

const schema = schemaCreator.createSchema(
  {
    _id: {
      type: String,
      default: uuidv4,
    },
    userId: {
      type: String,
      unique: true,
      required: true,
    },
    newOffer: Boolean,
    newReceipt: Boolean,
    paymentConfirmation: Boolean,
    paymentStatusUpdate: Boolean,
    profileUpdate: Boolean,
    fundsDeposit: Boolean,
    transactionEvent: Boolean,
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

module.exports = mongoose.model('NotificationPreferences', schema);
