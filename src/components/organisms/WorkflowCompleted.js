import React from 'react';
import DragAndDrop from "../atoms/DragAndDrop/DragAndDrop";

class WorkflowCompleted extends React.Component {
  render() {
    return (
        <div className="CompletedBlock">
          <div className="TitleBlock">
            <h2 className="WorkflowTitle">Completed
              <span className="CountTextTask">({this.props.data.length})</span>
            </h2>
          </div>
          <DragAndDrop items={this.props.data}/>
        </div>
    )
  }
}

export default WorkflowCompleted;