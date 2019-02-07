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
     * @memberof Connection
     * @required
     * @inner
     */
    userId: {
      type: String,
      required: true,
    },
    /**
     * @name accessKey
     * @desc Unique identifier for each connection.
     * @type String
     * @memberof Connection
     * @required
     * @inner
     */
    accessKey: {
      type: String,
      required: true,
    },
    /**
     * @name status
     * @desc The status of each connection.
     * @type String
     * @memberof Connection
     * @required
     * @inner
     */
    status: {
      type: String,
      required: true,
    },
    /**
     * @name sourceIdentityKey
     * @desc The sourceIdentityKey of each connection.
     * @type String
     * @memberof Connection
     * @unique
     * @inner
     */
    sourceIdentityKey: {
      // TODO: make it required when accessKey is removed
      type: String,
      unique: true,
    },
    /**
     * @name targetIdentityKey
     * @desc The targetIdentityKey of each connection.
     * @type String
     * @memberof Connection
     * @unique
     * @inner
     */
    targetIdentityKey: {
      // TODO: make it required when accessKey is removed
      type: String,
      unique: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

/**
 * @namespace Connection
 * @name Connection
 * @desc Connection model maps to a MongoDB collection and defines the shape of the document.
 *
 * @param schema
 * @type {Model}
 */
module.exports = mongoose.model('Connection', schema);
