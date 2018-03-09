import React from 'react';
import ReactHighcharts from 'react-highcharts';
import Box from '../atoms/Box';
import '../atoms/StatisticsBlockPosition.css';
import '../atoms/TotalSalesDiagram.css';

//config
import activeUserChart from '../../config/lineGradientChart.config';
import EditDeleteBtn from "../molecules/EditDeleteBtn";
import TotalSalesDiagram from "../atoms/TotalSalesDiagram";
import Select from "../atoms/Select/Select";

const periodsSales = ['Last year', 'Last month', 'Last week'];
const notificationStat = ['Notification','2 Notification','3 Notification'];

const KindsSalesData = [
  {
    _id: "TotalSales1",
    percent: "45",
    color: "#7950ff",
    price: "2,300$",
    kind: "Direct Sales"
  },
  {
    _id: "TotalSales2",
    percent: "20",
    color: "#b92bb8",
    price: "980$",
    kind: "Channel Sales"
  },
  {
    _id: "TotalSales3",
    percent: "25",
    color: "#ff0075",
    price: "1250$",
    kind: "Channel Sales"
  }
];


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
              <Select
                  onChange={this.handleChange}
                  data={periodsSales}
                  selectBlockClass="SelectLabel SelectBlock SelectBlockPeriod"
                  selectClass="Select Select-Period"/>
              <Select
                  data={notificationStat}
                  selectBlockClass="SelectLabel SelectBlock SelectBlockType"
                  selectClass="Select Select-Period SelectType"/>
            </div>
          </div>
          <div className="BoxPosition">
            <Box boxWidth={"Box BoxCircleChart ActiveBox margin-bottom-40"}>
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
            <Box boxWidth={"Box Box--withPadding BoxGraphChart margin-bottom-40"}>
              <div className="BoxHeader margin-bottom-30">
                <h2>Active User</h2>
                <EditDeleteBtn/>
              </div>
              <ReactHighcharts config={activeUserChart} ref={(chart) => {this.reportChart = chart}}/>
            </Box>
            <Box boxWidth={"Box Box--withPadding TotalSales"}>
              <div className="BoxHeader margin-bottom-30">
                <h2>Total Sales</h2>
                <EditDeleteBtn/>
              </div>
              <ul className="TotalSalesBlock">
                {
                  KindsSalesData.map(item => {
                    return (
                        <TotalSalesDiagram data={item} key={item.id}/>
                    )
                  })
                }
              </ul>
            </Box>
          </div>
        </div>
    );
  }
}

export default Statistics;
