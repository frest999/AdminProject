import React from 'react';
import './MainLogo.css';

class MainLogo extends React.Component{
  render(){
    return(
        <div className='MainLogoBlock'>
        <img src='img/main-logo.png' alt='main-logo'/>
        <h1 className='hiddenText'>Mercury</h1>
        </div>
    );
  }
}



export default MainLogo;