import React from 'react';
import DragAndDrop from "../atoms/DragAndDrop/DragAndDrop";

class WorkflowInProgress extends React.Component {
  render() {
    return (
        <div className="ProgressBlock">
          <div className="TitleBlock">
            <h2 className="WorkflowTitle">In progress
              <span className="CountTextTask">({this.props.data.length})</span>
            </h2>
          </div>
          <DragAndDrop items={this.props.data}/>
        </div>
    )
  }
}

export default WorkflowInProgress;