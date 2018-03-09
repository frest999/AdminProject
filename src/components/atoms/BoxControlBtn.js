import React from 'react';
import "./BoxControlBtn.css";

class BoxControlBtn extends React.Component{
  constructor(props){
    super(props);
    this.state={
      controlBtnClass: ''
    }
  }

  render(){
    return(
        <button className={this.props.controlBtnClass}></button>
    )
  }
}

export default BoxControlBtn;


