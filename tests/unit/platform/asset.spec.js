const schemaCreator = require('../../../utilities/schemaCreator.js');

jest.spyOn(schemaCreator, 'createSchema');
const AssetModel = require('../../../lib/platform/asset');

describe('Asset Schema Validation', () => {
  let assetObject;
  let asset;
  let error;

  afterAll(() => {
    schemaCreator.createSchema.mockRestore();
  });

  const getMockFirstCall = call => call.mock.calls[0][0];

  it('should be invalid if try to create empty object', () => {
    assetObject = {};
    asset = new AssetModel(assetObject);
    error = asset.validateSync();

    expect(asset.validateSync).toThrow();
    expect(error.errors.address.message).toEqual('Path `address` is required.');
    expect(error.errors.decimals.message).toEqual(
      'Path `decimals` is required.',
    );
    expect(error.errors.name.message).toEqual('Path `name` is required.');
    expect(error.errors.symbol.message).toEqual('Path `symbol` is required.');
  });

  it('should be invalid when "decimals" field is not Number.', () => {
    assetObject = {
      decimals: 'notNumberValue',
    };
    asset = new AssetModel(assetObject);
    error = asset.validateSync();

    expect(asset.validateSync).toThrow();
    expect(error.errors.decimals.message).toEqual(
      'Cast to Number failed for value "notNumberValue" at path "decimals"',
    );
  });

  it('should be invalid when "isDefault" field is not Boolean.', () => {
    assetObject = {
      isDefault: 'WrongType',
    };
    asset = new AssetModel(assetObject);
    error = asset.validateSync();

    expect(asset.validateSync).toThrow();
    expect(error.errors.isDefault.message).toEqual(
      'Cast to Boolean failed for value "WrongType" at path "isDefault"',
    );
  });

  it('creates Schema with unique properties', () => {
    const firstCall = getMockFirstCall(schemaCreator.createSchema);

    expect(firstCall.address).toHaveProperty('unique', true);
    expect(firstCall.name).toHaveProperty('unique', true);
    expect(firstCall.symbol).toHaveProperty('unique', true);
  });

  it('should create object successfully', () => {
    assetObject = {
      address: '0xaabbc12322321b',
      decimals: 12,
      description: 'One Simple Token that aims to be the best ever',
      name: 'BananaCoin',
      symbol: 'BCN',
      wallpaperUrl: 'http://banana.com/bg',
      iconUrl: '/image.png',
      email: 'bananacoin@jungle.com',
      telegram: 'myTelegram',
      twitter: 'myTwitter',
      totalSupply: '2000000',
      socialMedia: [
        {
          service: 'Telegram',
          username: 'myTelegram',
        },
        {
          service: 'Twitter',
          username: 'myTwitter',
        },
      ],
      website: 'http://banana.com',
      whitepaper: 'Whitepaper',
      isDefault: true,
    };
    asset = new AssetModel(assetObject);
    error = asset.validateSync();

    expect(error).toBe(undefined);
    expect(asset.toJSON()).toMatchObject({
      ...assetObject,
      id: expect.stringMatching(/.+/),
    });
    expect(asset.isPreferred).toBe(false);
  });

  it('creates an object with ICOs', () => {
    const now = new Date(Date.now());
    assetObject = {
      address: '0xaabbc12322321b',
      decimals: 12,
      description: 'One Simple Token that aims to be the best ever',
      name: 'BananaCoin',
      symbol: 'BCN',
      wallpaperUrl: 'http://banana.com/bg',
      iconUrl: '/image.png',
      email: 'bananacoin@jungle.com',
      totalSupply: '2000000',
      socialMedia: [
        {
          service: 'Telegram',
          username: 'myTelegram',
        },
        {
          service: 'Twitter',
          username: 'myTwitter',
        },
      ],
      website: 'http://banana.com',
      whitepaper: 'Whitepaper',
      isDefault: true,
      icos: [
        {
          icoStatus: 'PENDING',
          icoPhase: 'PRE_SALE',
          icoAddress: '0xabc123',
          minimumContribution: 10,
          maximumContribution: 200,
          baseCurrency: 'ETH',
          unitPrice: 0.0025,
          totalSupply: 2000000,
          totalLocked: 500000,
          supportedCurrencies: 'GBP,ETH,BTC',
          icoStartingBlockNumber: 10,
          icoEndingBlockNumber: 20,
          plannedOpeningDate: now.toISOString(),
          plannedClosingDate: now.toISOString(),
          nationalityRestriction: false,
          nivauraProjectId: 1,
          links: [
            {
              name: '2030',
              url: 'http://www.example.com/doc.pdf',
            },
          ],
        },
      ],
    };
    asset = new AssetModel(assetObject);
    error = asset.validateSync();

    expect(error).toBe(undefined);
    expect(asset.toJSON()).toMatchObject({
      ...assetObject,
      id: expect.stringMatching(/.+/),
    });
  });
});
