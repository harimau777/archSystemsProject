import {getData, setStartTime, setEndTime} from './state/actions.js';
import {DataPoint} from './dataPoint.jsx';

const DataList = ({data, currentStream, token, startTime, endTime, setTimeRange, handleRefresh, onClick}) => {
  return (
    <div className="data">
      <div className="accordionTab">
        <h1 onClick={() => onClick('dataBody')}>Data</h1>
      </div>
      <div className="accordionBody hiddenBody" id="dataBody">
        <input type="text" name="startTime" />
        <input type="text" name="endTime" />
        <span className=".button" onClick={() => setTimeRange()}>Set Time</span>
        <table>
          <tbody>
            {displayData(data, startTime, endTime)}
          </tbody>
        </table>
        <span className="button refreshButton" onClick={() => handleRefresh(token, currentStream)}>Refresh</span>
      </div>
    </div>
  );
}

const setTimeRange = (dispatch) => {
  const startTime = $('input[name="startTime"]').val();
  const endTime = $('input[name="endTime"]').val();
  dispatch(setStartTime(startTime));
  dispatch(setEndTime(endTime));
}

const displayData = (data, startTime, endTime) => {
  if (data) {
    if (startTime && endTime) {
      const filteredData = _.filter(data, (dataPoint) => (Date.parse(dataPoint.timestamp) - Date.parse(startTime) >= 0) && (Date.parse(dataPoint.timestamp) - Date.parse(endTime) <= 0));
      return _.map(filteredData, (dataPoint) => <DataPoint key={dataPoint.timestamp} dataPoint={dataPoint} />);
    } else {
      return _.map(data, (dataPoint) => <DataPoint key={dataPoint.timestamp} dataPoint={dataPoint} />);
    }
  }
};

// const displayData = (data) => {
//   if (data) {
//     return _.map(data, (dataPoint) => <DataPoint key={dataPoint.timestamp} dataPoint={dataPoint} />);
//   }
// };


const filterTimes = (startTime, endTime, testTimes) => {
  return _.filter(testTimes, (testTime) => (Date.compare(testTime, startTime) >= 0) && (Date.compare(testTime, endTime) <= 0));
}

const handleRefresh = (token, currentStream, dispatch) => dispatch(getData(token, currentStream));

const mapStateToProps = (state) => {
  return {
    data: state.data,
    currentStream: state.currentStream,
    token: state.token,
    startTime: state.startTime,
    endTime: state.endTime
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleRefresh: (token, currentStream) => handleRefresh(token, currentStream, dispatch),
    setTimeRange: () => setTimeRange(dispatch)
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