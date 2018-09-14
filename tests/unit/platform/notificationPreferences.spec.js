const schemaCreator = require('../../../utilities/schemaCreator.js');

jest.spyOn(schemaCreator, 'createSchema');
const NotificationPreferencesModel = require('../../../lib/platform/notificationPreferences');

describe('Notification Preferences Schema Validation', () => {
  let notificationObject;
  let notificationPreferences;
  let error;

  const getMockFirstCall = call => call.mock.calls[0][0];

  afterAll(() => {
    schemaCreator.createSchema.mockRestore();
  });

  it('should be invalid if try to create empty object', () => {
    notificationObject = {};
    notificationPreferences = new NotificationPreferencesModel(
      notificationObject,
    );
    error = notificationPreferences.validateSync();

    expect(notificationPreferences.validateSync).toThrow();
    expect(error.errors.userId.message).toEqual('Path `userId` is required.');
  });

  it('creates Schema with unique properties', () => {
    const firstCall = getMockFirstCall(schemaCreator.createSchema);

    expect(firstCall.userId).toHaveProperty('unique', true);
  });

  it('should be invalid when field is not Boolean.', () => {
    notificationObject = {
      userId: 'myUserId',
      newOffer: 'WrongType',
    };
    notificationPreferences = new NotificationPreferencesModel(
      notificationObject,
    );
    error = notificationPreferences.validateSync();

    expect(notificationPreferences.validateSync).toThrow();
    expect(error.errors.newOffer.message).toEqual(
      'Cast to Boolean failed for value "WrongType" at path "newOffer"',
    );
  });

  it('should create object successfully', () => {
    notificationObject = {
      userId: 'myUserId',
      newOffer: true,
      newReceipt: false,
      paymentConfirmation: true,
      paymentStatusUpdate: false,
      profileUpdate: true,
      fundsDeposit: false,
      transactionEvent: true,
    };
    notificationPreferences = new NotificationPreferencesModel(
      notificationObject,
    );
    error = notificationPreferences.validateSync();

    expect(error).toBe(undefined);
    expect(notificationPreferences).toMatchObject({});
  });
});
