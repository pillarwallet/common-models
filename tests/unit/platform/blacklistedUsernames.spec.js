const schemaCreator = require('../../../utilities/schemaCreator.js');

jest.spyOn(schemaCreator, 'createSchema');
const BlacklistedUsernamesModel = require('../../../lib/platform/blacklistedUsernames');

describe('BlacklistedUsernames Schema Validation', () => {
  let blacklistedUsernameObject;
  let blacklistedUsername;
  let error;

  const getMockFirstCall = call => call.mock.calls[0][0];

  afterAll(() => {
    schemaCreator.createSchema.mockRestore();
  });

  it('should be invalid if try to create empty object', () => {
    blacklistedUsernameObject = {};
    blacklistedUsername = new BlacklistedUsernamesModel(blacklistedUsernameObject);
    error = blacklistedUsername.validateSync();

    expect(blacklistedUsername.validateSync).toThrow();
    expect(error.errors.username.message).toEqual('Path `username` is required.');
  });

  it('creates Schema with unique properties', () => {
    const firstCall = getMockFirstCall(schemaCreator.createSchema);

    expect(firstCall.username).toHaveProperty('unique', true);
  });

  it('should create object successfully', () => {
    blacklistedUsernameObject = {
      username: 'admin',
    };
    blacklistedUsername = new BlacklistedUsernamesModel(blacklistedUsernameObject);
    error = blacklistedUsername.validateSync();

    expect(error).toBe(undefined);
    expect(blacklistedUsername).toMatchObject(blacklistedUsernameObject);
  });
});
