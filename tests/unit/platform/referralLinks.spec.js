const schemaCreator = require('../../../utilities/schemaCreator.js');

jest.spyOn(schemaCreator, 'createSchema');
const ReferralLinksModel = require('../../../lib/platform/referralLinks');

describe('ReferralLinks Schema Validation', () => {
  let referralLinkObject;
  let ReferralLink;
  let error;

  afterAll(() => {
    schemaCreator.createSchema.mockRestore();
  });

  it('should be invalid if try to create empty object', () => {
    referralLinkObject = {};
    ReferralLink = new ReferralLinksModel(referralLinkObject);
    error = ReferralLink.validateSync();

    expect(ReferralLink.validateSync).toThrow();
    expect(error.errors.userId.message).toEqual('Path `userId` is required.');
    expect(error.errors.link.message).toEqual('Path `link` is required.');
    expect(error.errors.status.message).toEqual('Path `status` is required.');
  });

  it('should create object successfully', () => {
    referralLinkObject = {
      userId: 'myUserId',
      status: 'pending',
      link: 'generatedLink',
    };
    ReferralLink = new ReferralLinksModel(referralLinkObject);
    error = ReferralLink.validateSync();

    expect(error).toBe(undefined);
    expect(ReferralLink).toMatchObject(referralLinkObject);
  });
});
