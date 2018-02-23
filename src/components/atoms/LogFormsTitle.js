import React from 'react';
import "../molecules/FormsStyle.css";

class LogFormsTitle extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      firstTitleWord: '',
      secondTitleWord: ''
    }
  }

  render(){
    return(
        <h2 className="LogFormsTitle">
          {this.props.firstTitleWord}<span className="FormsTitleStyle">{this.props.secondTitleWord}</span>
        </h2>
    );
  }
}

export default LogFormsTitle;