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
     * @memberof UserFeatureFlags
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
     * @name smartWallet
     * @desc One flag for Smart Wallet support.
     * @type Boolean
     * @memberof UserFeatureFlags
     * @required
     * @inner
     */
    smartWallet: {
      type: Boolean,
      required: true,
    },
    /**
     * @name bitcoin
     * @desc One flag for Bitcoin supoort.
     * @type Boolean
     * @memberof UserFeatureFlags
     * @required
     * @inner
     */
    bitcoin: {
      type: Boolean,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

/**
 * @namespace UserFeatureFlags
 * @name UserFeatureFlags
 * @desc UserFeatureFlags model maps to a MongoDB collection and defines the shape of the document.
 *
 * @param schema
 * @type {Model}
 */
module.exports = mongoose.model('UserFeatureFlags', schema);
