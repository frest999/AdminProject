import React from 'react';
import SalesChartComponent from "../organisms/SalesChartComponent";
import ReportChartComponent from "../organisms/ReportChartComponent";

class Home extends React.Component {

  render() {

    const periodsSales = ['Last year', 'Last month', 'Last week'];
    const userName = localStorage.getItem('username');

    return (
        <div className="content">
          <h2 className="titlePage margin-bottom-40">Hello {userName}!</h2>
          <div className="BoxPosition">
            <SalesChartComponent data={periodsSales}/>
            <ReportChartComponent data={periodsSales}/>
          </div>
        </div>
    );
  }
}

export default Home;
