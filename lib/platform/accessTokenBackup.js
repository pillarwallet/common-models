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
     * @memberof AccessTokenBackup
     * @required
     * @inner
     */
    userId: {
      type: String,
      required: true,
    },
    /**
     * @name contactId
     * @desc The contact identifier.
     * @type String
     * @memberof AccessTokenBackup
     * @required
     * @inner
     */
    contactId: {
      type: String,
      required: true,
    },
    /**
     * @name accessKey
     * @desc Unique identifier for each connection.
     * @type String
     * @memberof AccessTokenBackup
     * @required
     * @inner
     */
    accessKey: {
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
 * @namespace AccessTokenBackup
 * @name AccessTokenBackup
 * @desc AccessTokenBackup model maps to a MongoDB collection and defines the shape of the document.
 *
 * @param schema
 * @type {Model}
 */
module.exports = mongoose.model('AccessTokenBackup', schema);
