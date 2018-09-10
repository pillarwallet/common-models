const Models = require('../../../index');

// TODO: Check if we need to test unique index fields here.
describe('User Schema Validation', () => {
  let userObject = {};
  let User;
  let error;

  it('should be invalid if try to create empty object', async () => {
    User = await new Models.Platform.User(userObject);

    expect(User.validateSync).toThrow();
  });


});
