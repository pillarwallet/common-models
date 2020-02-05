const schemaCreator = require('../../../utilities/schemaCreator');

jest.spyOn(schemaCreator, 'createSchema');
const ReferralDevice = require('../../../lib/platform/referralDevice');

describe('ReferralDevice model', () => {
  afterAll(() => {
    schemaCreator.createSchema.mockRestore();
  });

  it('creates a model with specifed properties', () => {
    const referralDevice = new ReferralDevice({
      deviceInfo: 'device-info-checksum',
      deviceOs: 'ANDROID',
      firstInstall: true,
    });

    expect(referralDevice.toJSON()).toEqual({
      id: expect.any(String),
      deviceInfo: 'device-info-checksum',
      deviceOs: 'ANDROID',
      firstInstall: true,
    });
  });

  it('throws when required properties are missing', () => {
    const referralDevice = new ReferralDevice({});

    expect(referralDevice.validateSync).toThrow();

    const { errors } = referralDevice.validateSync();
    expect(errors.deviceInfo.message).toMatch('Path `deviceInfo` is required.');
    expect(errors.deviceOs.message).toMatch('Path `deviceOs` is required.');
    expect(errors.firstInstall.message).toMatch(
      'Path `firstInstall` is required.',
    );
  });
});
