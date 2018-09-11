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
    address: String,
    decimals: Number,
    description: String,
    name: String,
    symbol: String,
    wallpaperUrl: String,
    iconUrl: String,
    email: String,
    telegram: String,
    twitter: String,
    website: String,
    whitepaper: String,
    isDefault: Boolean,
    isDefaultToken: Boolean,
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

module.exports = mongoose.model('Asset', schema);
