import {setCurrentStream, getData} from './state/actions.js';

const Stream = ({token, key, stream, selectStream}) => {
  return (
    <div className="stream" onClick={() => selectStream(token, stream.slug)}>
      {stream.id}
    </div>
  );
};

const selectStream = (token, currentStream, dispatch) => {
  dispatch(setCurrentStream(currentStream));
  dispatch(getData(token, currentStream));
};

const mapStateToProps = (state) => {
  return {
    token: state.token
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectStream: (token, currentStream) => selectStream(token, currentStream, dispatch)
  };
};

const StreamContainer = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Stream);

export {StreamContainer};
