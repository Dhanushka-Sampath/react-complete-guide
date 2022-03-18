import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  //here "dataPointValues" is an array. but for the math.max function we need a list. so we have used 3 dots(spread operator) to convert array to list.
  const dataPointValues = props.dataPoints.map((datapoint) => datapoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label} //this is to prevent key warning at runtime
          value={datapoint.value}
          maxValue={totalMaximum} //the biggest value of all 12 months
          label={datapoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
