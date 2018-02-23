import React from 'react';
import "./FormsStyle.css";
import EnterBtn from "../atoms/EnterBtn";

class RegistrationForm extends React.Component{

  constructor(props){
    super(props);
    this.state={
      username: '',
      password: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let userData = {
      username : this.state.username,
      password : this.state.password,
    };

    fetch('/api/user' , {
      headers: {
        'Content-type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify(userData),
    });


    this.setState({
      username: '',
      password: '',
    })
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

export default RegistrationForm;