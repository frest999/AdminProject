import React from 'react';
import './Calendar.css'
import BigCalendar from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'react-moment';

BigCalendar.momentLocalizer(moment);

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

const events = [
  {
    title: 'Meeting with Den Smith',
    allDay: true,
    start: new Date(2018, 1, 26),
    end: new Date(2018, 1, 26),
  },
  {
    title: 'Team Meeting',
    start: new Date(2018, 2, 2),
    end: new Date(2018, 2, 2),
  },

  {
    title: 'Show guys how to...',
    start: new Date(2018, 2, 2),
    end: new Date(2018, 2, 2),
  },

  {
    title: 'New WebSite presentation',
    start: new Date(2018, 2, 8),
    end: new Date(2018, 2, 8),
  },

  {
    title: 'Meeting with Google CEO',
    start: new Date(2018, 2, 16),
    end: new Date(2018, 2, 16),
  },
  {
    title: 'Report',
    start: new Date(2018, 2, 19),
    end: new Date(2018, 2, 19),
    desc: 'Big conference for important people',
  },
  {
    title: 'Team meeting',
    start: new Date(2018, 2, 21),
    end: new Date(2018, 2, 21),
    desc: 'Pre-meeting meeting, to prepare for the meeting',
  },
  {
    title: 'Call to John',
    start: new Date(2018, 2, 21),
    end: new Date(2018, 2, 21),
    desc: 'Power lunch',
  }
];

class MyCalendar extends React.Component {
  render() {
    return (
        <div className='Calendar'>
            <BigCalendar
                events={events}
                views={allViews}
                step={60}
                showMultiDayTimes
                defaultDate={new Date(2018, 2, 9)}
            />
        </div>

    )
  }
}

export default MyCalendar;