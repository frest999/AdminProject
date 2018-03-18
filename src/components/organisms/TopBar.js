import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import './TopBar.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//components
import '../atoms/LeftBarBtn.css';
import Avatar from "../atoms/Avatar";
import ProfileOptions from "../molecules/ProfileOptions";
import BrandBtn from "../atoms/AddBtn";
import MessageHeaderIcon from "../atoms/MessageHeaderIcon";
import LeftNavBar from '../molecules/LeftNavBar';
import Budge from "../atoms/Budge";

export default class TopBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});



  render() {
    return (
        <MuiThemeProvider>
          <div>
            <AppBar
                className={'AppBar'}
                iconClassNameLeft="LeftBarBtn"
                style={{backgroundColor: '#fff',
                  padding: '30px 80px'}}
                onLeftIconButtonClick={()=> this.handleToggle()}
                iconClassNameRight="muidocs-icon-navigation-expand-more">
            <BrandBtn/>
            <MessageHeaderIcon/>
            <Budge/>
            <Avatar/>
            <ProfileOptions/>
            </AppBar>
            <Drawer open={this.state.open} containerStyle={{backgroundColor: "#0e1a35"}}
                    docked={false}
                    onRequestChange={()=> this.handleToggle()}>
              <LeftNavBar/>
            </Drawer>
          </div>
        </MuiThemeProvider>
    );
  }
}