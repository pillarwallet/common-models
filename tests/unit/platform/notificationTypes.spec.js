const schemaCreator = require('../../../utilities/schemaCreator.js');

jest.spyOn(schemaCreator, 'createSchema');
const NotificationTypesModel = require('../../../lib/platform/notificationType');

describe('Notification Type Schema Validation', () => {
  let notificationTypeObject;
  let notificationType;
  let error;

  const getMockFirstCall = call => call.mock.calls[0][0];

  it('should be invalid if try to create empty object', () => {
    notificationTypeObject = {};
    notificationType = new NotificationTypesModel(notificationTypeObject);
    error = notificationType.validateSync();

    expect(notificationType.validateSync).toThrow();
    expect(error.errors.type.message).toEqual('Path `type` is required.');
    expect(error.errors.name.message).toEqual('Path `name` is required.');
  });

  it('creates Schema with unique properties', () => {
    const firstCall = getMockFirstCall(schemaCreator.createSchema);

    expect(firstCall.type).toHaveProperty('unique', true);
  });

  it('should be invalid when field is not Boolean.', () => {
    notificationTypeObject = {
      type: 'oneType',
      name: 'oneName',
      actions: {},
    };
    notificationType = new NotificationTypesModel(notificationTypeObject);
    error = notificationType.validateSync();

    expect(error).toBe(undefined);
    expect(notificationType).toMatchObject(notificationTypeObject);
  });
});
