import React from 'react';
import './Box.css';

class BoxNotification extends React.Component{
  render(){
    return(
        <div className="BoxNotification">
         {this.props.children}
       </div>
    )
  }
}

export default BoxNotification;