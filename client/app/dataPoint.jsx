const DataPoint = ({key, dataPoint, selectStream}) => {
  return (
    <div className="dataPoint">
      {dataPoint.timestamp}
    </div>
  );
};

export {DataPoint};
