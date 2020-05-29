const schemaCreator = require('../../../utilities/schemaCreator');

jest.spyOn(schemaCreator, 'createSchema');
const ReferralCampaign = require('../../../lib/platform/referralCampaign');

describe('ReferralCampaign model', () => {
  afterAll(() => {
    schemaCreator.createSchema.mockRestore();
  });

  it('creates a model with all properties', () => {
    const referralCampaign = new ReferralCampaign({
      name: 'pillar',
      token: 'PLR',
      contractAddress: '0x123',
      wallet: {
        address: '0x456',
        path: 'm/0/0/0',
      },
      amount: 10,
      logoUrl: 'image.jpg',
      badges: true,
      isActive: true,
      relatedCampaigns: [],
    });

    expect(referralCampaign.toJSON()).toEqual({
      id: expect.any(String),
      name: 'pillar',
      token: 'PLR',
      contractAddress: '0x123',
      wallet: {
        address: '0x456',
        path: 'm/0/0/0',
      },
      amount: 10,
      logoUrl: 'image.jpg',
      badges: true,
      isActive: true,
      relatedCampaigns: [],
    });
  });

  it('creates a model with default properties', () => {
    const referralCampaign = new ReferralCampaign({
      name: 'pillar',
      token: 'PLR',
      contractAddress: '0x123',
      wallet: {
        address: '0x456',
        path: 'm/0/0/0',
      },
    });

    expect(referralCampaign.toJSON()).toEqual({
      id: expect.any(String),
      name: 'pillar',
      token: 'PLR',
      contractAddress: '0x123',
      wallet: {
        address: '0x456',
        path: 'm/0/0/0',
      },
      amount: null,
      logoUrl: null,
      badges: false,
      isActive: false,
      relatedCampaigns: [],
    });
  });

  it('creates a model with relatedCampaigns not empty', () => {
    const campaign = {
      name: 'pillar',
      token: 'PLR',
      contractAddress: '0x123',
      wallet: {
        address: '0x456',
        path: 'm/0/0/0',
      },
      relatedCampaigns: ['test-campaign'],
    };
    const referralCampaign = new ReferralCampaign(campaign);

    expect(referralCampaign.toJSON()).toMatchObject({
      ...campaign,
      id: expect.any(String),
      amount: null,
      logoUrl: null,
      badges: false,
      isActive: false,
    });
  });

  it('throws an error when properties are invalid type', () => {
    const referralCampaign = new ReferralCampaign({
      name: {},
      token: 'PLR',
      contractAddress: '0x123',
      wallet: {
        address: '0x456',
        path: 'm/0/0/0',
      },
      amount: 'amount',
      relatedCampaigns: {},
    });

    const error = referralCampaign.validateSync();

    expect(referralCampaign.validateSync).toThrow();
    expect(error.errors.name.message).toEqual(
      'Cast to String failed for value "{}" at path "name"',
    );
    expect(error.errors.amount.message).toEqual(
      'Cast to Number failed for value "amount" at path "amount"',
    );
    expect(error.errors.relatedCampaigns.message).toEqual(
      'Cast to Array failed for value "{}" at path "relatedCampaigns"',
    );
  });

  it('throws an error when relatedCampaigns elements are invalid type', () => {
    const referralCampaign = new ReferralCampaign({
      name: 'pillar',
      token: 'PLR',
      contractAddress: '0x123',
      wallet: {
        address: '0x456',
        path: 'm/0/0/0',
      },
      relatedCampaigns: [{}],
    });

    const error = referralCampaign.validateSync();

    expect(referralCampaign.validateSync).toThrow();
    expect(error.message).toEqual(
      'ReferralCampaign validation failed: relatedCampaigns: Cast to Array failed for value "[ {} ]" at path "relatedCampaigns"',
    );
  });

  it('throws an error when wallet properties are missing', () => {
    const referralCampaign = new ReferralCampaign({
      name: 'pillar',
      token: 'PLR',
      contractAddress: '0x123',
      wallet: {},
    });

    const error = referralCampaign.validateSync();

    expect(referralCampaign.validateSync).toThrow();
    expect(error.message).toEqual(
      'ReferralCampaign validation failed: wallet.path: Path `wallet.path` is required., wallet.address: Path `wallet.address` is required.',
    );
  });
});
