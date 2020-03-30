const ConnectionModel = require('../../../lib/platform/connection');

describe('Connection Schema Validation', () => {
  let connectionObject;
  let Connection;
  let error;

  it('should be invalid if try to create empty object', () => {
    connectionObject = {};
    Connection = new ConnectionModel(connectionObject);
    error = Connection.validateSync();

    expect(Connection.validateSync).toThrow();
    expect(error.errors.userId.message).toEqual('Path `userId` is required.');
    expect(error.errors.accessKey.message).toEqual(
      'Path `accessKey` is required.',
    );
    expect(error.errors.status.message).toEqual('Path `status` is required.');
  });

  it('should be invalid to create random version', () => {
    connectionObject = {
      userId: 'myUserId',
      accessKey: 'myKey',
      status: 'myStatus',
      sourceIdentityKey: 'sourceIdentityKey',
      targetIdentityKey: 'targetIdentityKey',
      targetUserId: null,
      version: 'v4',
    };

    Connection = new ConnectionModel(connectionObject);
    error = Connection.validateSync();

    expect(Connection.validateSync).toThrow();
    expect(error.errors.version.message).toEqual(
      '`v4` is not a valid enum value for path `version`.',
    );
  });

  it('should be invalid to create random direction', () => {
    connectionObject = {
      userId: 'myUserId',
      accessKey: 'myKey',
      status: 'myStatus',
      sourceIdentityKey: 'sourceIdentityKey',
      targetIdentityKey: 'targetIdentityKey',
      targetUserId: null,
      direction: 'delivered',
      version: 'v3',
    };

    Connection = new ConnectionModel(connectionObject);
    error = Connection.validateSync();

    expect(Connection.validateSync).toThrow();
    expect(error.errors.direction.message).toEqual(
      '`delivered` is not a valid enum value for path `direction`.',
    );
  });

  it('should create object successfully', () => {
    connectionObject = {
      userId: 'myUserId',
      accessKey: 'myKey',
      status: 'myStatus',
      sourceIdentityKey: 'sourceIdentityKey',
      targetIdentityKey: 'targetIdentityKey',
      targetUserId: 'target-user-id',
      direction: 'sent',
      version: 'v2',
    };
    Connection = new ConnectionModel(connectionObject);
    error = Connection.validateSync();

    expect(error).toBe(undefined);
    expect(Connection).toMatchObject(connectionObject);
  });
});
