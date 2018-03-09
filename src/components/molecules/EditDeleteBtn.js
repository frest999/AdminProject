import React from 'react';
import "./EditDeleteBtn.css";
import BoxControlBtn from "../atoms/BoxControlBtn";

class EditDeleteBtn extends React.Component{
  render(){
    return(
        <div className="EditDeleteBtn">
          <BoxControlBtn controlBtnClass="BoxControlBtn BoxControlIcon BoxEditBtn"/>
          <BoxControlBtn controlBtnClass="BoxControlBtn BoxControlIcon BoxDeleteBtn"/>
        </div>
    )
  }
}

export default EditDeleteBtn;


