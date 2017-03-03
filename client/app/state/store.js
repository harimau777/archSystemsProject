import {reducer} from './reducer.js';

const initialState = {
  token: undefined,
  currentTab: 'projects',
  projects: [],
  currentProject: undefined,
  streams: [],
  currentStream: undefined,
  data: []
}

let store = Redux.createStore(reducer, initialState, Redux.applyMiddleware(ReduxThunk.default));

export {store};
