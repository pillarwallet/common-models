const models = require('../../../index');

//TODO Model Asset is allowing to create empty object.
describe('Asset Schema Validation', () => {
  let assetObject;
  let Asset;
  let error;

  it('should create object successfully', () => {
    assetObject = {
      address: 'oneAddress',
      name: 'MyCoin',
      symbol: 'MCN',
    };
    Asset = new models.platform.Asset(assetObject);
    error = Asset.validateSync();

    expect(error).toBe(undefined);
    expect(Asset).toMatchObject(assetObject);
  });
});
