import React, { Component } from "react";
import { Chart } from "react-google-charts";

export default class BarCha extends Component {
  render() {
    const data = [
      [
        "Year",
        "Total Clients Contacted",
        "Total Calls Scheduled",
        "No.of not scheduled a call",
      ],
      [this.props.startDate && this.props.endDate ? `Date form ${this.props.startDate} to ${this.props.endDate}` : 'All Time', this.props.totalClients,this.props.scheduledCalls,this.props.noResponse],
    ];

    const options = {
      chart: {
        title: "Campaign Analytics",
        subtitle:
          "",
      },
    };

    return (
      <Chart
      chartType="Bar"
      width="80%"
      height="400px"
      data={data}
      options={options}
    />
    );
  }
}