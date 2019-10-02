const mongoose = require('mongoose');
const schemaCreator = require('../../utilities/schemaCreator');

const schema = schemaCreator.createSchema(
  {
    /**
     * @name name
     * @desc Name by which the badge should be known.
     * @type String
     * @memberof Badge
     * @required
     * @inner
     */
    name: {
      type: String,
      required: true,
    },
    /**
     * @name type
     * @desc Badge type by which backend could find particular badge.
     * @type String
     * @memberof Badge
     * @required
     * @unique
     * @inner
     */
    type: {
      type: String,
      required: true,
      unique: true,
    },
    /**
     * @name imageUrl
     * @desc Image url of the badge.
     * @type String
     * @memberof Badge
     * @inner
     */
    imageUrl: String,
    /**
     * @name subtitle
     * @desc Optional subtitle of the badge.
     * @type String
     * @memberof Badge
     * @inner
     */
    subtitle: String,
    /**
     * @name description
     * @desc Simple description of one badge.
     * @type String
     * @memberof Badge
     * @inner
     */
    description: String,
    /**
     * @name selfAward
     * @desc A flag to indicate if the badge could be self awarded.
     * @type Boolean
     * @memberof Badge
     * @inner
     */
    selfAward: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

/**
 * @namespace Badge
 * @name Badge
 * @desc Badge model maps to a MongoDB collection and defines the shape of the document.
 *
 * @param schema
 * @type {Model}
 */
module.exports = mongoose.model('Badge', schema);
