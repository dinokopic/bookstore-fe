import filtersReducer from '../reducer';
// import { someAction } from '../actions';
import { ContainerState } from '../types';

describe('filtersReducer', () => {
  let state: ContainerState;
  beforeEach(() => {
    state = {
      authors: [],
      genres: [],
      numberOfAwards: [],
      selectedAuthor: '',
      selectedGenre: '',
      selectedNumberOfAwards: '',
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    // eslint-disable-next-line prettier/prettier
    expect(filtersReducer(undefined, {} as any)).toEqual(expectedResult);
  });

  /**
   * Example state change comparison
   *
   * it('should handle the someAction action correctly', () => {
   *   const expectedResult = {
   *     loading = true;
   *   );
   *
   *   expect(appReducer(state, someAction())).toEqual(expectedResult);
   * });
   */
});
