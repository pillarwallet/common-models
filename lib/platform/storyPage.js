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
      type: mongoose.Schema.ObjectId,
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
     * @name topic
     * @desc Topic for the story page.
     * @type String
     * @memberof Story
     * @required
     * @inner
     */
    topic: {
      type: String, // TODO: Predefined topics?
      required: true,
      maxlength: 32,
    },
    /**
     * @name title
     * @desc Title of the story page.
     * @type String
     * @memberof Story
     * @required
     * @inner
     */
    title: {
      type: String,
      required: true,
      maxlength: 40,
    },
    /**
     * @name body
     * @desc Body text of the story page.
     * @type String
     * @memberof StoryPage
     * @inner
     */
    body: {
      type: String,
      required: true,
      maxlength: 140,
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
    /**
     * @name likes
     * @desc Counter for the likes of a story page.
     * @type Number
     * @memberof Story
     * @inner
     */
    likes: {
      type: Number,
      default: 0,
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
