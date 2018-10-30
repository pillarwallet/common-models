const schemaCreator = require('../../../utilities/schemaCreator');

jest.spyOn(schemaCreator, 'createSchema');
const Register = require('../../../lib/platform/register');

describe('Register model', () => {
  afterAll(() => {
    schemaCreator.createSchema.mockRestore();
  });

  it('creates a model with specifed properties', () => {
    const date = new Date();
    const register = new Register({
      authorizationCode: 'auth code',
      foo: 'bar',
      nonce: 'nonce',
      nonceExpiry: date.toISOString(),
      publicKey: 'public key',
      uuid: 'uuid',
      walletId: 'wallet ID',
    });

    expect(register.toJSON()).toEqual({
      authorizationCode: 'auth code',
      id: expect.any(String),
      nonce: 'nonce',
      nonceExpiry: date.toISOString(),
      publicKey: 'public key',
      uuid: 'uuid',
      walletId: 'wallet ID',
    });
  });

  it('sets unique properties', () => {
    const schemaInstantiation = schemaCreator.createSchema.mock.calls[0][0];
    expect(schemaInstantiation.publicKey).toHaveProperty('unique', true);
    expect(schemaInstantiation.uuid).toHaveProperty('unique', true);
  });

  it('throws when required properties are missing', () => {
    const register = new Register({});

    expect(register.validateSync).toThrow();

    const { errors } = register.validateSync();
    expect(errors.nonce.message).toMatch('Path `nonce` is required.');
    expect(errors.nonceExpiry.message).toMatch(
      'Path `nonceExpiry` is required.',
    );
    expect(errors.publicKey.message).toMatch('Path `publicKey` is required.');
    expect(errors.uuid.message).toMatch('Path `uuid` is required.');
  });
});
