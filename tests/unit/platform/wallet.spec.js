const Models = require('../../../index');

// TODO: Check if we need to test unique index fields here.
describe('Wallet Schema Validation', () => {
  let walletObject = {};
  let Wallet;
  let error;

  it('should be invalid if try to create empty object', async () => {
    Wallet = await new Models.Platform.Wallet(walletObject);

    expect(Wallet.validateSync).toThrow();
  });

  it('should be invalid if try to create object without userId field', async () => {
    walletObject = {
      publicKey: 'myKey',
      ethAddress: 'myEthAddress',
      fcmToken: 'fcmId',
    };
    Wallet = await new Models.Platform.Wallet(walletObject);
    error = Wallet.validateSync();

    expect(Wallet.validateSync).toThrow();
    expect(error.errors.userId.message).toEqual('Path `userId` is required.');
  });

  it('should be invalid if try to create object without publicKey field', async () => {
    walletObject = {
      userId: 'myUserId',
      ethAddress: 'myEthAddress',
      fcmToken: 'fcmId',
    };
    Wallet = await new Models.Platform.Wallet(walletObject);
    error = Wallet.validateSync();

    expect(Wallet.validateSync).toThrow();
    expect(error.errors.publicKey.message).toEqual(
      'Path `publicKey` is required.',
    );
  });

  it('should be invalid if try to create object without ethAddress field', async () => {
    walletObject = {
      userId: 'myUserId',
      publicKey: 'myKey',
      fcmToken: 'fcmId',
    };
    Wallet = await new Models.Platform.Wallet(walletObject);
    error = Wallet.validateSync();

    expect(Wallet.validateSync).toThrow();
    expect(error.errors.ethAddress.message).toEqual(
      'Path `ethAddress` is required.',
    );
  });

  it('should be invalid if try to create object without fcmToken field', async () => {
    walletObject = {
      userId: 'myUserId',
      publicKey: 'myKey',
      ethAddress: 'myEthAddress',
    };
    Wallet = await new Models.Platform.Wallet(walletObject);
    error = Wallet.validateSync();

    expect(Wallet.validateSync).toThrow();
    expect(error.errors.fcmToken.message).toEqual(
      'Path `fcmToken` is required.',
    );
  });

  it('should be invalid when bcxRegistered field is not Boolean.', async () => {
    walletObject = {
      userId: 'myUserId',
      publicKey: 'myKey',
      ethAddress: 'myEthAddress',
      fcmToken: 'fcmId',
      bcxRegistered: 'WrongType',
    };
    Wallet = await new Models.Platform.Wallet(walletObject);
    error = Wallet.validateSync();

    expect(Wallet.validateSync).toThrow();
    expect(error.errors.bcxRegistered.message).toEqual(
      'Cast to Boolean failed for value "WrongType" at path "bcxRegistered"',
    );
  });

  it('should create object successfully', async () => {
    walletObject = {
      userId: 'myUserId',
      publicKey: 'myKey',
      ethAddress: 'myEthAddress',
      fcmToken: 'fcmId',
    };
    Wallet = await new Models.Platform.Wallet(walletObject);
    error = Wallet.validateSync();

    expect(error).toBe(undefined);
    expect(Wallet).toMatchObject(walletObject);
  });
});
