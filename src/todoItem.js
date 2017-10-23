import React, { Component } from 'react';
import './todoItem.css';


export class TodoItem extends Component {

    constructor(props) {
     super(props);

     this.handleDelete = this.handleDelete.bind(this);
    

    }

    render(){

     return(
      
       
            <li>
                <div className="todo-item">
                    <span className="item-name" ref="thisItem">{this.props.item}</span>
                    <span className="item-remove" onClick={this.handleDelete}> x </span>
                </div>
            </li>

     );
    

    }

    handleDelete() {
        
             this.props.onDelete(this.props.item);
        
    }

}