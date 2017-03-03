import {StreamContainer} from './stream.jsx';
import {getStreams} from './state/actions.js';

const StreamList = ({streams, currentProject, token, handleRefresh, onClick}) => {
  return (
    <div className="streamList">
      <div className="accordionTab">
        <h1 onClick={() => onClick('streamsBody')}>Streams</h1>
      </div>
      <div className="accordionBody hiddenBody" id="streamsBody">
        {displayStreams(streams)}
        <span className="button refreshButton" onClick={() => handleRefresh(token, currentProject)}>Refresh</span>
      </div>
    </div>
  );
}

const displayStreams = (streams) => {
  if (streams) {
    return _.map(streams, (stream) => <StreamContainer key={stream.id} stream={stream} />)
  }
};

const handleRefresh = (token, id, dispatch) => dispatch(getStreams(token, id));

const mapStateToProps = (state) => {
  return {
    streams: state.streams,
    currentProject: state.currentProject,
    token: state.token
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleRefresh: (token, currentProject) => handleRefresh(token, currentProject, dispatch)
  };
};

const StreamListContainer = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(StreamList);

export {StreamListContainer};
