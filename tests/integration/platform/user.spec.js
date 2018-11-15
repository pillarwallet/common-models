const mongoose = require('mongoose');
const MongoMemoryServer = require('mongodb-memory-server').default;

const User = require('../../../lib/platform/user');

describe('User', () => {
  let mongoServer;

  beforeAll(async () => {
    mongoServer = new MongoMemoryServer();
    const mongoUri = await mongoServer.getConnectionString();
    return mongoose.connect(mongoUri);
  });

  afterAll(() => {
    mongoose.disconnect();
    mongoServer.stop();
  });

  it('throws when a username matches an existing record case insensitively', async () => {
    expect.assertions(3);

    await User.create({ username: 'user-name' });

    try {
      await User.create({ username: ' USER-NAME ' });
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
      expect(e.name).toBe('ValidationError');
      expect(e.errors.username.message).toBe(
        'Validator failed for path `username` with value `USER-NAME`',
      );
    }
  });
});
