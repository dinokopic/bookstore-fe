import chartsPageReducer from "../reducer";
// import { someAction } from '../actions';
import { ContainerState } from "../types";

describe("chartsPageReducer", () => {
  let state: ContainerState;
  beforeEach(() => {
    state = {
      priceData: [],
      profitData: [],
      bestSellingGenresData: [],
      bestSellingBooksData: [],
    };
  });

  it("returns the initial state", () => {
    const expectedResult = state;
    // eslint-disable-next-line prettier/prettier
    expect(chartsPageReducer(undefined, {} as any)).toEqual(expectedResult);
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
