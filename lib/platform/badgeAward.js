const mongoose = require('mongoose');
const schemaCreator = require('../../utilities/schemaCreator');

const schema = schemaCreator.createSchema(
  {
    /**
     * @name badge
     * @desc Badge id.
     * @type String
     * @memberof BadgeAward
     * @required
     * @inner
     */
    badge: {
      type: mongoose.Schema.ObjectId,
      required: true,
    },
    /**
     * @name badgeType
     * @desc Badge type.
     * @type String
     * @memberof BadgeAward
     * @required
     * @inner
     */
    badgeType: {
      type: String,
      required: true,
    },
    /**
     * @name userId
     * @desc User Id.
     * @type String
     * @memberof BadgeAward
     * @required
     * @inner
     */
    userId: {
      type: String,
      required: true,
    },
    /**
     * @name walletId
     * @desc Wallet Id.
     * @type String
     * @memberof BadgeAward
     * @required
     * @inner
     */
    walletId: {
      type: String,
      required: true,
    },
    /**
     * @name txStatus
     * @desc Award status.
     * @type String
     * @memberof BadgeAward
     * @inner
     */
    txStatus: {
      type: String,
      default: 'confirmed',
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

/**
 * @namespace BadgeAward
 * @name BadgeAward
 * @desc BadgeAward model maps to a MongoDB collection and defines the shape of the document.
 *
 * @param schema
 * @type {Model}
 */
module.exports = mongoose.model('BadgeAward', schema);
