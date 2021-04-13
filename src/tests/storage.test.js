import { storage } from '../utils/storage';

describe('Storage functions tests', () => {
  test('check storage containes saves values', () => {
    storage.set('testValue', true);
    const testValue = storage.get('testValue');
    expect(testValue).toBeTruthy();
    const notExisting = storage.get('notExisting');
    expect(notExisting).toBeNull();
  });
});
