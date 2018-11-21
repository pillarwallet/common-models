const schemaCreator = require('../../../utilities/schemaCreator.js');

jest.spyOn(schemaCreator, 'createSchema');
const BlackListModel = require('../../../lib/platform/blackList');

describe('BlackList Schema Validation', () => {
  let blackListObject;
  let Blacklist;
  let error;

  afterAll(() => {
    schemaCreator.createSchema.mockRestore();
  });

  it('should be invalid if try to create empty object', () => {
    blackListObject = {};
    Blacklist = new BlackListModel(blackListObject);
    error = Blacklist.validateSync();

    expect(Blacklist.validateSync).toThrow();
    expect(error.errors.userId.message).toEqual('Path `userId` is required.');
    expect(error.errors.targetUserId.message).toEqual(
      'Path `targetUserId` is required.',
    );
  });

  it('should create object successfully', () => {
    blackListObject = {
      userId: 'myUserId',
      targetUserId: 'myTargetUserId',
    };
    Blacklist = new BlackListModel(blackListObject);
    error = Blacklist.validateSync();

    expect(error).toBe(undefined);
    expect(Blacklist).toMatchObject(blackListObject);
  });
});
