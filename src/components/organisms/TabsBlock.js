import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
import './TabsBlock.css';
import LogForms from "../molecules/LogForms";
import LogFormsTitle from "../atoms/LogFormsTitle";
import RegistrationForm from "../molecules/RegistrationForm";


class TabsBlock extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render(){
    return(
        <MuiThemeProvider>
          <Tabs
              className="TabsBlock"
              tabItemContainerStyle={{
                width: "350px",
                backgroundColor: "",
                height: "100px"
              }}
              contentContainerClassName="TabsContent"
              inkBarStyle={{
                backgroundColor: "#5584ff",
                height: "10px"
              }}
              value={this.state.value}
              onChange={this.handleChange}
          >
            <Tab label="Register" value="b">
              <div>
                <LogFormsTitle firstTitleWord="Registration" secondTitleWord=" Form"/>
                <RegistrationForm/>
              </div>
            </Tab>
            <Tab label="Login" value="a">
              <div>
                <LogFormsTitle firstTitleWord="Welcome" secondTitleWord=" back!"/>
                <LogForms/>
              </div>
            </Tab>
          </Tabs>
        </MuiThemeProvider>
    )
  }
}

export default TabsBlock;