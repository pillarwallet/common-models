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
     * @memberof Blacklist
     * @required
     * @inner
     */
    userId: {
      type: String,
      required: true,
    },
    /**
     * @name targetUserId
     * @desc The blacklisted user identifier.
     * @type String
     * @memberof Blacklist
     * @required
     * @inner
     */
    targetUserId: {
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
 * @namespace Blacklist
 * @name Blacklist
 * @desc Blacklist model maps to a MongoDB collection and defines the shape of the document.
 *
 * @param schema
 * @type {Model}
 */
module.exports = mongoose.model('Blacklist', schema);
