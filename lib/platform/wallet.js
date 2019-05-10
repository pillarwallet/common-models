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
     * @name publicKey
     * @desc The public Key of one user.
     * @type String
     * @memberof Wallet
     * @required
     * @inner
     */
    publicKey: {
      type: String,
      required: true,
    },
    /**
     * @name userId
     * @desc The user identifier.
     * @type String
     * @memberof Wallet
     * @required
     * @inner
     */
    userId: {
      type: String,
      required: true,
    },
    /**
     * @name ethAddress
     * @desc The ethereum address of one user.
     * @type String
     * @memberof Wallet
     * @required
     * @unique
     * @inner
     */
    ethAddress: {
      type: String,
      required: true,
      unique: true,
    },
    /**
     * @name fcmToken
     * @desc The fcm identifier of one user.
     * @type String
     * @memberof Wallet
     * @required
     * @inner
     */
    fcmToken: {
      type: String,
      required: true,
    },
    /**
     * @name signalRegistrationId
     * @desc The user's signal identifier.
     * @type String
     * @memberof Wallet
     * @inner
     */
    signalRegistrationId: String,
    /**
     * @name bcxRegistered
     * @desc One flag to check BCX registration.
     * @type Boolean
     * @memberof Wallet
     * @inner
     */
    bcxRegistered: Boolean,
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

/**
 * @namespace Wallet
 * @name Wallet
 * @desc Wallet model maps to a MongoDB collection and defines the shape of the document.
 *
 * @param schema
 * @type {Model}
 */
module.exports = mongoose.model('Wallet', schema);
