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
     * @name notes
     * @desc If something goes wrong, the notes contains the reason.
     * @type String
     * @memberof ReferralTransaction
     * @inner
     */
    notes: {
      type: String,
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
