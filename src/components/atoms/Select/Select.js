import React from 'react';
import './Select.css';

class Select extends React.Component {

  render() {
    return (
        <div className={this.props.selectBlockClass}>
          <select onChange={this.props.onChange} className={this.props.selectClass}>
            {this.props.data.map((item, index) => {
              return (
                  <option key={index} value={item}>{item}</option>
              )
            })}
          </select>
        </div>
    )
  }
}

export default Select;