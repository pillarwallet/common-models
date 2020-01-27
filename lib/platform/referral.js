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
     * @name deviceInfo
     * @desc Device info stored as checksum.
     * @type String
     * @memberof Referral
     * @required
     * @inner
     */
    deviceInfo: {
      type: String,
      required: true,
    },
    /**
     * @name firstInstall
     * @desc Flag for first install.
     * @type String
     * @memberof Referral
     * @required
     * @inner
     */
    firstInstall: {
      type: Boolean,
      required: true,
    },
    /**
     * @name userId
     * @desc The user identifier of the invited person.
     * @type String
     * @memberof Referral
     * @inner
     */
    userId: {
      type: String,
    },
    /**
     * @name ethAddress
     * @desc ETH address of the invited person.
     * @type String
     * @memberof Referral
     * @inner
     */
    ethAddress: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

/**
 * @namespace Referral
 * @name Referral
 * @desc Referral model maps to a MongoDB collection and defines the shape of the document.
 *
 * @param schema
 * @type {Model}
 */
module.exports = mongoose.model('Referral', schema);
