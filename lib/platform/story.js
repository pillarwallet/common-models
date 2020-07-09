const mongoose = require('mongoose');
const schemaCreator = require('../../utilities/schemaCreator');

const schema = schemaCreator.createSchema(
  {
    /**
     * @name shortTitle
     * @desc Short title of the story.
     * @type String
     * @memberof Story
     * @required
     * @inner
     */
    shortTitle: {
      type: String,
      required: true,
      maxlength: 32,
    },
    /**
     * @name imageUrl
     * @desc The story's preview image.
     * @type String
     * @memberof Story
     * @inner
     */
    imageUrl: {
      type: String, // TODO: required?
    },
    /**
     * @name imageMonoUrl
     * @desc The story's preview mono image.
     * @type String
     * @memberof Story
     * @inner
     */
    imageMonoUrl: {
      type: String, // TODO: required?
    },
    /**
     * @name active
     * @desc Flag to enable/disable the story preview.
     * @type Boolean
     * @memberof Story
     * @inner
     */
    active: {
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
 * @namespace Story
 * @name Story
 * @desc Story model maps to a MongoDB collection and defines the shape of the document.
 *
 * @param schema
 * @type {Model}
 */
module.exports = mongoose.model('Story', schema);
