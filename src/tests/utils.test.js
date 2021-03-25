import * as fn from '../utils/fns';

describe('General functions imported from fns tests', () => {
  test('checks getNotRepeatedItems result, should return an array with no repeated values', () => {
    const testArrayOne = [1, 2, 2, 1, 5, 6, 3, 1];
    const testArrayTwo = [
      'wizeline',
      'react',
      'movies',
      'react',
      'food',
      'react',
      'travel',
      'wizeline',
    ];
    const result1 = fn.getNotRepeatedItems(testArrayOne);
    const result2 = fn.getNotRepeatedItems(testArrayTwo);
    expect(result1).toEqual([1, 2, 5, 6, 3]);
    expect(result2).toEqual(['wizeline', 'react', 'movies', 'food', 'travel']);
  });
});
