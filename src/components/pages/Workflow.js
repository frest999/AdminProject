import React from 'react';
import './GeneralStyles.css';
import './Workflow.css'
import WorkflowToDo from "../organisms/WorkflowToDo";
import WorkflowInProgress from "../organisms/WorkflowInProgress";
import WorkflowCompleted from "../organisms/WorkflowCompleted";

const workflowToDo =  [
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
];

const workflowProgress = [
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
];

const workflowCompleted = [
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
];

class Workflow extends React.Component {

  render() {
    return (
        <div className="content">
          <div className="WorkflowInfoBlock">
            <WorkflowToDo data={workflowToDo}/>
            <WorkflowInProgress data={workflowProgress}/>
            <WorkflowCompleted data={workflowCompleted}/>
          </div>
        </div>
    )
  }
}

export default Workflow;