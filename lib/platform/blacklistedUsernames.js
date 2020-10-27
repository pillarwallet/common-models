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
     * @name username
     * @desc The blacklisted username.
     * @type String
     * @memberof BlacklistedUsernames
     * @unique
     * @required
     * @inner
     */
    username: {
      type: String,
      unique: true,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

/**
 * @namespace BlacklistedUsernames
 * @name BlacklistedUsernames
 * @desc BlacklistedUsernames model maps to a MongoDB collection and defines the shape of the document.
 *
 * @param schema
 * @type {Model}
 */
module.exports = mongoose.model('BlacklistedUsernames', schema);
