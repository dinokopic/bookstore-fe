import searchPageReducer from "../reducer";
// import { someAction } from '../actions';
import { ContainerState } from "../types";

describe("searchPageReducer", () => {
  let state: ContainerState;
  beforeEach(() => {
    state = {
      searchResults: [],
      totalHits: 0,
      currentPage: 0,
      loading: false,
      error: false,
    };
  });

  it("returns the initial state", () => {
    const expectedResult = state;
    // eslint-disable-next-line prettier/prettier
    expect(searchPageReducer(undefined, {} as any)).toEqual(expectedResult);
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
