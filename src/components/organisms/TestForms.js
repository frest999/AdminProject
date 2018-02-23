import React from 'react';
import '../pages/GeneralStyles.css';

class TestForms extends React.Component{

  constructor(props){
    super(props);
    this.state={
      username: '',
      password: ''
    }
  }


  handleSubmit =(e)=> {
    e.preventDefault();
    console.log('username - ', this.state.username, 'password - ', this.state.password);
    localStorage.setItem("username", JSON.stringify(this.state.username));
    localStorage.setItem("password", JSON.stringify(this.state.password));
  };

  handleChange =(e)=> {
    let name = e.target.name;
    this.setState({
      [name]: e.target.value
    })
  };

  render(){

    return(
        <div className='content'>
          <form onSubmit={this.handleSubmit} className='margin-bottom-30'>
            <h1 className='margin-bottom-30'>Registration</h1>
            <input type='text' name='username' value={this.state.username} onChange={this.handleChange}/>
            <input type='password' name='password' value={this.state.password} onChange={this.handleChange}/>
            <button>Submit</button>
          </form>
        </div>
    )
  }
}

export default TestForms;