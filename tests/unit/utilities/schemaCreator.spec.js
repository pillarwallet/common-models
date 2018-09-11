const mongoose = require('mongoose');
const uuidv4 = require('uuid/v4');
const schemaCreator = require('../../../utilities/schemaCreator');

describe('schemaCreator module', () => {
  let schemaObject;

  afterEach(() => {
    schemaObject = {};
  });

  it('should call Schema containing schemaObject', () => {
    jest.spyOn(mongoose, 'Schema').mockReturnValue();
    schemaObject = {
      _id: {
        type: String,
        index: true,
      },
      userId: {
        type: String,
        required: true,
        unique: true,
      },
    };

    schemaCreator.createSchema(schemaObject);
    expect(mongoose.Schema).toHaveBeenCalledWith(schemaObject);
    mongoose.Schema.mockRestore();
  });

  it('should return object equals to predefined schema', () => {
    schemaObject = {
      _id: {
        type: String,
        index: true,
      },
      publicKey: {
        type: String,
        required: true,
        unique: true,
      },
    };

    const { obj } = schemaCreator.createSchema(schemaObject);
    expect(obj).toEqual(schemaObject);
  });

  it('should transform outgoing data to have "id" instead of "_id"', () => {
    schemaObject = {
      _id: {
        type: String,
        default: uuidv4,
        required: true,
      },
      publicKey: {
        type: String,
        required: true,
        unique: true,
      },
    };
    // Moongose Schema
    const mySchema = schemaCreator.createSchema(schemaObject);
    // Model from this Schema
    const Model = mongoose.model('myModel', mySchema);
    const myObj = {
      publicKey: 'myPubkey',
    };

    let myModelCollection = new Model(myObj);
    // when you try to transform the Json doc should call transform function
    myModelCollection = myModelCollection.toJSON();

    expect(myModelCollection).toHaveProperty('id');
  });
});
