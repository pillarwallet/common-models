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
     * @name name
     * @desc Name of the campaign.
     * @type String
     * @memberof ReferralCampaign
     * @required
     * @unique
     * @inner
     */
    name: {
      type: String,
      required: true,
      unique: true,
    },
    /**
     * @name token
     * @desc Default token issued for the campaign.
     * @type String
     * @memberof ReferralCampaign
     * @required
     * @inner
     */
    token: {
      type: String,
      required: true,
    },
    /**
     * @name contractAddress
     * @desc Contract address of the default token.
     * @type String
     * @memberof ReferralCampaign
     * @required
     * @inner
     */
    contractAddress: {
      type: String,
      required: true,
    },
    /**
     * @name wallet
     * @desc The reward wallet.
     * @type Object
     * @memberof ReferralCampaign
     * @required
     * @inner
     */
    wallet: {
      address: {
        type: String,
        required: true,
      },
      path: {
        type: String,
        required: true,
      },
    },
    /**
     * @name amount
     * @desc Default amount to reward.
     * @type Number
     * @memberof ReferralInvitation
     * @inner
     */
    amount: {
      type: Number,
      default: null,
    },
    /**
     * @name logoUrl
     * @desc Logo URL to S3.
     * @type String
     * @memberof ReferralCampaign
     * @inner
     */
    logoUrl: {
      type: String,
      default: null,
    },
    /**
     * @name badges
     * @desc Flag indicating if the campaign should issue badges.
     * @type Boolean
     * @memberof ReferralCampaign
     * @inner
     */
    badges: {
      type: Boolean,
      default: false,
    },
    /**
     * @name isActive
     * @desc Flag indicating if the campaign is active.
     * @type Boolean
     * @memberof ReferralCampaign
     * @inner
     */
    isActive: {
      type: Boolean,
      default: false,
    },
    /**
     * @name relatedCampaigns
     * @desc An array of related campaigns.
     * @type String[]
     * @memberof ReferralCampaign
     * @inner
     */
    relatedCampaigns: {
      type: [String],
      default: [],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

/**
 * @namespace ReferralCampaign
 * @name ReferralCampaign
 * @desc ReferralCampaign model maps to a MongoDB collection and defines the shape of the document.
 *
 * @param schema
 * @type {Model}
 */
module.exports = mongoose.model('ReferralCampaign', schema);
