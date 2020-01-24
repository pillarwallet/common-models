const schemaCreator = require('../../../utilities/schemaCreator');

jest.spyOn(schemaCreator, 'createSchema');
const Referral = require('../../../lib/platform/referral');

describe('Referrals model', () => {
  afterAll(() => {
    schemaCreator.createSchema.mockRestore();
  });

  it('creates a model with specifed properties', () => {
    const referral = new Referral({
      deviceInfo: 'device-info-checksum',
      firstInstall: true,
      referrerId: 'referrer-user-id',
      referrerEthAddress: 'referrer-eth-address',
      userId: 'user-id',
      ethAddress: 'user-eth-address',
    });

    expect(referral.toJSON()).toEqual({
      id: expect.any(String),
      deviceInfo: 'device-info-checksum',
      firstInstall: true,
      referrerId: 'referrer-user-id',
      referrerEthAddress: 'referrer-eth-address',
      userId: 'user-id',
      ethAddress: 'user-eth-address',
    });
  });

  it('throws when required properties are missing', () => {
    const referral = new Referral({});

    expect(referral.validateSync).toThrow();

    const { errors } = referral.validateSync();
    expect(errors.deviceInfo.message).toMatch('Path `deviceInfo` is required.');
    expect(errors.firstInstall.message).toMatch(
      'Path `firstInstall` is required.',
    );
    expect(errors.referrerId.message).toMatch('Path `referrerId` is required.');
    expect(errors.referrerEthAddress.message).toMatch(
      'Path `referrerEthAddress` is required.',
    );
  });
});
