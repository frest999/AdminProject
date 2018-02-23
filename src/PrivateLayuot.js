import React from 'react';
import { Route, Redirect} from 'react-router-dom';
import TopBar from "./components/organisms/TopBar";
import "./App.css";

class PrivateLayout extends React.Component {

  render ()  {
    const {component: Component, ...rest} =  this.props;
    return (
        <Route {...rest} render={() => {
          if (!localStorage.getItem('userCheck')){
            return <Redirect to="/login"/>
          }
          else if (localStorage.getItem('userCheck')) {
            return (
                <div>
                  <TopBar/>
                  <div className="MainStyle">
                    <Component/>
                  </div>
                </div>
            )
          }
        }}/>

    )
  };
}



export default PrivateLayout;