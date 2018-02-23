import React from 'react';

class LeftBarBtn extends React.Component{
  handleToggle = () => this.setState({open: !this.state.open});
  render(){
    return(
        <div>
          <button onClick={()=> this.handleToggle()} className={'LeftBarBtn'}>s</button>
        </div>
    )
  }
}

export default LeftBarBtn;