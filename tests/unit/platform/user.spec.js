const schemaCreator = require('../../../utilities/schemaCreator.js');

jest.spyOn(schemaCreator, 'createSchema');
const UserModel = require('../../../lib/platform/user');

describe('User Schema Validation', () => {
  let userObject;
  let user;
  let error;

  afterAll(() => {
    schemaCreator.createSchema.mockRestore();
  });

  const getMockFirstCall = call => call.mock.calls[0][0];

  it('should be invalid if try to create empty object', async () => {
    user = await new UserModel(userObject);

    expect(user.validateSync).toThrow();
  });

  it('should be invalid if try to create object without username field', () => {
    userObject = {};
    user = new UserModel(userObject);
    error = user.validateSync();

    expect(user.validateSync).toThrow();
    expect(error.errors.username.message).toEqual(
      'Path `username` is required.',
    );
  });

  it('should be invalid when a given Boolean field is not Boolean.', () => {
    userObject = {
      username: 'myUserName',
      isEmailVerified: 'notValidData',
    };
    user = new UserModel(userObject);
    error = user.validateSync();

    expect(user.validateSync).toThrow();
    expect(error.errors.isEmailVerified.message).toEqual(
      'Cast to Boolean failed for value "notValidData" at path "isEmailVerified"',
    );
  });

  it('creates Schema with unique properties', () => {
    const firstCall = getMockFirstCall(schemaCreator.createSchema);

    expect(firstCall.username).toHaveProperty('unique', true);
  });

  it('should create object successfully', () => {
    userObject = {
      username: 'myUserName',
      registrationId: 'myRegistrationId',
    };
    user = new UserModel(userObject);
    error = user.validateSync();

    expect(error).toBe(undefined);
    expect(user).toMatchObject(userObject);
    expect(user).toHaveProperty('secretId');
    expect(user).toHaveProperty('lastSeen');
  });

  it('should create object successfully with all properties seted', () => {
    userObject = {
      username: 'username',
      registrationId: 'testRegistrationId',
      firstName: 'firstName',
      lastName: 'lastName',
      email: 'email',
      isEmailVerified: true,
      emailOneTimePassword: 'testEmailOneTimePassword',
      phone: '+9999999',
      isPhoneVerified: true,
      phoneOneTimePassword: 'testPhoneOneTimePassword',
      country: 'testCountry',
      state: 'testState',
      city: 'testCity',
      userSearchable: true,
      tagline: 'testTagLine',
      taglineStatus: true,
      profileImage: 'profileImage',
      status: 'ACTIVE',
      secretId: 'test',
      betaProgramParticipant: true,
      lastSeen: new Date(),
    };
    user = new UserModel(userObject);
    error = user.validateSync();

    expect(error).toBe(undefined);
    expect(user).toMatchObject(userObject);
  });
});
