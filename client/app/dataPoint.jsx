const DataPoint = ({key, dataPoint, selectStream}) => {
  return (
    <tr className="dataPoint">
      <td>{dataPoint.timestamp}</td>
      <td>{dataPoint.value}</td>
    </tr>
  );
};

export {DataPoint};
