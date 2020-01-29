const schemaCreator = require('../../../utilities/schemaCreator');

jest.spyOn(schemaCreator, 'createSchema');
const ReferralInvitation = require('../../../lib/platform/referralInvitation');

describe('ReferralInvitation model', () => {
  afterAll(() => {
    schemaCreator.createSchema.mockRestore();
  });

  it('creates a model with specifed properties', () => {
    const referralInvitation = new ReferralInvitation({
      userId: 'abc-123',
      email: 'test@test',
      claimed: false,
    });

    expect(referralInvitation.toJSON()).toEqual({
      id: expect.any(String),
      userId: 'abc-123',
      email: 'test@test',
      claimed: false,
    });
  });

  it('throws when required properties are missing', () => {
    const referralInvitation = new ReferralInvitation({});

    expect(referralInvitation.validateSync).toThrow();

    const { errors } = referralInvitation.validateSync();
    expect(errors.userId.message).toMatch('Path `userId` is required.');
    expect(errors.email.message).toMatch('Path `email` is required.');
  });
});
