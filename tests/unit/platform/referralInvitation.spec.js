const schemaCreator = require('../../../utilities/schemaCreator');

jest.spyOn(schemaCreator, 'createSchema');
const ReferralInvitation = require('../../../lib/platform/referralInvitation');

describe('ReferralInvitation model', () => {
  afterAll(() => {
    schemaCreator.createSchema.mockRestore();
  });

  it('creates a model with specified properties when phone is null', () => {
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
      partner: false,
      campaign: null,
      amount: null,
      notified: false,
    });
  });

  it('creates a model with specified properties when email is null', () => {
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
      partner: false,
      campaign: null,
      amount: null,
      notified: false,
    });
  });

  it('creates a model with specified properties when partner is true', () => {
    const referralInvitation = new ReferralInvitation({
      phone: '+999999999999',
      claimed: false,
      invitedUserId: null,
      token: 'abc',
      partner: true,
      campaign: 'abc',
      amount: 10,
    });

    expect(referralInvitation.toJSON()).toEqual({
      id: expect.any(String),
      userId: null,
      email: null,
      phone: '+999999999999',
      claimed: false,
      invitedUserId: null,
      token: 'abc',
      partner: true,
      campaign: 'abc',
      amount: 10,
      notified: false,
    });
  });

  it('creates a model with specified properties when campaign is `pillar`', () => {
    const referralInvitation = new ReferralInvitation({
      phone: '+999999999999',
      claimed: false,
      invitedUserId: null,
      token: 'abc',
      partner: true,
      campaign: 'pillar',
      amount: 10,
    });

    expect(referralInvitation.toJSON()).toEqual({
      id: expect.any(String),
      userId: null,
      email: null,
      phone: '+999999999999',
      claimed: false,
      invitedUserId: null,
      token: 'abc',
      partner: true,
      campaign: 'pillar',
      amount: 10,
      notified: false,
    });
  });

  it('creates a model with specified properties when notified is true', () => {
    const referralInvitation = new ReferralInvitation({
      phone: '+999999999999',
      claimed: false,
      invitedUserId: null,
      token: 'abc',
      partner: true,
      campaign: 'pillar',
      amount: 10,
      notified: true,
    });

    expect(referralInvitation.toJSON()).toEqual({
      id: expect.any(String),
      userId: null,
      email: null,
      phone: '+999999999999',
      claimed: false,
      invitedUserId: null,
      token: 'abc',
      partner: true,
      campaign: 'pillar',
      amount: 10,
      notified: true,
    });
  });

  it('throws when required properties are missing', () => {
    const referralInvitation = new ReferralInvitation({});

    expect(referralInvitation.validateSync).toThrow();

    const { errors } = referralInvitation.validateSync();
    expect(errors.token.message).toMatch('Path `token` is required.');
  });
});
