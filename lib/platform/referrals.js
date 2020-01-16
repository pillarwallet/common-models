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
     * @desc The status of the transaction [Success, Error].
     * @type String
     * @memberof Referrals
     * @required
     * @inner
     */
    status: {
      type: String,
      required: true,
    },
    /**
     * @name userAddress
     * @desc Wallet address of the user to be rewarded.
     * @type String
     * @memberof Referrals
     * @required
     * @inner
     */
    userAddress: {
      type: String,
      required: true,
    },
    /**
     * @name amount
     * @desc The amount of PLR for the reward.
     * @type Number
     * @memberof Referrals
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
     * @memberof Referrals
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
 * @namespace Referrals
 * @name Referrals
 * @desc Referrals model maps to a MongoDB collection and defines the shape of the document.
 *
 * @param schema
 * @type {Model}
 */
module.exports = mongoose.model('Referrals', schema);
