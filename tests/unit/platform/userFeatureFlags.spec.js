const schemaCreator = require('../../../utilities/schemaCreator.js');

jest.spyOn(schemaCreator, 'createSchema');
const UserFeatureFlagsModel = require('../../../lib/platform/userFeatureFlags');

describe('User Feature Flags Validation', () => {
  let userFeaturesObject;
  let userFeatureFlags;
  let error;

  const getMockFirstCall = call => call.mock.calls[0][0];

  afterAll(() => {
    schemaCreator.createSchema.mockRestore();
  });

  it('should be invalid if try to create empty object', () => {
    userFeaturesObject = {};
    userFeatureFlags = new UserFeatureFlagsModel(userFeaturesObject);
    error = userFeatureFlags.validateSync();

    expect(userFeatureFlags.validateSync).toThrow();
    expect(error.errors.userId.message).toEqual('Path `userId` is required.');
  });

  it('creates Schema with unique properties', () => {
    const firstCall = getMockFirstCall(schemaCreator.createSchema);

    expect(firstCall.userId).toHaveProperty('unique', true);
  });

  it('should be invalid when field is not Boolean.', () => {
    userFeaturesObject = {
      userId: 'myUserId',
      smartWallet: 'WrongType',
      btc: 'WrongType',
    };
    userFeatureFlags = new UserFeatureFlagsModel(userFeaturesObject);
    error = userFeatureFlags.validateSync();

    expect(userFeatureFlags.validateSync).toThrow();
    expect(error.errors.smartWallet.message).toEqual(
      'Cast to Boolean failed for value "WrongType" at path "smartWallet"',
    );
    expect(error.errors.btc.message).toEqual(
      'Cast to Boolean failed for value "WrongType" at path "btc"',
    );
  });

  it('should create object successfully', () => {
    userFeaturesObject = {
      userId: 'myUserId',
      smartWallet: false,
      btc: true,
    };
    userFeatureFlags = new UserFeatureFlagsModel(userFeaturesObject);
    error = userFeatureFlags.validateSync();

    expect(error).toBe(undefined);
    expect(userFeatureFlags).toMatchObject({});
  });
});
