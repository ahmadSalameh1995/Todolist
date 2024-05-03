import React, { Component } from "react";
import TodoItem from "./Components/Todoitem/Todoitem";
import Additem from "./Components/Additem/Additem";


class App extends Component {
  state = {
    items: [
      { id: 1, name: "ahmad1", age: "29" },
      { id: 2, name: "ahmad2", age: "30" },
      { id: 3, name: "ahmad3", age: "31" },
    ],
  };

  deleteItem = (id) => {
    let updatedItems = this.state.items.filter(item => item.id !== id);
    this.setState({ items: updatedItems });
  }

  AddItem = (item) => {
    item.id = Math.random();
    let updatedItems = [...this.state.items, item];
    this.setState({ items: updatedItems });
  }

  render() {
    return (
      <div className="App container">
      <h1 className="text-center">Todo Lost</h1>
        <TodoItem items={this.state.items} deleteItem={this.deleteItem} />
        <Additem AddItem={this.AddItem} />
      </div>
    );
  }
}

export default App;
