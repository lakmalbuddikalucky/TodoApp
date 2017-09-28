import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Todos from './Todos';
import AddTodo from './AddTodo';


// APP COMPONENTS // 
class App extends Component {

  constructor(){
    super();
    this.state = {
      todos:[]
    }
  }

  // Process the results from NLP operations and create a todo. //
  processResultFromNlp(data){
    let todos = this.state.todos;
    let output = "";
    let initialObject = data.sentences[0];
    for (var i = 0; i < initialObject.tokens.length; i++){
      output = output + initialObject.tokens[i].lemma+" ";
    }
    let todo = {title: output, id: uuid.v4()};
    this.setTodo(todo);
    todos.push(todo);
    this.setState({todos:todos})
  }

  // Process the input for Stop words and then lemmatize //
  nlpprocess(todo){
    $.post(
      'http://localhost:8000/api/nlp',
      todo,
      function(data, status){
        this.processResultFromNlp(data);
      }.bind(this));
  }

  // Ajax request to get the list of Todos from the Database //
  getTodos(){
    $.ajax({
      method: 'GET',
      url: 'http://localhost:8000/api/gettodos',
      dataType: 'json',
      cache: false,
      'Content-Type': 'application/json',
      json: true,
      success: function(data){
        this.setState({todos:data}, function(){
        });
      }.bind(this),
      error: function(xhr,status, err){
        console.log(err);
      }
    });
  }

  // Ajax request to put a new todo to the database //
  setTodo(todo){
    $.post(
      'http://localhost:8000/api/addtodo',
      todo,
      function(data, status){
      }.bind(this));
  }

  // Ajax request to delete a todo from the database
  deleteTodo(todo){
    $.post(
      'http://localhost:8000/api/deletetodo',
      todo,
      function(data, status){
      }.bind(this));
  }


  // A Lifecycle function
  componentWillMount(){
    this.getTodos();
  }

  // Another lifecycle function
  componentDidMount(){
    this.getTodos();
  }

  // Handle the event of adding a todo to the database
  handleAddTodo(todo){
    var sentences = todo.title.split('.');
    for (var i = 0; i < sentences.length; i++){
      this.nlpprocess({title:sentences[i]});
    }
  }

  //handle the event of deleting a todo from the database
  handleDeleteTodo(todo){
    let todos = this.state.todos;
    let index = todos.findIndex( x=> x.id === todo.id);
    todos.splice(index, 1);
    this.deleteTodo(todo);
    this.setState({todos:todos})
  }

  // This section would render the Add Todo section on the HTML // 
  render() {
    return (
      <div className="App">
        <div>
          <AddTodo todos={this.state.todos} addTodo={this.handleAddTodo.bind(this)}/>
        </div>
        <hr/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <div>
          <Todos todos={this.state.todos} onDelete={this.handleDeleteTodo.bind(this)}/>
        </div>
      </div>
    );
  }

}

export default App;
