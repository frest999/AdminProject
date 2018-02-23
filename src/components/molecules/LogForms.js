import React from 'react';
import "./FormsStyle.css";
import EnterBtn from "../atoms/EnterBtn";
import { withRouter } from 'react-router';

class LogForms extends React.Component{

  constructor(props){
    super(props);
    this.state={
      username: '',
      password: '',
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let userData = {
      login: this.state.username,
      pass: this.state.password
    };

    fetch('/api/auth', {
      headers: {
        'Content-type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify(userData),
    })
        .then(res => res.json())
        .then(res => {
          if (res.check) {
            JSON.stringify(localStorage.setItem("userCheck", res.check));
            JSON.stringify(localStorage.setItem("username", this.state.username));
            console.log(this.state.username);
            this.props.history.push('/')
          } else {
            this.setState({
              username: '',
              password: '',
            });
          }
        });
  };



  handleChange = (e) => {
    let name = e.target.name;
    this.setState({
      [name]: e.target.value
    })
  };

  render(){

    return(
      <form onSubmit={this.handleSubmit}>
        <div className='BrandInputBlock'>
          <div className="UsernameIcon">
            <input
                type="text"
                name='username'
                value={this.state.username}
                onChange={this.handleChange}
                placeholder="Username"
                className="BrandInput"
            />
          </div>
          <div className="PasswordIcon">
            <input
                type="password"
                name='password'
                value={this.state.password}
                onChange={this.handleChange}
                placeholder="Password"
                className="BrandInput"/>
          </div>
        </div>
        <EnterBtn/>
      </form>
    );
  }
}

export default withRouter(LogForms);