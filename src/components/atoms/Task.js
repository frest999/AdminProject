import React from 'react';
import "./Task.css";

class Task extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      classTask: '',
      taskDropDown: false,
      descriptionTask: '',
      descriptionTimeClass: '',
      descriptionTime: '',
      iconTask: this.props.descriptionTask.charAt(0)
    }
  }

  handleDropDown =()=> {
    this.setState({
      taskDropDown: !this.state.taskDropDown
    });
  };

  render(){
    let dropItemTask;
    if(this.state.taskDropDown){
      dropItemTask =
        <ul className="dropItemTask">
          <li>Add Prioritet</li>
          <li>Delete</li>
          <li>Read more </li>
        </ul>
    }
    return(
      <div className={this.props.classTask}>
        <p className="IconTask">{this.state.iconTask}</p>
        <div className="TaskNameBlock">
          <p className="TaskDescription">{this.props.descriptionTask}</p>
          <p className={this.props.descriptionTimeClass}>{this.props.descriptionTime}</p>
          <button onClick={this.handleDropDown} className="Btn BtnTaskMenu"></button>
        </div>
        {dropItemTask}
      </div>
    )
  }
}

export default Task;