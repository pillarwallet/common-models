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
     * @name status
     * @desc The status of the deposit [awaiting, received, submitted].
     * @type String
     * @memberof BtcDeposit
     * @required
     * @inner
     */
    status: {
      type: String,
      required: true,
    },
    /**
     * @name nonce
     * @desc The nonce of the deposit.
     * @type String
     * @memberof BtcDeposit
     * @required
     * @inner
     */
    nonce: {
      type: String,
      required: true,
      unique: true,
    },
    /**
     * @name txHash
     * @desc Hash of the transaction.
     * @type String
     * @memberof BtcDeposit
     * @required
     * @inner
     */
    txHash: {
      type: String,
      default: null,
    },
    /**
     * @name method
     * @desc The method [mint, burn].
     * @type String
     * @memberof BtcDeposit
     * @required
     * @inner
     */
    method: {
      type: String,
      required: true,
    },
    /**
     * @name amount
     * @desc The transaction amount.
     * @type Number
     * @memberof BtcDeposit
     * @inner
     */
    amount: {
      type: Number,
      required: true,
    },
    /**
     * @name sender
     * @desc The sender address.
     * @type String
     * @memberof BtcDeposit
     * @required
     * @inner
     */
    sender: {
      type: String,
      required: true,
    },
    /**
     * @name destination
     * @desc The destination address.
     * @type String
     * @memberof BtcDeposit
     * @required
     * @inner
     */
    destination: {
      type: String,
      required: true,
    },
    /**
     * @name gateway
     * @desc The gateway address.
     * @type String
     * @memberof BtcDeposit
     * @required
     * @inner
     */
    gateway: {
      type: String,
      default: null,
    },
    /**
     * @name nHash
     * @desc The deposit nhash.
     * @type String
     * @memberof BtcDeposit
     * @required
     * @inner
     */
    nHash: {
      type: String,
      default: null,
    },
    /**
     * @name signature
     * @desc The deposit signature.
     * @type String
     * @memberof BtcDeposit
     * @required
     * @inner
     */
    signature: {
      type: String,
      default: null,
    },
    /**
     * @name vOut
     * @desc The deposit signature.
     * @type Number
     * @memberof BtcDeposit
     * @required
     * @inner
     */
    vOut: {
      type: Number,
      default: null,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

/**
 * @namespace BtcDeposit
 * @name BtcDeposit
 * @desc BtcDeposit model maps to a MongoDB collection and defines the shape of the document.
 *
 * @param schema
 * @type {Model}
 */
module.exports = mongoose.model('BtcDeposit', schema);
