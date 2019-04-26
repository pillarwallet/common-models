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
     * @memberof User
     * @required
     * @inner
     */
    userId: {
      type: String,
      required: true,
    },
    /**
     * @name targetUserId
     * @desc The user who claimed the link.
     * @type String
     * @memberof User
     * @required
     * @inner
     */
    targetUserId: {
      type: String,
      required: false,
    },
    /**
     * @name link
     * @desc The generated referral link.
     * @type String
     * @memberof ReferralLinks
     * @required
     * @inner
     */
    link: {
      type: String,
      required: true,
      unique: true,
    },
    /**
     * @name status
     * @desc The status of each link.
     * @type String
     * @memberof ReferralLinks
     * @required
     * @inner
     */
    status: {
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
 * @namespace ReferralLinks
 * @name ReferralLinks
 * @desc ReferralLinks model maps to a MongoDB collection and defines the shape of the document.
 *
 * @param schema
 * @type {Model}
 */
module.exports = mongoose.model('ReferralLinks', schema);
