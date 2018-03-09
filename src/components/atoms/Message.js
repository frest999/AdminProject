import React from 'react';
import '../pages/GeneralStyles.css';
import './Message.css';

class Message extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      messageBlockClass: '',
      nameUser: '',
      messageTime: '',
      messageText: '',
      userIcon: ''
    }
  }


  render(){
    return(
      <div className={this.props.messageBlockClass}>
        <div className="UserIconBox">
          <img src={this.props.userIcon} alt=""/>
        </div>
        <div className="MessageInfo">
          <p className="MessageUserName">{this.props.nameUser}<span className="MessageTime">{this.props.messageTime}</span></p>
          <p className="MessageText">{this.props.messageText}</p>
          <button className="Btn MessageBtnIcon MessageBtnArrow"></button>
          <button className="Btn MessageBtnIcon MessageBtnSettings"></button>
        </div>
      </div>
    )
  }
}

export default Message;