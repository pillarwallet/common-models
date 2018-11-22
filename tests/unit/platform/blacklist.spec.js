const schemaCreator = require('../../../utilities/schemaCreator.js');

jest.spyOn(schemaCreator, 'createSchema');
const BlacklistModel = require('../../../lib/platform/blacklist');

describe('Blacklist Schema Validation', () => {
  let blacklistObject;
  let Blacklist;
  let error;

  afterAll(() => {
    schemaCreator.createSchema.mockRestore();
  });

  it('should be invalid if try to create empty object', () => {
    blacklistObject = {};
    Blacklist = new BlacklistModel(blacklistObject);
    error = Blacklist.validateSync();

    expect(Blacklist.validateSync).toThrow();
    expect(error.errors.userId.message).toEqual('Path `userId` is required.');
    expect(error.errors.targetUserId.message).toEqual(
      'Path `targetUserId` is required.',
    );
  });

  it('should create object successfully', () => {
    blacklistObject = {
      userId: 'myUserId',
      targetUserId: 'myTargetUserId',
    };
    Blacklist = new BlacklistModel(blacklistObject);
    error = Blacklist.validateSync();

    expect(error).toBe(undefined);
    expect(Blacklist).toMatchObject(blacklistObject);
  });
});
