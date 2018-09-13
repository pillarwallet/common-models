const mongoose = require('mongoose');
const uuidv4 = require('uuid/v4');
const schemaCreator = require('../../utilities/schemaCreator');

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
