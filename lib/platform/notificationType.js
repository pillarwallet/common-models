const mongoose = require('mongoose');
const uuidv4 = require('uuid/v4');
const schemaCreator = require('../../utilities/schemaCreator.js');

const schema = schemaCreator.createSchema(
  {
    _id: {
      type: String,
      default: uuidv4,
    },
    /**
     * @name type
     * @desc The type of one notification.
     * @type String
     * @memberof NotificationType
     * @required
     * @unique
     * @inner
     */
    type: {
      type: String,
      unique: true,
      required: true,
    },
    /**
     * @name name
     * @desc The name of one notification.
     * @type String
     * @memberof NotificationType
     * @required
     * @inner
     */
    name: {
      type: String,
      required: true,
    },
    /**
     * @name actions
     * @desc Actions related with one notification.
     * @type Object
     * @memberof NotificationType
     * @required
     * @inner
     */
    actions: Object,
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

/**
 * @namespace NotificationType
 * @name NotificationType
 * @desc NotificationType model maps to a MongoDB collection and defines the shape of the document.
 *
 * @param schema
 * @type {Model}
 */
module.exports = mongoose.model('NotificationType', schema);
