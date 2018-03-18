import React from 'react';
import Sortable from 'react-sortablejs';

const DragAndDrop = ({items}) => {

  items = items.map((item, id) => (

      <div key={id} className={item.classTask}>
        <p className="IconTask">{item.descriptionTask.charAt(0)}</p>
        <div className="TaskNameBlock">
          <p className="TaskDescription">{item.descriptionTask}</p>
          <p className={item.descriptionTimeClass}>{item.descriptionTime}</p>
          <button className="Btn BtnTaskMenu"></button>
        </div>
      </div>
  ));

  return (
      <Sortable options={{group: 'shared'}}>
        {items}
      </Sortable>
  );
};

export default DragAndDrop;