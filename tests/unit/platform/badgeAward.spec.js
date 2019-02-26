const { ObjectId } = require('mongoose').Types;
const BadgeAwardModel = require('../../../lib/platform/badgeAward');

describe('BadgeAward Schema Validation', () => {
  let badgeAwardObject;
  let BadgeAward;
  let error;

  it('should be invalid if try to create empty object', () => {
    badgeAwardObject = {};
    BadgeAward = new BadgeAwardModel(badgeAwardObject);
    error = BadgeAward.validateSync();

    expect(BadgeAward.validateSync).toThrow();
    expect(error.errors.badge.message).toEqual('Path `badge` is required.');
    expect(error.errors.badgeType.message).toEqual(
      'Path `badgeType` is required.',
    );
    expect(error.errors.userId.message).toEqual('Path `userId` is required.');
    expect(error.errors.walletId.message).toEqual(
      'Path `walletId` is required.',
    );
  });

  it('should create object successfully', () => {
    badgeAwardObject = {
      badge: ObjectId('5c726660d10f752679c2ef14'),
      badgeType: 'badgeType',
      userId: 'userId',
      walletId: 'walletId',
    };
    BadgeAward = new BadgeAwardModel(badgeAwardObject);
    error = BadgeAward.validateSync();

    expect(error).toBe(undefined);
    expect(BadgeAward).toMatchObject(badgeAwardObject);
  });
});
