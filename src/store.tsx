import {
  Store,
  createStore,
  compose,
  applyMiddleware,
  combineReducers
} from 'redux';
import reduxThunk from 'redux-thunk';
// import { state, State } from './reducers';

export const loginReducers = (state: any[] = [], action) => {
  switch (action.type) {
    case 'FETCH_MEMBERS_COMPLETED':
      return '';
  }

  return state;
};

export const state = combineReducers<any>({
  login: loginReducers
});

export const store: Store<any> = createStore(
  state,
  compose(applyMiddleware(reduxThunk))
);
