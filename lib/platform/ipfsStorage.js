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
     * @name walletId
     * @desc The id of the wallet.
     * @type String
     * @memberof IpfsStorage
     * @required
     * @inner
     */
    walletId: {
      type: String,
      required: true,
    },
    /**
     * @name storageId
     * @desc The id of the IPFS storage.
     * @type String
     * @memberof IpfsStorage
     * @required
     * @unique
     * @inner
     */
    storageId: {
      type: String,
      required: true,
      unique: true,
    },
    /**
     * @name secretKey
     * @desc Secret key for the IPFS storage.
     * @type String
     * @memberof IpfsStorage
     * @required
     * @unique
     * @inner
     */
    secretKey: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

/**
 * @namespace IpfsStorage
 * @name IpfsStorage
 * @desc IpfsStorage model maps to a MongoDB collection and defines the shape of the document.
 *
 * @param schema
 * @type {Model}
 */
module.exports = mongoose.model('IpfsStorage', schema);
