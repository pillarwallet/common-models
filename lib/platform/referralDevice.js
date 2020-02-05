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
     * @name deviceInfo
     * @desc Device info stored as checksum.
     * @type String
     * @memberof ReferralDevice
     * @required
     * @inner
     */
    deviceInfo: {
      type: String,
      required: true,
    },
    /**
     * @name deviceOs
     * @desc Device OS.
     * @type String
     * @memberof ReferralDevice
     * @required
     * @inner
     */
    deviceOs: {
      type: String,
      required: true,
    },
    /**
     * @name firstInstall
     * @desc Flag for first install.
     * @type String
     * @memberof ReferralDevice
     * @required
     * @inner
     */
    firstInstall: {
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
 * @namespace ReferralDevice
 * @name ReferralDevice
 * @desc ReferralDevice model maps to a MongoDB collection and defines the shape of the document.
 *
 * @param schema
 * @type {Model}
 */
module.exports = mongoose.model('ReferralDevice', schema);
