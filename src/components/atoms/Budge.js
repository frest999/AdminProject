import React from 'react';

import './Budge.css';

class Budge extends React.Component{
  render(){
    return(
        <div className='BudgeBlock'>
          <button className='HeaderBadgeBtn'></button>
          <span className={'NotificationItem'}>{3}</span>
        </div>
    );
  }
}


export default Budge;