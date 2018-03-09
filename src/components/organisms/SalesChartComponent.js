import React from 'react';
import Box from '../atoms/Box';
import ReactHighcharts from 'react-highcharts';
import "../pages/GeneralStyles.css";
import Select from "../atoms/Select/Select";

//config
import pieChart from "../../config/pieChart.config";


class SalesChartComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      dataSales: []
    }
  }

  componentWillMount() {
    fetch('/api/sales/last-year', {
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      method: 'GET',
    })
        .then(res => res.json())
        .then(res => {
          this.setState({
            dataSales: res
          });
          let salesArray = this.state.dataSales;
          let sum = 0;
          for (let index in salesArray) {
            for (let salesArrayIndex in salesArray[index]) {
              sum += (typeof salesArray[index][salesArrayIndex] === "number") ?
                  salesArray[index][salesArrayIndex] : 0;
            }
          }
          let chart = this.salesChart.getChart();
          chart.series[0].setData(this.state.dataSales, true);
          chart.setTitle({text: sum});
        });

  }

  handleChange = (e) => {
    if (e.target.value === 'Last year') {
      fetch('/api/sales/last-year', {
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        method: 'GET',
      })
          .then(res => res.json())
          .then(res => {
            this.setState({
              dataSales: res
            });
            let salesArray = this.state.dataSales;
            let sum = 0;
            for (let index in salesArray) {
              for (let salesArrayIndex in salesArray[index]) {
                sum += (typeof salesArray[index][salesArrayIndex] === "number") ?
                    salesArray[index][salesArrayIndex] : 0;
              }
            }
            let chart = this.salesChart.getChart();
            chart.series[0].setData(this.state.dataSales, true);
            chart.redraw();
            chart.setTitle({text: sum});
          });
    }
    else if (e.target.value === 'Last month') {
      fetch('/api/sales/last-month', {
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        method: 'GET',
      })
          .then(res => res.json())
          .then(res => {
            this.setState({
              dataSales: res
            });
            let salesArray = this.state.dataSales;
            let sum = 0;
            for (let index in salesArray) {
              for (let salesArrayIndex in salesArray[index]) {
                sum += (typeof salesArray[index][salesArrayIndex] === "number") ?
                    salesArray[index][salesArrayIndex] : 0;
              }
            }
            let chart = this.salesChart.getChart();
            chart.series[0].setData(this.state.dataSales, true);
            chart.setTitle({text: sum});
          });
    }
    else if (e.target.value === 'Last week') {
      fetch('/api/sales/last-week', {
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        method: 'GET',
      })
          .then(res => res.json())
          .then(res => {
            this.setState({
              dataSales: res
            });
            let salesArray = this.state.dataSales;
            let sum = 0;
            for (let index in salesArray) {
              for (let salesArrayIndex in salesArray[index]) {
                sum += (typeof salesArray[index][salesArrayIndex] === "number") ?
                    salesArray[index][salesArrayIndex] : 0;
              }
            }
            let chart = this.salesChart.getChart();
            chart.series[0].setData(this.state.dataSales, true);
            chart.setTitle({text: sum});
          });
    }
  };

  render(){
    const periodsSales = ['Last year', 'Last month', 'Last week'];
    return(
        <Box boxWidth={"Box Box--withPadding BoxCircleChart margin-bottom-30"}>
          <div className="BoxHeader">
            <h2>Your Sales</h2>
            <Select
                onChange={this.handleChange}
                data={periodsSales}
                selectBlockClass="SelectLabel SelectBlock SelectBlockPeriod"
                selectClass="Select Select-Period"/>
          </div>
          <ReactHighcharts config={pieChart} ref={(chart) => {
            this.salesChart = chart;
          } }/>
        </Box>
    )
  }
}

export default SalesChartComponent;