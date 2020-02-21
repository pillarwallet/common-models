/* eslint-disable no-param-reassign */
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
    /**
     * @name blocknativeRegistered
     * @desc One flag to check Blocknative address registration.
     * @type Boolean
     * @memberof Wallet
     * @inner
     */
    blocknativeRegistered: Boolean,
    /**
     * @name type
     * @desc The type of the wallet.
     * @type String
     * @memberof Wallet
     * @inner
     */
    type: {
      type: String,
    },
    /**
     * @name disabled
     * @desc A flag indicating if the wallet is disabled or not.
     * @type Boolean
     * @memberof Wallet
     * @required
     * @inner
     */
    disabled: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

schema.statics.findFirstCreated = function(query = {}) {
  query.disabled = false;
  return this.model('Wallet')
    .findOne(query)
    .sort({ createdAt: 1 });
};

/**
 * @namespace Wallet
 * @name Wallet
 * @desc Wallet model maps to a MongoDB collection and defines the shape of the document.
 *
 * @param schema
 * @type {Model}
 */
module.exports = mongoose.model('Wallet', schema);
