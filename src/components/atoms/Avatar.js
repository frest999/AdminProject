import React from 'react';
import './Avatar.css';


class Avatar extends React.Component{
  render(){
    return(
        <div className='ProfileImgBlock'>
          <img src='img/log-avatar.png' alt='Profile Avatar'/>
        </div>
    );
  }
}



export default Avatar;