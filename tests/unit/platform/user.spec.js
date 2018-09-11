const models = require('../../../index');

describe('User Schema Validation', () => {
  let userObject = {};
  let User;
  let error;

  it('should be invalid if try to create empty object', async () => {
    User = await new models.platform.User(userObject);

    expect(User.validateSync).toThrow();
  });

  it('should be invalid if try to create object without username field', () => {
    userObject = {};
    User = new models.platform.User(userObject);
    error = User.validateSync();

    expect(User.validateSync).toThrow();
    expect(error.errors.username.message).toEqual(
      'Path `username` is required.',
    );
  });

  it('should be invalid when a given Boolean field is not Boolean.', () => {
    userObject = {
      username: 'myUserName',
      isEmailVerified: 'notValidData',
    };
    User = new models.platform.User(userObject);
    error = User.validateSync();

    expect(User.validateSync).toThrow();
    expect(error.errors.isEmailVerified.message).toEqual(
      'Cast to Boolean failed for value "notValidData" at path "isEmailVerified"',
    );
  });

  it('should create object successfully', () => {
    userObject = {
      username: 'myUserName',
    };
    User = new models.platform.User(userObject);
    error = User.validateSync();

    expect(error).toBe(undefined);
    expect(User).toMatchObject(userObject);
  });
});
