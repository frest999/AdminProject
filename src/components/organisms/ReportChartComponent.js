import React from 'react';
import Box from '../atoms/Box';
import ReactHighcharts from 'react-highcharts';
import "../pages/GeneralStyles.css";
import Select from "../atoms/Select/Select";

//config
import lineChart from '../../config/lineChart.config';

class ReportChartComponent extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      dataReport: []
    }
  }

  componentWillMount() {
    fetch('/api/report/last-year', {
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      method: 'GET',
    })
        .then(res => res.json())
        .then(res => {
          this.setState({
            dataReport: res
          });
          let chart = this.reportChart.getChart();
          chart.series[0].setData(this.state.dataReport, true);
        });
  }

  handleChange = (e) => {
    if (e.target.value === 'Last year') {
      fetch('/api/report/last-year', {
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        method: 'GET',
      })
          .then(res => res.json())
          .then(res => {
            this.setState({
              dataReport: res
            });
            let chart = this.reportChart.getChart();
            chart.series[0].setData(this.state.dataReport, true);
          });
    }
    else if (e.target.value === 'Last month') {
      fetch('/api/report/last-month', {
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        method: 'GET',
      })
          .then(res => res.json())
          .then(res => {
            this.setState({
              dataReport: res
            });
            let chart = this.reportChart.getChart();
            chart.series[0].setData(this.state.dataReport, true);
          });
    }
    else if (e.target.value === 'Last week') {
      fetch('/api/report/last-week', {
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        method: 'GET',
      })
          .then(res => res.json())
          .then(res => {
            this.setState({
              dataReport: res
            });
            let chart = this.reportChart.getChart();
            chart.series[0].setData(this.state.dataReport, true);
          });
    }

  };

  render(){
    const periodsSales = ['Last year', 'Last month', 'Last week'];
    return(
        <Box boxWidth={"Box Box--withPadding BoxGraphChart margin-bottom-30"}>
          <div className="BoxHeader margin-bottom-30">
            <h2>Report</h2>
            <Select
                onChange={this.handleChange}
                data={periodsSales}
                selectBlockClass="SelectLabel SelectBlock SelectBlockPeriod"
                selectClass="Select Select-Period"/>
          </div>
          <ReactHighcharts config={lineChart} ref={(chart) => {this.reportChart = chart}}/>
        </Box>
    )
  }
}

export default ReportChartComponent;