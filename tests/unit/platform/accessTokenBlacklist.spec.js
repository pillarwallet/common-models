const AccessTokenBlacklistModel = require('../../../lib/platform/accessTokenBlacklist');

describe('AccessTokenBlacklist Schema Validation', () => {
  let accessTokenBlacklistObject;
  let AccessTokenBlacklist;
  let error;

  it('should be invalid if try to create empty object', () => {
    accessTokenBlacklistObject = {};
    AccessTokenBlacklist = new AccessTokenBlacklistModel(
      accessTokenBlacklistObject,
    );
    error = AccessTokenBlacklist.validateSync();

    expect(AccessTokenBlacklist.validateSync).toThrow();
    expect(error.errors.accessToken.message).toEqual(
      'Path `accessToken` is required.',
    );
  });

  it('should create object successfully', () => {
    accessTokenBlacklistObject = {
      accessToken: 'test',
    };
    AccessTokenBlacklist = new AccessTokenBlacklistModel(
      accessTokenBlacklistObject,
    );
    error = AccessTokenBlacklist.validateSync();

    expect(error).toBe(undefined);
    expect(AccessTokenBlacklist).toMatchObject(accessTokenBlacklistObject);
  });
});
