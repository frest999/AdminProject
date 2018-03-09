import React from 'react';
import {NavLink} from 'react-router-dom';
import MainLogo from "../atoms/MainLogo";
import "./LeftNavBar.css";

class LeftNavBar extends React.Component{
  render(){
    return(
        <div>
          <MainLogo/>
         <nav>
          <ul className="MainNav">
            <li><NavLink to='/' exact className='LeftBarIcon Home' activeClassName={'ActiveMainNav'}>Home</NavLink></li>
            <li><NavLink to='/workflow' className='LeftBarIcon Workflow' activeClassName={'ActiveMainNav'}>Workflow</NavLink></li>
            <li><NavLink to='/statistics' className='LeftBarIcon Statistics' activeClassName={'ActiveMainNav'}>Statistics</NavLink></li>
            <li><NavLink to='/calendar' className='LeftBarIcon Calendars' activeClassName={'ActiveMainNav'}>Calendar</NavLink></li>
            <li><NavLink to='/users' className='LeftBarIcon User' activeClassName={'ActiveMainNav'}>Users</NavLink></li>
            <li><NavLink to='/settings' className='LeftBarIcon Settings' activeClassName={'ActiveMainNav'}>Settings</NavLink></li>
          </ul>
         </nav>
        </div>
    );
  }
}

export default LeftNavBar;