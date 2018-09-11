const AssetModel = require('../../../lib/platform/asset');

// TODO Model Asset is allowing to create empty object.
describe('Asset Schema Validation', () => {
  let assetObject;
  let Asset;
  let error;

  it('should be invalid when "decimals" field is not Number.', () => {
    assetObject = {
      decimals: 'notNumberValue',
    };
    Asset = new AssetModel(assetObject);
    error = Asset.validateSync();

    expect(Asset.validateSync).toThrow();
    expect(error.errors.decimals.message).toEqual(
      'Cast to Number failed for value "notNumberValue" at path "decimals"',
    );
  });

  it('should be invalid when "isDefault" field is not Boolean.', () => {
    assetObject = {
      isDefault: 'WrongType',
    };
    Asset = new AssetModel(assetObject);
    error = Asset.validateSync();

    expect(Asset.validateSync).toThrow();
    expect(error.errors.isDefault.message).toEqual(
      'Cast to Boolean failed for value "WrongType" at path "isDefault"',
    );
  });

  it('should create object successfully', () => {
    assetObject = {
      address: 'oneAddress',
      name: 'MyCoin',
      symbol: 'MCN',
    };
    Asset = new AssetModel(assetObject);
    error = Asset.validateSync();

    expect(error).toBe(undefined);
    expect(Asset).toMatchObject(assetObject);
  });
});
