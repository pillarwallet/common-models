const mongoose = require('mongoose');
const schemaCreator = require('../../utilities/schemaCreator');

const schema = schemaCreator.createSchema(
  {
    /**
     * @name storyId
     * @desc ID of the story to which the page belongs.
     * @type String
     * @memberof StoryPage
     * @inner
     */
    storyId: {
      type: String,
      required: true,
    },
    /**
     * @name pageNumber
     * @desc Number of the page in a story.
     * @type Number
     * @memberof StoryPage
     * @inner
     */
    pageNumber: {
      type: Number,
      required: true,
    },
    /**
     * @name body
     * @desc Body text of the story.
     * @type String
     * @memberof StoryPage
     * @inner
     */
    body: {
      type: String,
      required: true,
      maxlength: 100, // TODO: Define max length
    },
    /**
     * @name imageUrl
     * @desc The story's uploaded image.
     * @type String
     * @memberof StoryPage
     * @inner
     */
    imageUrl: {
      type: String, // TODO: required?
    },
    /**
     * @name imageMonoUrl
     * @desc The story's uploaded mono image.
     * @type String
     * @memberof StoryPage
     * @inner
     */
    imageMonoUrl: {
      type: String, // TODO: required?
    },
    /**
     * @name layoutType
     * @desc  Predefined layout type for the story page.
     * @type String
     * @memberof StoryPage
     * @required
     * @inner
     */
    layoutType: {
      type: String,
      required: true,
    },
    /**
     * @name backgroundColor
     * @desc Background color value.
     * @type String
     * @memberof StoryPage
     * @inner
     */
    backgroundColor: {
      type: String,
    },
    /**
     * @name textContrast
     * @desc Text Contrast.
     * @type String
     * @memberof StoryPage
     * @inner
     */
    textContrast: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

/**
 * @namespace StoryPage
 * @name StoryPage
 * @desc StoryPage model maps to a MongoDB collection and defines the shape of the document.
 *
 * @param schema
 * @type {Model}
 */
module.exports = mongoose.model('StoryPage', schema);
