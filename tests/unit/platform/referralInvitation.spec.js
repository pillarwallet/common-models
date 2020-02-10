const schemaCreator = require('../../../utilities/schemaCreator');

jest.spyOn(schemaCreator, 'createSchema');
const ReferralInvitation = require('../../../lib/platform/referralInvitation');

describe('ReferralInvitation model', () => {
  afterAll(() => {
    schemaCreator.createSchema.mockRestore();
  });

  it('creates a model with specifed properties when phone is null', () => {
    const referralInvitation = new ReferralInvitation({
      userId: 'abc-123',
      email: 'test@test',
      claimed: false,
      invitedUserId: null,
      token: 'abc',
    });

    expect(referralInvitation.toJSON()).toEqual({
      id: expect.any(String),
      userId: 'abc-123',
      email: 'test@test',
      phone: null,
      claimed: false,
      invitedUserId: null,
      token: 'abc',
    });
  });

  it('creates a model with specifed properties when email is null', () => {
    const referralInvitation = new ReferralInvitation({
      userId: 'abc-123',
      phone: '+999999999999',
      claimed: false,
      invitedUserId: null,
      token: 'abc',
    });

    expect(referralInvitation.toJSON()).toEqual({
      id: expect.any(String),
      userId: 'abc-123',
      email: null,
      phone: '+999999999999',
      claimed: false,
      invitedUserId: null,
      token: 'abc',
    });
  });

  it('throws when required properties are missing', () => {
    const referralInvitation = new ReferralInvitation({});

    expect(referralInvitation.validateSync).toThrow();

    const { errors } = referralInvitation.validateSync();
    expect(errors.userId.message).toMatch('Path `userId` is required.');
    expect(errors.token.message).toMatch('Path `token` is required.');
  });
});
