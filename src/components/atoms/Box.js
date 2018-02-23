import React from 'react';
import './Box.css';

class Box extends React.Component{
  constructor(props){
    super(props);
    this.state={
      boxWidth: ''
    }
  }
  render(){
    return(
      <div className={this.props.boxWidth}>
        {this.props.children}
      </div>
    )
  }
}

export default Box;