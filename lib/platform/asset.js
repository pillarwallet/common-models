const mongoose = require('mongoose');
const uuidv4 = require('uuid/v4');
const schemaCreator = require('../../utilities/schemaCreator');

// Todo check if this Schema will change some of this fields should be required and unique
const schema = schemaCreator.createSchema(
  {
    _id: {
      type: String,
      default: uuidv4,
    },
    address: {
      type: String,
      required: true,
      unique: true,
    },
    decimals: {
      type: Number,
      required: true,
    },
    description: String,
    name: {
      type: String,
      required: true,
      unique: true,
    },
    symbol: {
      type: String,
      required: true,
      unique: true,
    },
    wallpaperUrl: String,
    iconUrl: String,
    email: String,
    socialMedia: [
      {
        service: String,
        username: String,
      },
    ],
    website: String,
    whitepaper: String,
    isDefault: Boolean,
    icos: [
      {
        icoStatus: String,
        icoPhase: String,
        icoAddress: String,
        minimumContribution: Number,
        maximumContribution: Number,
        baseCurrency: String,
        unitPrice: Number,
        totalSupply: Number,
        totalLocked: Number,
        supportedCurrencies: String, // This doesn't seem to be in the Nivaura documentation
        icoStartingBlockNumber: Number,
        icoEndingBlockNumber: Number,
        plannedOpeningDate: String,
        plannedClosingDate: String,
        nationalityRestriction: Boolean,
        nivauraProjectId: Number,
        links: [
          {
            name: String,
            url: String,
          },
        ],
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

module.exports = mongoose.model('Asset', schema);
