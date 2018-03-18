import React from 'react';
import DragAndDrop from "../atoms/DragAndDrop/DragAndDrop";

class WorkflowToDo extends React.Component {
  render() {
    return (
        <div className="WorkflowInfoBlock">
          <div className="ToDoBlock">
            <div className="TitleBlock">
              <h2 className="WorkflowTitle">To do
                <span className="CountTextTask">({this.props.data.length})</span>
              </h2>
            </div>
            <DragAndDrop items={this.props.data}/>
          </div>
        </div>
    )
  }
}

export default WorkflowToDo;