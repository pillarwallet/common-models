const schemaCreator = require('../../../utilities/schemaCreator.js');

jest.spyOn(schemaCreator, 'createSchema');
const IpfsStorageModel = require('../../../lib/platform/ipfsStorage');

describe('IpfsStorage Schema Validation', () => {
  let ipfsStorageObject;
  let ipfsStorage;
  let error;

  afterAll(() => {
    schemaCreator.createSchema.mockRestore();
  });

  const getMockFirstCall = call => call.mock.calls[0][0];

  it('should be invalid if try to create empty object', () => {
    ipfsStorageObject = {};
    ipfsStorage = new IpfsStorageModel(ipfsStorageObject);
    error = ipfsStorage.validateSync();

    expect(ipfsStorage.validateSync).toThrow();
    expect(error.errors.walletId.message).toEqual(
      'Path `walletId` is required.',
    );
    expect(error.errors.storageId.message).toEqual(
      'Path `storageId` is required.',
    );
    expect(error.errors.secretKey.message).toEqual(
      'Path `secretKey` is required.',
    );
  });

  it('creates Schema with unique properties', () => {
    const firstCall = getMockFirstCall(schemaCreator.createSchema);

    expect(firstCall.storageId).toHaveProperty('unique', true);
    expect(firstCall.secretKey).toHaveProperty('unique', true);
  });

  it('should create object successfully', () => {
    ipfsStorageObject = {
      walletId: '123',
      storageId: 'storage-id',
      secretKey: 'secret-key',
    };
    ipfsStorage = new IpfsStorageModel(ipfsStorageObject);
    error = ipfsStorage.validateSync();

    expect(error).toBe(undefined);
  });
});
