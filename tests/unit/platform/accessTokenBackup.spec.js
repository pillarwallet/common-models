const AccessTokenBackupModel = require('../../../lib/platform/accessTokenBackup');

describe('AccessTokenBackup Schema Validation', () => {
  let accessTokenBackupObject;
  let AccessTokenBackup;
  let error;

  it('should be invalid if try to create empty object', () => {
    accessTokenBackupObject = {};
    AccessTokenBackup = new AccessTokenBackupModel(accessTokenBackupObject);
    error = AccessTokenBackup.validateSync();

    expect(AccessTokenBackup.validateSync).toThrow();
    expect(error.errors.userId.message).toEqual('Path `userId` is required.');
    expect(error.errors.contactId.message).toEqual(
      'Path `contactId` is required.',
    );
    expect(error.errors.accessKey.message).toEqual(
      'Path `accessKey` is required.',
    );
  });

  it('should create object successfully', () => {
    accessTokenBackupObject = {
      userId: 'myUserId',
      contactId: 'contactId',
      accessKey: 'myKey',
    };
    AccessTokenBackup = new AccessTokenBackupModel(accessTokenBackupObject);
    error = AccessTokenBackup.validateSync();

    expect(error).toBe(undefined);
    expect(AccessTokenBackup).toMatchObject(accessTokenBackupObject);
  });
});
