const schemaCreator = require('../../../utilities/schemaCreator');

jest.spyOn(schemaCreator, 'createSchema');
const StoryModel = require('../../../lib/platform/story');

describe('Story model', () => {
  afterAll(() => {
    schemaCreator.createSchema.mockRestore();
  });

  it('creates a model with all properties', () => {
    const storyObject = {
      topic: 'Awesome Features',
      title: 'Cool new feature',
      shortTitle: 'New feature!',
      imageUrl: 'image.jpg',
      imageMonoUrl: 'mono-image.jpg',
      likes: 0,
      active: false,
    };
    const story = new StoryModel(storyObject);

    const error = story.validateSync();

    expect(error).toBe(undefined);
    expect(story).toMatchObject(storyObject);
  });

  it('throws when required properties are missing', () => {
    const storyObject = {
      title: 'Cool new feature',
      shortTitle: 'New feature!',
      imageUrl: 'image.jpg',
      imageMonoUrl: 'mono-image.jpg',
      likes: 0,
      active: false,
    };
    const story = new StoryModel(storyObject);

    expect(story.validateSync).toThrow();

    const { errors } = story.validateSync();
    expect(errors.topic.message).toMatch('Path `topic` is required.');
  });

  it('throws when properties are invalid type', () => {
    const storyObject = {
      topic: 'Awesome features',
      title: 'Title!',
      shortTitle: 'New feature!',
      imageUrl: 'image.jpg',
      imageMonoUrl: 'mono-image.jpg',
      likes: 0,
      active: 'hello',
    };
    const story = new StoryModel(storyObject);

    expect(story.validateSync).toThrow();

    const { errors } = story.validateSync();
    expect(errors.active.message).toEqual(
      'Cast to Boolean failed for value "hello" at path "active"',
    );
  });

  it('throws when properties exceed maximum length', () => {
    const storyObject = {
      topic: 'Awesome features',
      title: 'Some very long title that exceedes max length',
      shortTitle: 'New feature!',
      imageUrl: 'image.jpg',
      imageMonoUrl: 'mono-image.jpg',
      likes: 0,
      active: false,
    };
    const story = new StoryModel(storyObject);

    expect(story.validateSync).toThrow();

    const { errors } = story.validateSync();
    expect(errors.title.message).toEqual(
      'Path `title` (`Some very long title that exceedes max length`) is longer than the maximum allowed length (30).',
    );
  });
});
