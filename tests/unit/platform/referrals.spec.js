const schemaCreator = require('../../../utilities/schemaCreator');

jest.spyOn(schemaCreator, 'createSchema');
const Referrals = require('../../../lib/platform/referrals');

describe('Referrals model', () => {
  afterAll(() => {
    schemaCreator.createSchema.mockRestore();
  });

  it('creates a model with specifed properties', () => {
    const referrals = new Referrals({
      status: 'Success',
      userAddress: 'testAddress',
      amount: 25,
      notes: 'testNotes',
    });

    expect(referrals.toJSON()).toEqual({
      id: expect.any(String),
      status: 'Success',
      userAddress: 'testAddress',
      amount: 25,
      notes: 'testNotes',
    });
  });

  it('throws when required properties are missing', () => {
    const referrals = new Referrals({});

    expect(referrals.validateSync).toThrow();

    const { errors } = referrals.validateSync();
    expect(errors.status.message).toMatch('Path `status` is required.');
    expect(errors.userAddress.message).toMatch(
      'Path `userAddress` is required.',
    );
    expect(errors.amount.message).toMatch('Path `amount` is required.');
  });
});
