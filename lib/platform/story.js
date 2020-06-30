const mongoose = require('mongoose');
const schemaCreator = require('../../utilities/schemaCreator');

const schema = schemaCreator.createSchema(
  {
    /**
     * @name topic
     * @desc Topic for the story.
     * @type String
     * @memberof Story
     * @required
     * @inner
     */
    topic: {
      type: String, // TODO: Predefined topics?
      required: true,
    },
    /**
     * @name title
     * @desc Title of the story.
     * @type String
     * @memberof Story
     * @required
     * @inner
     */
    title: {
      type: String,
      required: true,
      maxlength: 30, // TODO: Define max length
    },
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
      maxlength: 15, // TODO: Define max length
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
     * @name likes
     * @desc Counter for the likes of a story.
     * @type Number
     * @memberof Story
     * @inner
     */
    likes: {
      type: Number,
      default: 0,
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
