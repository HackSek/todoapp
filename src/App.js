import React, {
  Component
} from 'react';
import {
  TodoItem
} from './todoItem';
import {
  AddItem
} from './addItem';
import './App.css';
class TodoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }
  render() {
    var todos = this.state.todos;
    todos = todos.map(function(item, index) {
        return ( < TodoItem key = {
            index
          }
          item = {
            item
          }
          onDelete = {
            this.onDelete
          }
          />);
        }.bind(this));
      return ( < div id = "todo-list" > < p > Celui qui veut réussir trouve un moyen.Celui qui veut rien faire trouve une excuse. < /p> < ul > {
          todos
        } < /ul> < AddItem onAdd = {
          this.onAdd
        }
        /> < /div>);
    }
    onDelete(item) {
      var updatedTodos = this.state.todos.filter(function(val, index) {
        return item !== val;
      });
      this.setState({
        todos: updatedTodos
      });
    }
    onAdd(item) {
      var updatedTodos = this.state.todos;
      updatedTodos.push(item);
      this.setState({
        todos: updatedTodos
      });
    }
  }
  export default TodoComponent;