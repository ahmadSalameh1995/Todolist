import React from "react";
import './Todoitem.css'
const TodoItem = (props) => {
  const { items, deleteItem } = props;

  let listItems = items.length ? (
    items.map((item) => {
      return (
        <div key={item.id}>
          <span className="name">{item.name}</span>
          <span className="age">{item.age}</span>
          <span className="action icon" onClick={() => { deleteItem(item.id) }}>&times;</span>
        </div>
      )
    })
  ) : (
    <p>There are no items to show</p>
  );

  return (
    <div className="listitem">
      <div>
        <span className="name title ">Name</span>
        <span className="age title ">Age</span>
        <span className="action title ">Action</span> 
      </div>
      {listItems}
    </div>
  );
};

export default TodoItem;
