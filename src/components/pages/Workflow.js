import React from 'react';

import './Workflow.css';
import './GeneralStyles.css';
import Task from "../atoms/Task";

class Workflow extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      toDoTask: [
        {
          _id: "toDoTask1",
          classTask: "TaskBlock TaskWorkflow",
          descriptionTask:"New website for JCD.pl",
          descriptionTimeClass: "TaskTimeLeft",
          descriptionTime:"5 days left"
        },
        {
          _id:"toDoTask2",
          classTask: "TaskBlock TaskWorkflow",
          descriptionTask:"Free PSD Template vol. 3",
          descriptionTimeClass: "TaskTimeLeft",
          descriptionTime:"5 days left"
        },
        {
          _id:"toDoTask3",
          classTask: "TaskBlock TaskWorkflow",
          descriptionTask:"New logo for Google",
          descriptionTimeClass: "TaskTimeLeft",
          descriptionTime:"5 days left"
        },
        {
          _id:"toDoTask4",
          classTask: "TaskBlock TaskWorkflow",
          descriptionTask:"New website for Windu.org",
          descriptionTimeClass: "TaskTimeLeft",
          descriptionTime:"5 days left"
        },
        {
          _id:"toDoTask5",
          classTask: "TaskBlock TaskWorkflow",
          descriptionTask:"Free PSD Template vol. 2",
          descriptionTimeClass: "TaskTimeLeft",
          descriptionTime:"5 days left"
        },
        {
          _id:"toDoTask6",
          classTask: "TaskBlock TaskWorkflow",
          descriptionTask:"Iconset Vol. 3",
          descriptionTimeClass: "TaskTimeLeft",
          descriptionTime:"5 days left"
        }
      ],
      inProgress: [
        {
          _id:"inProgress1",
          classTask: "TaskBlock TaskWorkflow",
          descriptionTask:"New logo for Apple",
          descriptionTimeClass: "TaskTimeLeft",
          descriptionTime:"1 days left"
        },
        {
          _id:"inProgress2",
          classTask: "TaskBlock TaskWorkflow",
          descriptionTask:"Daily UI Kit",
          descriptionTimeClass: "TaskTimeLeft",
          descriptionTime:"5 days left"
        },
        {
          _id:"inProgress3",
          classTask: "TaskBlock TaskWorkflow",
          descriptionTask:"Business Cards",
          descriptionTimeClass: "TaskDelay",
          descriptionTime:"5 days delays"
        }
      ],
      completed: [
        {
          _id:"completed1",
          classTask: "TaskBlock TaskWorkflow",
          descriptionTask:"Free PSD Template vol. 1",
          descriptionTimeClass: "TaskComplete",
          descriptionTime:"Completed"
        },
        {
          _id:"completed2",
          classTask: "TaskBlock TaskWorkflow",
          descriptionTask:"Iconset vol. 1",
          descriptionTimeClass: "TaskComplete",
          descriptionTime:"Completed"
        },
        {
          _id:"completed3",
          classTask: "TaskBlock TaskWorkflow",
          descriptionTask:"New website for Symu.co",
          descriptionTimeClass: "TaskComplete",
          descriptionTime:"Completed"
        },
        {
          _id:"completed4",
          classTask: "TaskBlock TaskWorkflow",
          descriptionTask:"Iconset vol. 2",
          descriptionTimeClass: "TaskComplete",
          descriptionTime:"Completed"
        }
      ]
    };
  }

  render() {

    return (
          <div className='content'>
            <div className="WorkflowInfoBlock">
              <div className="ToDoBlock">
                <div className="TitleBlock">
                  <h2 className="WorkflowTitle">To do
                    <span className="CountTextTask">({this.state.toDoTask.length})</span>
                  </h2>
                </div>
                {
                  this.state.toDoTask.map((item,id) => {
                    return(
                        <Task key={id}
                              classTask={item.classTask}
                              descriptionTask={item.descriptionTask}
                              descriptionTimeClass={item.descriptionTimeClass}
                              descriptionTime={item.descriptionTime}
                        />
                    )
                  })
                }
              </div>
              <div className="ProgressBlock">
                <div className="TitleBlock">
                  <h2 className="WorkflowTitle">In progress
                    <span className="CountTextTask">({this.state.inProgress.length})</span>
                  </h2>
                </div>
                {
                  this.state.inProgress.map((item,id) => {
                    return(
                        <Task key={id}
                              classTask={item.classTask}
                              descriptionTask={item.descriptionTask}
                              descriptionTimeClass={item.descriptionTimeClass}
                              descriptionTime={item.descriptionTime}
                        />
                    )
                  })
                }
              </div>
              <div className="CompletedBlock">
                <div className="TitleBlock">
                  <h2 className="WorkflowTitle">Completed
                    <span className="CountTextTask">({this.state.completed.length})</span>
                  </h2>
                </div>
                {
                  this.state.completed.map((item,id) => {
                    return(
                        <Task key={id}
                              classTask={item.classTask}
                              descriptionTask={item.descriptionTask}
                              descriptionTimeClass={item.descriptionTimeClass}
                              descriptionTime={item.descriptionTime}
                        />
                    )
                  })
                }
              </div>

            </div>
          </div>
    );
  }
}

export default Workflow;
