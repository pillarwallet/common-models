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
     * @name accessToken
     * @desc A user's valid access token.
     * @type String
     * @memberof AccessTokenBlacklist
     * @required
     * @inner
     */
    accessToken: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

schema.index({ createdAt: 1 }, { expireAfterSeconds: 7200 }); // ttl 2 hours

/**
 * @namespace AccessTokenBlacklist
 * @name AccessTokenBlacklist
 * @desc AccessTokenBlacklist model maps to a MongoDB collection and defines the shape of the document.
 *
 * @param schema
 * @type {Model}
 */
module.exports = mongoose.model('AccessTokenBlacklist', schema);
