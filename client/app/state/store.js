import {reducer} from './reducer.js';

const initialState = {
  token: undefined,
  currentTab: 'projects',
  projects: [],
  currentProject: undefined,
  streams: [],
  currentStream: undefined,
  data: [],
  startTime: undefined,
  endTime: undefined
}

let store = Redux.createStore(reducer, initialState, Redux.applyMiddleware(ReduxThunk.default));

export {store};
