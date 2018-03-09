import React from 'react';
import { Circle } from 'rc-progress';
import './TotalSalesDiagram.css';


class TotalSalesDiagram extends React.Component{
  render(){
    return(
        <li className="ProgressCircleBlock">
         <div className="ProgressCircle">
          <Circle  gapPosition="bottom"
                   percent={this.props.data.percent}
                   strokeWidth="8"
                   trailWidth="8"
                   trailColor="#dbdce7"
                   strokeColor={this.props.data.color}
          />
           <p className="SalesNumber" style={{color: this.props.data.color}}>{this.props.data.percent}%</p>
         </div>
         <div className="SalesDescription">
           <p className="SalesPrice">{this.props.data.price}</p>
           <p className="SalesKind">{this.props.data.kind}</p>
         </div>
        </li>
    );
  }
}

export default TotalSalesDiagram;