import { renderHook } from '@testing-library/react-hooks/server';
import useYoutube from './useYoutube';

describe('Youtube functionality hook testing', () => {
  test('Test the initial value after useFffect', async () => {
    const { result, hydrate, waitForValueToChange } = renderHook(() => useYoutube());
    // hydrate component to allow useFffect to run
    hydrate();
    await waitForValueToChange(() => result.current.videos);
    expect(result.current.videos.length).toBe(12);
  });

  test('Test change of value after search video', async () => {
    const { result, hydrate } = renderHook(() => useYoutube());
    hydrate();
    // Initial value must be null
    expect(result.current.videos).toBeNull();
    await result.current.searchNewVideo('React');
    // After search array should contain 12 items
    expect(result.current.videos.length).toBe(12);
  });
});
