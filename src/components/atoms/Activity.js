import React from 'react';
import '../pages/GeneralStyles.css';
import './Activity.css';

class Activity extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      userIconActivity: '',
      userNameActivity: '',
      actionActivity: '',
      nameTaskActivity: '',
      timeActivity: ''
    }
  }

  render(){
    return(
        <div className="ActivityBlock">
          <div className="UserIconBox ActivityIconLine">
            <img src={this.props.userIconActivity} alt=""/>
          </div>
          <div className="ActivityInfo">
            <p className="ActivityUserName">{this.props.userNameActivity}
              <span className="ActivityAction">{this.props.actionActivity}</span>
              <span className="ActivityNameTask">{this.props.nameTaskActivity}</span>
            </p>
            <p className="ActivityTime">{this.props.timeActivity}</p>
          </div>
        </div>
    )
  }
}

export default Activity;