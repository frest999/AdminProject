import React from 'react';
import "./MainStartForm.css";
import Tabs from "../organisms/TabsBlock";

class MainStartForm extends React.Component{

  componentWillMount() {
    if (localStorage.getItem('userCheck')) {
      return (
          this.props.history.push('/')
      )
    }
  }

  render(){
    return(
     <section className='MainLogSection'>
      <header className='TabsHeader'>
        <div className="TabsLogo">
          <img src='../../img/main-logo.png' alt="Mercury"/>
        </div>
        <div>
          <Tabs/>
        </div>
      </header>
     </section>
    )
  }
}

export default MainStartForm;