const schemaCreator = require('../../../utilities/schemaCreator');

jest.spyOn(schemaCreator, 'createSchema');
const ReferralTransaction = require('../../../lib/platform/referralTransaction');

describe('Referrals model', () => {
  afterAll(() => {
    schemaCreator.createSchema.mockRestore();
  });

  it('creates a model with specifed properties', () => {
    const referrals = new ReferralTransaction({
      status: 'Success',
      ethAddress: 'testAddress',
      txHash: 'testHash',
      amount: 25,
      asset: 'PLR',
    });

    expect(referrals.toJSON()).toEqual({
      id: expect.any(String),
      status: 'Success',
      ethAddress: 'testAddress',
      txHash: 'testHash',
      amount: 25,
      asset: 'PLR',
    });
  });

  it('throws when required properties are missing', () => {
    const referrals = new ReferralTransaction({});

    expect(referrals.validateSync).toThrow();

    const { errors } = referrals.validateSync();
    expect(errors.status.message).toMatch('Path `status` is required.');
    expect(errors.txHash.message).toMatch('Path `txHash` is required.');
    expect(errors.ethAddress.message).toMatch('Path `ethAddress` is required.');
    expect(errors.amount.message).toMatch('Path `amount` is required.');
    expect(errors.asset.message).toMatch('Path `asset` is required.');
  });
});
