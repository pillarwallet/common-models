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
     * @desc The user identifier of the inviting user.
     * @type String
     * @memberof ReferralInvitation
     * @inner
     */
    userId: {
      type: String,
      required: true,
    },
    /**
     * @name email
     * @desc Email of the invited person.
     * @type String
     * @memberof ReferralInvitation
     * @required
     * @inner
     */
    email: {
      type: String,
      required: true,
    },
    /**
     * @name rewarded
     * @desc Hash of the transaction.
     * @type String
     * @memberof ReferralInvitation
     * @required
     * @inner
     */
    rewarded: {
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
 * @namespace ReferralInvitation
 * @name ReferralInvitation
 * @desc ReferralInvitation model maps to a MongoDB collection and defines the shape of the document.
 *
 * @param schema
 * @type {Model}
 */
module.exports = mongoose.model('ReferralInvitation', schema);
