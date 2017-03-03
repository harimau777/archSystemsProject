const DataPoint = ({key, dataPoint, selectStream}) => {
  return (
    <tr className="dataPoint">
      <td>{parseTimeStamp(dataPoint.timestamp)}</td>
      <td>{dataPoint.value}</td>
    </tr>
  );
};

const parseTimeStamp = (timestamp) => {
  const match = timestamp.match(/^(.+)T((?:\d\d\:){2}\d\d)/);
  return match[1] + ' ' + match[2];
}

export {DataPoint};
