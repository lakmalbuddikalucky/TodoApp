import React, { Component } from 'react';

// CLASS TO DISPLAY TODO ITEMS // 
class todoItem extends Component {
	deleteTodo(todo){
		this.props.onDelete(todo)
	}

  // This section would render the Add Todo section on the HTML // 
  render() {
    return (
      <li className="todoItem">
        <strong>{this.props.todo.title}</strong><a href="#" onClick={this.deleteTodo.bind(this,this.props.todo)}>X</a>
      </li>
    );
  }
}

//Good practice to define items like this
todoItem.propTypes = {
  todo: React.PropTypes.object,
  onDelete: React.PropTypes.func
}

export default todoItem;
