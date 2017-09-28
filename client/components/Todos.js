import React,{Component} from 'react';
import TodoItem from './TodoItem';

// STYLES FOR ADDTODO COMPONENT //
const h1Div = {
  textShadowColor: '#696969',
  textAlign: 'center',
  color: '#ffffff'
};

const TodosDiv = {
    backgroundColor: '#000000',
    height:45,
    flex:1, 
    textAlign: 'center'
};

// CLASS TO DISPLAY TODOS //
class Todos extends Component {

  deleteTodo(todo){
    this.props.onDelete(todo);
  }

  // This section would render the Add Todo section on the HTML // 
  render() {
  	//should be within render
  	let todoItems;
    console.log(this.props.todos);
  	if(this.props.todos instanceof Array){
  		todoItems = this.props.todos.map(todo =>{
  			return(
          <TodoItem onDelete={this.deleteTodo.bind(this)} key={todo.id} todo={todo}/>
        );
  		});
  	}
  	
    return (
      <div style={TodosDiv} className="Todos">
        <h1 style={h1Div}>Latest Todos</h1>
        {todoItems}
      </div>
    );
  }
}

export default Todos;
