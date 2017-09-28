import React, { Component } from 'react'; 
import uuid from 'uuid';

// STYLES FOR ADDTODO COMPONENT // 
const AddTodoDiv = {
    backgroundColor: '#000000',
    height:90,
    flex:1, 
    textAlign: 'center'
};

const h1Div = {
  textShadowColor: '#696969',
  textAlign: 'center',
  color: '#ffffff'
};

const h5Div = {
  textShadowColor: '#696969',
  textAlign: 'center',
  color: '#ffffff'
};

const textInput = {
    marginTop: 10,
    marginBottom: 10,
    paddingTop:20,
    paddingBottom:20,
    backgroundColor:'#ffffff',
    borderRadius:10,
    borderWidth: 2,
    borderColor: '#eeeeee',
    color: '#000000',
    placeHolder: 'Type your todo',
    textAlign: 'center', 
    fontSize: 14,
    width: 1000
};

const button = {
    paddingTop:20,
    paddingBottom:20,
    backgroundColor:'#ffffff',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#000000',
    color: '#000000',
    placeholder: 'Submit',
    textAlign: 'center',
    width: 300,
    font: 'calibri'
};

const buttonText = {
      color:'#fff',
      textAlign:'center',
};

// CLASS TO ADD TODOS //
class AddTodo extends Component {
  constructor(){
    super();
    this.state = {
      newTodo:{}
    }
  }

  // submit button click handler //
  handleSubmit(e){
    if(this.refs.title.value){
      this.setState({newTodo:{
        title: this.refs.title.value,
        id: uuid.v4(),
      }}, function(){
        this.props.addTodo(this.state.newTodo);
      });
    }
    else{
      alert("Please enter the title");
    }
    e.preventDefault();
  }

  // This section would render the Add Todo section on the HTML // 
  render() {
    return (
      <div style={AddTodoDiv}>
        <h1 style={h1Div}>Add Todos</h1>
        <h5 style={h5Div}>by Lakmal Buddika Meegahapola</h5>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <input style={textInput} type="text" ref="title" />
            <br/>
            <input style={button} type="submit" value="Submit"/>
          </div>
        </form>
      </div>
    );
  }
}

export default AddTodo;
