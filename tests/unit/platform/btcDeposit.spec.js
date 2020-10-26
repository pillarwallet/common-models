const schemaCreator = require('../../../utilities/schemaCreator');

jest.spyOn(schemaCreator, 'createSchema');
const BtcDeposit = require('../../../lib/platform/btcDeposit');

describe('BtcDeposit model', () => {
  afterAll(() => {
    schemaCreator.createSchema.mockRestore();
  });

  it('creates a model with all properties', () => {
    const depositObject = {
      status: 'awaiting',
      nonce: '123',
      txHash: '0x123',
      method: 'mint',
      amount: 1,
      sender: '0x123',
      destination: '0x123',
      gateway: 'abc',
      nHash: '0x123',
      signature: '0x123',
      vOut: 1,
    };
    const deposit = new BtcDeposit(depositObject);

    const error = deposit.validateSync();

    expect(error).toBe(undefined);
    expect(deposit).toMatchObject(depositObject);
  });

  it('creates a model with default properties', () => {
    const depositObject = {
      status: 'awaiting',
      nonce: '123',
      method: 'mint',
      amount: 1,
      sender: '0x123',
      destination: '0x123',
    };
    const deposit = new BtcDeposit(depositObject);

    const error = deposit.validateSync();

    expect(error).toBe(undefined);
    expect(deposit).toMatchObject({
      status: 'awaiting',
      nonce: '123',
      method: 'mint',
      amount: 1,
      sender: '0x123',
      destination: '0x123',
      txHash: null,
      nHash: null,
      signature: null,
      vOut: null,
    });
  });

  it('throws when required properties are missing', () => {
    const depositObject = {};
    const deposit = new BtcDeposit(depositObject);

    expect(deposit.validateSync).toThrow();

    const { errors } = deposit.validateSync();
    expect(errors.destination.message).toMatch(
      'Path `destination` is required.',
    );
    expect(errors.sender.message).toMatch('Path `sender` is required.');
    expect(errors.amount.message).toMatch('Path `amount` is required.');
    expect(errors.method.message).toMatch('Path `method` is required.');
    expect(errors.nonce.message).toMatch('Path `nonce` is required.');
    expect(errors.status.message).toMatch('Path `status` is required.');
  });
});
