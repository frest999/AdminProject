import React from 'react';


import './GeneralStyles.css';
import Basic from '../atoms/BigCalendar/MyCalendar';


class Calendar extends React.Component {
  render() {
    return (
        <div className="content">
          <Basic/>
        </div>
    );
  }
}

export default Calendar;
