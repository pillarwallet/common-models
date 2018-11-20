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
     * @name address
     * @desc The smart contract address.
     * @type String
     * @memberof Asset
     * @unique
     * @required
     * @inner
     */
    address: {
      type: String,
      required: true,
      unique: true,
    },
    /**
     * @name decimals
     * @desc Refers to how divisible a token can be.
     * @type Number
     * @memberof Asset
     * @required
     * @inner
     */
    decimals: {
      type: Number,
      required: true,
    },
    /**
     * @name description
     * @desc Simple description of one Token.
     * @type String
     * @memberof Asset
     * @inner
     */
    description: String,
    /**
     * @name name
     * @desc Name by which the token contract should be known.
     * @type String
     * @memberof Asset
     * @required
     * @unique
     * @inner
     */
    name: {
      type: String,
      required: true,
      unique: true,
    },
    /**
     * @name symbol
     * @desc Symbol by which the token contract should be known, it is broadly equivalent to a stock ticker.
     * @type String
     * @memberof Asset
     * @required
     * @unique
     * @inner
     */
    symbol: {
      type: String,
      required: true,
      unique: true,
    },
    /**
     * @name wallpaperUrl
     * @desc The token's predefined background image.
     * @type String
     * @memberof Asset
     * @inner
     */
    wallpaperUrl: String,
    /**
     * @name iconUrl
     * @desc The token's predefined icon image.
     * @type String
     * @memberof Asset
     * @inner
     */
    iconUrl: String,
    /**
     * @name email
     * @desc The token's email.
     * @type String
     * @memberof Asset
     * @inner
     */
    email: String,
    /**
     * @name telegram
     * @deprecated Use Social Media array
     */
    telegram: String,
    /**
     * @name twitter
     * @deprecated Use Social Media array
     */
    twitter: String,
    /**
     * @name socialMedia
     * @desc The token's social media.
     * @type Array
     * @memberof Asset
     * @inner
     */
    socialMedia: [
      {
        service: String,
        username: String,
      },
    ],
    /**
     * @name website
     * @desc The token's website.
     * @type String
     * @memberof Asset
     * @inner
     */
    website: String,
    /**
     * @name whitepaper
     * @desc The token's whitepaper.
     * @type String
     * @memberof Asset
     * @inner
     */
    whitepaper: String,
    /**
     * @name isDefault
     * @desc One flag to check if the Token is default on the wallet.
     * @type Boolean
     * @memberof Asset
     * @inner
     */
    isDefault: Boolean,
    /**
     * @name isPreferred
     * @desc A flag to indicate preferred tokens within the system.
     * @type Boolean
     * @memberof Asset
     * @inner
     */
    isPreferred: {
      type: Boolean,
      default: false,
    },
    /**
     * @name icos
     * @desc Ico details of one Token.
     * @type Array
     * @memberof Asset
     * @inner
     */
    icos: [
      {
        icoStatus: String,
        icoPhase: String,
        icoAddress: String,
        minimumContribution: Number,
        maximumContribution: Number,
        baseCurrency: String,
        unitPrice: Number,
        totalSupply: Number,
        totalLocked: Number,
        supportedCurrencies: String, // This doesn't seem to be in the Nivaura documentation
        icoStartingBlockNumber: Number,
        icoEndingBlockNumber: Number,
        plannedOpeningDate: String,
        plannedClosingDate: String,
        nationalityRestriction: Boolean,
        nivauraProjectId: Number,
        links: [
          {
            name: String,
            url: String,
          },
        ],
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

/**
 * @namespace Asset
 * @name Asset
 * @desc Asset model maps to a MongoDB collection and defines the shape of the document.
 *
 * @param schema
 * @type {Model}
 */
module.exports = mongoose.model('Asset', schema);
