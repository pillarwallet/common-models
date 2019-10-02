const BadgeModel = require('../../../lib/platform/badge');

describe('Badge Schema Validation', () => {
  let badgeObject;
  let Badge;
  let error;

  it('should be invalid if try to create empty object', () => {
    badgeObject = {};
    Badge = new BadgeModel(badgeObject);
    error = Badge.validateSync();

    expect(Badge.validateSync).toThrow();
    expect(error.errors.name.message).toEqual('Path `name` is required.');
    expect(error.errors.type.message).toEqual('Path `type` is required.');
  });

  it('should create object successfully', () => {
    badgeObject = {
      name: 'name',
      type: 'type',
    };
    Badge = new BadgeModel(badgeObject);
    error = Badge.validateSync();

    expect(error).toBe(undefined);
    expect(Badge).toMatchObject(badgeObject);
  });
});
