import {getData} from './state/actions.js';
import {DataPoint} from './dataPoint.jsx';

const DataList = ({data, currentStream, token, handleRefresh}) => {
  return (
    <div className="data">
      <div className="accordionTab">
        <h1>Data</h1>
      </div>
      <div>
        {displayData(data)}
        <span className="button refreshButton" onClick={() => handleRefresh(token, currentStream)}>Refresh</span>
      </div>
    </div>
  );
}

const displayData = (data) => {
  if (data) {
    return _.map(data, (dataPoint) => <DataPoint key={dataPoint.timestamp} dataPoint={dataPoint} />);
  }
};

const handleRefresh = (token, currentStream, dispatch) => dispatch(getData(token, currentStream));

const mapStateToProps = (state) => {
  return {
    data: state.data,
    currentStream: state.currentStream,
    token: state.token
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleRefresh: (token, currentStream) => handleRefresh(token, currentStream, dispatch)
  };
};

const DataListContainer = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(DataList);

export {DataListContainer};


// _.filter(data, ({timestamp}) => checkBetweenTimes(startTime, endTime, testTime));

// checkBetweenTimes(startTime, endTime, testTime) {
//   ___???___
// }

// dateToUnixTime(date) {
  
// }