const { ObjectId } = require('mongoose').Types;
const schemaCreator = require('../../../utilities/schemaCreator');

jest.spyOn(schemaCreator, 'createSchema');
const StoryPageModel = require('../../../lib/platform/storyPage');

describe('Story Page model', () => {
  afterAll(() => {
    schemaCreator.createSchema.mockRestore();
  });

  it('creates a model with all properties', () => {
    const storyPageObject = {
      storyId: ObjectId('5c726660d10f752679c2ef14'),
      pageNumber: 1,
      body: 'Lorem ipsum',
      imageUrl: 'image.jpg',
      imageMonoUrl: 'mono-image.jpg',
      layoutType: 'layout-one',
      backgroundColor: 'black',
      textContrast: '100%',
    };
    const storyPage = new StoryPageModel(storyPageObject);

    const error = storyPage.validateSync();

    expect(error).toBe(undefined);
    expect(storyPage).toMatchObject(storyPageObject);
  });

  it('throws when required properties are missing', () => {
    const storyPageObject = {
      pageNumber: 1,
      body: 'Lorem ipsum',
      imageUrl: 'image.jpg',
      imageMonoUrl: 'mono-image.jpg',
      layoutType: 'layout-one',
      backgroundColor: 'black',
      textContrast: '100%',
    };
    const storyPage = new StoryPageModel(storyPageObject);

    expect(storyPage.validateSync).toThrow();

    const { errors } = storyPage.validateSync();
    expect(errors.storyId.message).toMatch('Path `storyId` is required.');
  });
});
