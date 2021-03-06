import React, {
  Component
} from 'react';
import './addItem.css';
export class AddItem extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    return ( < form id = "add-todo"
      onSubmit = {
        this.handleSubmit
      } > < input type = "text"
      required ref = "newItem" / > < input type = "submit"
      value = "Ajouter" / > < /form>);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.onAdd(this.refs.newItem.value);
    document.getElementById("add-todo")
      .reset();
  }
}