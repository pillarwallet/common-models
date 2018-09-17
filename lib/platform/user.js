const mongoose = require('mongoose');
const uuidv4 = require('uuid/v4');
const schemaCreator = require('../../utilities/schemaCreator');

const schema = schemaCreator.createSchema(
  {
    _id: {
      type: String,
      default: uuidv4,
    },
    /**
     * @name username
     * @desc The username.
     * @type String
     * @memberof User
     * @required
     * @unique
     * @inner
     */
    username: {
      type: String,
      required: true,
      unique: true,
    },
    /**
     * @name firstName
     * @desc The user's first name.
     * @type String
     * @memberof User
     * @inner
     */
    firstName: String,
    /**
     * @name lastName
     * @desc The user's last name.
     * @type String
     * @memberof User
     * @inner
     */
    lastName: String,
    /**
     * @name email
     * @desc The user's email.
     * @type String
     * @memberof User
     * @inner
     */
    email: String,
    /**
     * @name isEmailVerified
     * @desc One flag to check user's email.
     * @type Boolean
     * @memberof User
     * @inner
     */
    isEmailVerified: Boolean,
    /**
     * @name emailOneTimePassword
     * @desc The user's email one time password.
     * @type String
     * @memberof User
     * @inner
     */
    emailOneTimePassword: String,
    /**
     * @name phone
     * @desc The user's phone.
     * @type String
     * @memberof User
     * @inner
     */
    phone: String,
    /**
     * @name isPhoneVerified
     * @desc One flag to check user's phone.
     * @type Boolean
     * @memberof User
     * @inner
     */
    isPhoneVerified: Boolean,
    /**
     * @name phoneOneTimePassword
     * @desc The user's phone one time password.
     * @type String
     * @memberof User
     * @inner
     */
    phoneOneTimePassword: String,
    /**
     * @name country
     * @desc The user's country.
     * @type String
     * @memberof User
     * @inner
     */
    country: String,
    /**
     * @name state
     * @desc The user's state.
     * @type String
     * @memberof User
     * @inner
     */
    state: String,
    /**
     * @name city
     * @desc The user's city.
     * @type String
     * @memberof User
     * @inner
     */
    city: String,
    /**
     * @name userSearchable
     * @desc One flag to check if user is searchable.
     * @type Boolean
     * @memberof User
     * @inner
     */
    userSearchable: Boolean,
    /**
     * @name tagline
     * @desc The user's tagline.
     * @type String
     * @memberof User
     * @inner
     */
    tagline: String,
    /**
     * @name taglineStatus
     * @desc One flag to check if user's tagline is displayable.
     * @type Boolean
     * @memberof User
     * @inner
     */
    taglineStatus: Boolean,
    /**
     * @name profileImage
     * @desc The user's profileImage.
     * @type String
     * @memberof User
     * @inner
     */
    profileImage: String,
    /**
     * @name icoService
     * @desc Information related to the user's account with a service provider for ICOs.
     * @type Object
     * @memberof User
     * @inner
     */
    icoService: {
      userId: String,
      walletAddress: String,
      encryptedPin: String,
      userProfile: {
        rejected: Boolean,
        onboardingStatus: Number,
        nationality: String,
        secondNationality: String,
        investorType: String,
      },
    },
    /**
     * @name status
     * @desc The user status in the system.
     * @type String
     * @memberof User
     * @inner
     */
    status: {
      type: String,
      default: 'ACTIVE',
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

/**
 * @namespace User
 * @name User
 * @desc User model maps to a MongoDB collection and defines the shape of the document.
 *
 * @param schema
 * @type {Model}
 */
module.exports = mongoose.model('User', schema);
