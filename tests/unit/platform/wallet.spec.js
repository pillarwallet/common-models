const schemaCreator = require('../../../utilities/schemaCreator.js');

jest.spyOn(schemaCreator, 'createSchema');
const WalletModel = require('../../../lib/platform/wallet');

describe('Wallet Schema Validation', () => {
  let walletObject;
  let Wallet;
  let error;
  // function to get mocker first call
  const getMockFirstCall = call => call.mock.calls[0][0];

  afterAll(() => {
    schemaCreator.createSchema.mockRestore();
  });

  it('should be invalid if try to create empty object', () => {
    walletObject = {};
    Wallet = new WalletModel(walletObject);

    expect(Wallet.validateSync).toThrow();
  });

  it('should be invalid if try to create object without userId field', () => {
    walletObject = {
      publicKey: 'myKey',
      ethAddress: 'myEthAddress',
      fcmToken: 'fcmId',
    };
    Wallet = new WalletModel(walletObject);
    error = Wallet.validateSync();

    expect(Wallet.validateSync).toThrow();
    expect(error.errors.userId.message).toEqual('Path `userId` is required.');
  });

  it('should be invalid if try to create object without publicKey field', () => {
    walletObject = {
      userId: 'myUserId',
      ethAddress: 'myEthAddress',
      fcmToken: 'fcmId',
    };
    Wallet = new WalletModel(walletObject);
    error = Wallet.validateSync();

    expect(Wallet.validateSync).toThrow();
    expect(error.errors.publicKey.message).toEqual(
      'Path `publicKey` is required.',
    );
  });

  it('should be invalid if try to create object without ethAddress field', () => {
    walletObject = {
      userId: 'myUserId',
      publicKey: 'myKey',
      fcmToken: 'fcmId',
    };
    Wallet = new WalletModel(walletObject);
    error = Wallet.validateSync();

    expect(Wallet.validateSync).toThrow();
    expect(error.errors.ethAddress.message).toEqual(
      'Path `ethAddress` is required.',
    );
  });

  it('should be invalid if try to create object without fcmToken field', () => {
    walletObject = {
      userId: 'myUserId',
      publicKey: 'myKey',
      ethAddress: 'myEthAddress',
    };
    Wallet = new WalletModel(walletObject);
    error = Wallet.validateSync();

    expect(Wallet.validateSync).toThrow();
    expect(error.errors.fcmToken.message).toEqual(
      'Path `fcmToken` is required.',
    );
  });

  it('should be invalid when bcxRegistered field is not Boolean.', () => {
    walletObject = {
      userId: 'myUserId',
      publicKey: 'myKey',
      ethAddress: 'myEthAddress',
      fcmToken: 'fcmId',
      bcxRegistered: 'WrongType',
    };
    Wallet = new WalletModel(walletObject);
    error = Wallet.validateSync();

    expect(Wallet.validateSync).toThrow();
    expect(error.errors.bcxRegistered.message).toEqual(
      'Cast to Boolean failed for value "WrongType" at path "bcxRegistered"',
    );
  });

  it('creates Schema with unique properties', () => {
    const firstCall = getMockFirstCall(schemaCreator.createSchema);

    expect(firstCall.publicKey).toHaveProperty('unique', true);
    expect(firstCall.userId).toHaveProperty('unique', true);
    expect(firstCall.ethAddress).toHaveProperty('unique', true);
  });

  it('should create object successfully', () => {
    walletObject = {
      userId: 'myUserId',
      publicKey: 'myKey',
      ethAddress: 'myEthAddress',
      fcmToken: 'fcmId',
    };
    Wallet = new WalletModel(walletObject);
    error = Wallet.validateSync();

    expect(error).toBe(undefined);
    expect(Wallet).toMatchObject(walletObject);
  });
});
