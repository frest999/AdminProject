import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PrivateLayout from "./PrivateLayuot";
import MainStartForm from "./components/pages/MainStartForm";
import NotFound from "./components/pages/NotFound";
import Home from "./components/pages/Home";
import Workflow from "./components/pages/Workflow";
import Statistics from "./components/pages/Statistics";
import Calendar from "./components/pages/Calendar";
import Users from "./components/pages/Users";
import Settings from "./components/pages/Settings";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={MainStartForm}/>

          <PrivateLayout exact path="/" component={Home}/>
          <PrivateLayout exact path="/workflow" component={Workflow}/>
          <PrivateLayout exact path="/statistics" component={Statistics}/>
          <PrivateLayout exact path="/calendar" component={Calendar}/>
          <PrivateLayout exact path="/users" component={Users}/>
          <PrivateLayout exact path="/settings" component={Settings}/>
          <PrivateLayout component={NotFound}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
