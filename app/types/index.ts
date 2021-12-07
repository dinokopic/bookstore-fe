import { Reducer, Store } from 'redux';
import { RouterState } from 'connected-react-router';
import { Saga } from 'redux-saga';
import { SagaInjectionModes } from 'redux-injectors';

import { ContainerState as LanguageProviderState } from 'containers/LanguageProvider/types';
import { ContainerState as AppState } from 'containers/App/types';
import { ContainerState as HomeState } from 'containers/HomePage/types';
import { ContainerState as LandingPageState } from 'containers/LandingPage/types';
import { ContainerState as FiltersState } from 'containers/Filters/types';
import { ContainerState as SearchState } from 'containers/Search/types';
import { ContainerState as SearchPageState } from 'containers/SearchPage/types';
import { ContainerState as ChartsPageState } from 'containers/ChartsPage/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

export interface InjectedStore extends Store {
  injectedReducers: any;
  injectedSagas: any;
  runSaga(saga: Saga<any[]> | undefined, args: any | undefined): any;
}

export interface InjectReducerParams {
  key: keyof ApplicationRootState;
  reducer: Reducer<any, any>;
}

export interface InjectSagaParams {
  key: keyof ApplicationRootState;
  saga: Saga;
  mode?: SagaInjectionModes;
}

// Your root reducer type, which is your redux state types also
export interface ApplicationRootState {
  readonly router: RouterState;
  readonly global: AppState;
  readonly language: LanguageProviderState;
  readonly home: HomeState;
  readonly landingPage: LandingPageState;
  readonly filters: FiltersState;
  readonly search: SearchState;
  readonly searchPage: SearchPageState;
  readonly chartsPage: ChartsPageState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly

  // for testing purposes
  readonly test: any;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  year: string;
  awards: Array<string>;
  genre: Array<string>;
  category: Array<string>;
  sold: number;
  price: number;
  number_of_pages: number;
  img_url: string;
}
