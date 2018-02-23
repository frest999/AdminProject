import React from 'react';
import ReactHighcharts from 'react-highcharts';
import Box from '../atoms/Box';
import '../atoms/StatisticsBlockPosition.css';

//config
import activeUserChart from '../../config/lineGradientChart.config';

const periodsSales = ['Last year', 'Last month', 'Last week'];
const notificationStat = ['Notification','Second notification','Third notification'];


class Statistics extends React.Component {

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


  render() {
    return (
        <div className="content">
          <div className="StatisticsHeader">
          <h2 className="titlePage margin-bottom-40">Lorem Ipsum Stats</h2>
            <div className="HeaderWithSelects">
              <select onChange={this.handleChange} className="BrandSelect">
                {
                  periodsSales.map((item, index) => {
                    return <option key={index} value={item}>{item}</option>
                  })
                }
              </select>
              <select className="BrandSelect">
                {
                  notificationStat.map((item, index) => {
                    return <option key={index} value={item}>{item}</option>
                  })
                }
              </select>
            </div>
          </div>
          <div className="BoxPosition">
            <Box boxWidth={"Box BoxCircleChart ActiveBox"}>
              <div className="TopBox SubActiveBox">
                <div>
                  <p className="NumberSaleText">1560</p>
                  <p className="SaleText">Sales</p>
                </div>
                <img src="img/graph1.png" alt=""/>
              </div>
              <div className="BottomBlock SubActiveBox">
                <div>
                  <p className="NumberSaleText">1560</p>
                  <p className="SaleText">Sales</p>
                </div>
                <img src="img/graph.png" alt=""/>
              </div>
            </Box>
            <Box boxWidth={"Box Box--withPadding BoxGraphChart margin-bottom-30"}>
              <div className="BoxHeader margin-bottom-30">
                <h2>Active User</h2>
              </div>
              <ReactHighcharts config={activeUserChart} ref={(chart) => {this.reportChart = chart}}/>
            </Box>
          </div>
        </div>
    );
  }
}

export default Statistics;
