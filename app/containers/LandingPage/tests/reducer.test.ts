import landingPageReducer from '../reducer';
// import { someAction } from '../actions';
import { ContainerState, OrderByCategory } from '../types';

describe('landingPageReducer', () => {
  let state: ContainerState;
  beforeEach(() => {
    state = {
      popularBooks: [],
      latestBooks: [],
      totalHits: 0,
      selectedCategory: OrderByCategory.popular,
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    // eslint-disable-next-line prettier/prettier
    expect(landingPageReducer(undefined, {} as any)).toEqual(expectedResult);
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
