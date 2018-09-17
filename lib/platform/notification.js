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
     * @name type
     * @desc The type of one notification.
     * @type String
     * @memberof Notification
     * @required
     * @inner
     */
    type: {
      type: String,
      required: true,
    },
    /**
     * @name meta
     * @desc Additional important information about one notification.
     * @type Object
     * @memberof Notification
     * @required
     * @inner
     */
    meta: {
      type: Object,
      required: true,
    },
    /**
     * @name payload
     * @desc The content of one notification.
     * @type Object
     * @memberof Notification
     * @required
     * @inner
     */
    payload: {
      type: Object,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

/**
 * @namespace Notification
 * @name Notification
 * @desc Notification model maps to a MongoDB collection and defines the shape of the document.
 *
 * @param schema
 * @type {Model}
 */
module.exports = mongoose.model('Notification', schema);
