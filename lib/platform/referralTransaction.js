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
     * @name name
     * @desc The status of the transaction [confirmed, failed].
     * @type String
     * @memberof ReferralTransaction
     * @required
     * @inner
     */
    status: {
      type: String,
      required: true,
    },
    /**
     * @name ethAddress
     * @desc Address of the user to be rewarded.
     * @type String
     * @memberof ReferralTransaction
     * @required
     * @inner
     */
    ethAddress: {
      type: String,
      required: true,
    },
    /**
     * @name txHash
     * @desc Hash of the transaction.
     * @type String
     * @memberof ReferralTransaction
     * @required
     * @inner
     */
    txHash: {
      type: String,
      required: true,
    },
    /**
     * @name amount
     * @desc The amount of PLR for the reward.
     * @type Number
     * @memberof ReferralTransaction
     * @required
     * @inner
     */
    amount: {
      type: Number,
      required: true,
    },
    /**
     * @name asset
     * @desc Asset symbol.
     * @type String
     * @memberof ReferralTransaction
     * @inner
     */
    asset: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

/**
 * @namespace ReferralTransaction
 * @name ReferralTransaction
 * @desc ReferralTransaction model maps to a MongoDB collection and defines the shape of the document.
 *
 * @param schema
 * @type {Model}
 */
module.exports = mongoose.model('ReferralTransaction', schema);
