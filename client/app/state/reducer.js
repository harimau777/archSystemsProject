function reducer(state, action) {
  switch(action.type) {
    case 'setToken':
      return Object.assign({}, state, {token: action.token});
    case 'setCurrentTab':
      return Object.assign({}, state, {currentTab: action.currentTab});
    case 'setProjects':
      return Object.assign({}, state, {projects: action.projects});
    case 'setCurrentProject':
      return Object.assign({}, state, {currentProject: action.currentProject});
    case 'setStreams':
      return Object.assign({}, state, {streams: action.streams});
    case 'setCurrentStream':
      return Object.assign({}, state, {currentStream: action.currentStream});
    case 'setData':
      return Object.assign({}, state, {data: action.data});
    case 'setStartTime':
      return Object.assign({}, state, {startTime: action.startTime});
    case 'setEndTime':
      return Object.assign({}, state, {endTime: action.endTime});
    default:
      return state;
  }
}

export {reducer};
