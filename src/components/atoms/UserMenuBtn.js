import React from 'react';
import '../atoms/UserTable/UserTable.css';
class UserMenuBtn extends React.Component{

  constructor(props){

    super(props);
    this.state={
      userMenuDrop: false
    }
  }

  handleMenuDrop =()=> {
    this.setState({
      userMenuDrop: !this.state.userMenuDrop
    })
  };

  render(){
    let ItemsDrop;
    if(this.state.userMenuDrop){
      ItemsDrop =
          <ul className="UserMenuItems">
            <li><p>Details</p></li>
            <li><p>Settings</p></li>
            <li><p>Send Message</p></li>
          </ul>
    }

    return(
        <div className="UserTableMenu ColumnsUserTable">
          <button className="UserMenu" onClick={this.handleMenuDrop}></button>
          {ItemsDrop}
        </div>
    )
  }

}

export default UserMenuBtn;