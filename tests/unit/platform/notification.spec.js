const NotificationModel = require('../../../lib/platform/notification');

describe('Notification Schema Validation', () => {
  let notificationObject;
  let Notification;
  let error;

  it('should be invalid if try to create empty object', () => {
    notificationObject = {};
    Notification = new NotificationModel(notificationObject);
    error = Notification.validateSync();

    expect(Notification.validateSync).toThrow();
    expect(error.errors.type.message).toEqual('Path `type` is required.');
    expect(error.errors.meta.message).toEqual(
      'Path `meta` is required.',
    );
    expect(error.errors.payload.message).toEqual('Path `payload` is required.');
  });

  it('should create object successfully', () => {
    notificationObject = {
      type: 'myType',
      meta: {},
      payload: {},
    };
    Notification = new NotificationModel(notificationObject);
    error = Notification.validateSync();

    expect(error).toBe(undefined);
    expect(Notification).toMatchObject({});
  });
});
