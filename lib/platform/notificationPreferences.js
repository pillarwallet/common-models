const mongoose = require('mongoose');
const uuidv4 = require('uuid/v4');
const schemaCreator = require('../../utilities/schemaCreator');

const schema = schemaCreator.createSchema(
  {
    _id: {
      type: String,
      default: uuidv4,
    },
   /**
    * @name userId
    * @desc The user identifier.
    * @type String
    * @memberof NotificationPreferences
    * @required
    * @unique
    * @inner
    */
    userId: {
      type: String,
      unique: true,
      required: true,
    },
    /**
     * @name newOffer
     * @desc One flag for newOffer notification.
     * @type Boolean
     * @memberof NotificationPreferences
     * @required
     * @inner
     */
    newOffer: Boolean,
    /**
     * @name newReceipt
     * @desc One flag for newReceipt notification.
     * @type Boolean
     * @memberof NotificationPreferences
     * @required
     * @inner
     */
    newReceipt: Boolean,
    /**
     * @name paymentConfirmation
     * @desc One flag for paymentConfirmation notification.
     * @type Boolean
     * @memberof NotificationPreferences
     * @required
     * @inner
     */
    paymentConfirmation: Boolean,
    /**
     * @name paymentStatusUpdate
     * @desc One flag for paymentStatusUpdate notification.
     * @type Boolean
     * @memberof NotificationPreferences
     * @required
     * @inner
     */
    paymentStatusUpdate: Boolean,
    /**
     * @name profileUpdate
     * @desc One flag for profileUpdate notification.
     * @type Boolean
     * @memberof NotificationPreferences
     * @required
     * @inner
     */
    profileUpdate: Boolean,
    /**
     * @name fundsDeposit
     * @desc One flag for fundsDeposit notification.
     * @type Boolean
     * @memberof NotificationPreferences
     * @required
     * @inner
     */
    fundsDeposit: Boolean,
    /**
     * @name transactionEvent
     * @desc One flag for transactionEvent notification.
     * @type Boolean
     * @memberof NotificationPreferences
     * @required
     * @inner
     */
    transactionEvent: Boolean,
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

/**
 * @namespace NotificationPreferences
 * @name NotificationPreferences
 * @desc NotificationPreferences model maps to a MongoDB collection and defines the shape of the document.
 *
 * @param schema
 * @type {Model}
 */
module.exports = mongoose.model('NotificationPreferences', schema);
