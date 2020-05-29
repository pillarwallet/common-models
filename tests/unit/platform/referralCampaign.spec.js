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
      walletAddress: '0x456',
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
      walletAddress: '0x456',
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
      walletAddress: '0x456',
    });

    expect(referralCampaign.toJSON()).toEqual({
      id: expect.any(String),
      name: 'pillar',
      token: 'PLR',
      contractAddress: '0x123',
      walletAddress: '0x456',
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
      walletAddress: '0x456',
      relatedCampaigns: [
        {
          name: 'test-campaign',
          amount: 10,
          walletAddress: '0x789',
        },
      ],
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

  it('creates a model with relatedCampaigns without amount and wallet address', () => {
    const campaign = {
      name: 'pillar',
      token: 'PLR',
      contractAddress: '0x123',
      walletAddress: '0x456',
      relatedCampaigns: [
        {
          name: 'test-campaign',
          walletAddress: '0x789',
        },
      ],
    };
    const referralCampaign = new ReferralCampaign(campaign);

    expect(referralCampaign.toJSON().relatedCampaigns[0]).toMatchObject({
      name: 'test-campaign',
      amount: null,
    });
  });

  it('throws an error when properties are invalid type', () => {
    const referralCampaign = new ReferralCampaign({
      name: {},
      token: 'PLR',
      contractAddress: '0x123',
      walletAddress: '0x456',
      amount: 'amount',
      relatedCampaigns: [],
    });

    const error = referralCampaign.validateSync();

    expect(referralCampaign.validateSync).toThrow();
    expect(error.errors.name.message).toEqual(
      'Cast to String failed for value "{}" at path "name"',
    );
    expect(error.errors.amount.message).toEqual(
      'Cast to Number failed for value "amount" at path "amount"',
    );
  });

  it('throws an error when relatedCampaigns properties are missing', () => {
    const referralCampaign = new ReferralCampaign({
      name: 'pillar',
      token: 'PLR',
      contractAddress: '0x123',
      walletAddress: '0x456',
      relatedCampaigns: [{}],
    });

    const error = referralCampaign.validateSync();

    expect(referralCampaign.validateSync).toThrow();
    expect(error.message).toEqual(
      'ReferralCampaign validation failed: relatedCampaigns.0.walletAddress: Path `walletAddress` is required., relatedCampaigns.0.name: Path `name` is required.',
    );
  });
});
