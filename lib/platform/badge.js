const mongoose = require('mongoose');
const schemaCreator = require('../../utilities/schemaCreator');

const schema = schemaCreator.createSchema(
  {
    /**
     * @name ethereumId
     * @desc Refers to badge id on ethereum network.
     * @type Number
     * @memberof Badge
     * @required
     * @unique
     * @inner
     */
    ethereumId: {
      type: Number,
      required: true,
      unique: true,
    },
    /**
     * @name name
     * @desc Name by which the badge should be known.
     * @type String
     * @memberof Badge
     * @required
     * @inner
     */
    name: {
      type: String,
      required: true,
    },
    /**
     * @name type
     * @desc Badge type by which backend could find particular badge.
     * @type String
     * @memberof Badge
     * @required
     * @unique
     * @inner
     */
    type: {
      type: String,
      required: true,
      unique: true,
    },
    /**
     * @name imageUrl
     * @desc Image url of the badge.
     * @type String
     * @memberof Badge
     * @inner
     */
    imageUrl: String,
    /**
     * @name subtitle
     * @desc Optional subtitle of the badge.
     * @type String
     * @memberof Badge
     * @inner
     */
    subtitle: String,
    /**
     * @name description
     * @desc Simple description of one badge.
     * @type String
     * @memberof Badge
     * @inner
     */
    description: String,
    /**
     * @name selfAward
     * @desc A flag to indicate if the badge could be self awarded.
     * @type Boolean
     * @memberof Badge
     * @inner
     */
    selfAward: {
      type: Boolean,
      default: false,
    },
    /**
     * @name tokenSupply
     * @desc Indicates the maximum amount of badges those could be awarded.
     * @type Number
     * @memberof Badge
     * @inner
     */
    tokenSupply: Number,
    /**
     * @name isTransferable
     * @desc A flag to indicate if the badge could be transferred to another user.
     * @type Boolean
     * @memberof Badge
     * @inner
     */
    isTransferable: {
      type: Boolean,
      default: false,
    },
    /**
     * @name isNft
     * @desc A flag to indicate if the badge is NFT.
     * @type Boolean
     * @memberof Badge
     * @inner
     */
    isNft: {
      type: Boolean,
      default: false,
    },
    /**
     * @name txStatus
     * @desc Ethereum Transaction status.
     * @type String
     * @memberof Badge
     * @inner
     */
    txStatus: String,
    /**
     * @name txHash
     * @desc Ethereum Transaction hash.
     * @type String
     * @memberof Badge
     * @inner
     */
    txHash: String,
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

/**
 * @namespace Badge
 * @name Badge
 * @desc Badge model maps to a MongoDB collection and defines the shape of the document.
 *
 * @param schema
 * @type {Model}
 */
module.exports = mongoose.model('Badge', schema);
