const mongoose = require('mongoose');

/**
 * @name createSchema
 * @description Method to handle unexpected data when creating mongoose schema
 *
 * @param params
 * @returns Schema
 */
const createSchema = (...params) => {
  const schema = new mongoose.Schema(...params);

  /**
   * Error handler for this schema
   */
  schema.post('save', (error, doc, next) => {
    next(error);
  });

  /**
   * Transform outgoing data when being accessed from code
   */
  schema.set('toJSON', {
    transform: (doc, ret) => {
      const document = ret;

      document.id = ret._id; // eslint-disable-line
      delete document._id; // eslint-disable-line
    },
  });

  return schema;
};

module.exports = {
  createSchema,
};
