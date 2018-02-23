import React from 'react';
import './ProfileOptions.css';
import { withRouter } from 'react-router';


class ProfileOptions extends React.Component{

  constructor(){
    super();
    this.state = {
      OptionDropDown: false
    }
  }

  handleOptionDrop =()=>{
    this.setState({
      OptionDropDown: !this.state.OptionDropDown
    })
  };

  SignOut =()=>{
    localStorage.clear("username");
    localStorage.clear("password");
    this.props.history.push('/login');
  };

  render(){
    let OptionDrop;
    if(this.state.OptionDropDown) {
      OptionDrop = (
          <ul className="ProfileMenu">
            <li>Settings</li>
            <li>Contacts</li>
            <li><button className="signOutBtn" onClick={this.SignOut}>Sign out</button></li>
          </ul>
      );
      console.log(this.state.OptionDropDown);
    }
    return(
        <div>
          <button className={'ProfileOptionsBtn'} onClick={this.handleOptionDrop}></button>
           {OptionDrop}
        </div>
    );
  }
}



export default withRouter(ProfileOptions);