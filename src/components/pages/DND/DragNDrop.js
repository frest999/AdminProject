// import React, {Component} from 'react';
// import {render} from 'react-dom';
// import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
//
// const SortableItem = SortableElement(({value}) => <li>{value}</li>);
//
// const SortableList = SortableContainer(({items}) => {
//   return (
//       <ul>
//         {items.map((value, index) => (
//             <SortableItem key={`item-${index}`} index={index} value={value} />
//         ))}
//       </ul>
//   );
// });
//
// class SortableComponent extends Component {
//   state = {
//     items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
//   };
//   onSortEnd = ({oldIndex, newIndex}) => {
//     this.setState({
//       items: arrayMove(this.state.items, oldIndex, newIndex),
//     });
//   };
//   render() {
//     return <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />;
//   }
// }
//
// export default SortableComponent;

import React, {Component} from 'react';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import './AA.css';

const SortableItem = SortableElement(({value}) => <div className="box">{value}</div>);

const SortableList = SortableContainer(({items}) => {
  return (
      <div className="container">
        {items.map((item, index) => {
          return <SortableItem key={`item-${index}`} index={index} value={item} />;
        })}
      </div>
  );
});

class Boxs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ['Box 1', 'Box 2', 'Box 3', 'Box 4']
    }
  }

  onSortEnd({oldIndex, newIndex}) {
    this.setState({
      list: arrayMove(this.state.list, oldIndex, newIndex)
    });
  }

  render() {
    return (
        <div>
          <SortableList items={this.state.list} onSortEnd={this.onSortEnd.bind(this)} axis='xy' />
        </div>
    );
  }
};


class MainComponent extends React.Component {
  render() {
    return (
        <div>
          <Boxs />
        </div>
    );
  }
};

export default MainComponent;
