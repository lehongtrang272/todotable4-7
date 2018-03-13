import React, { Component } from 'react';
import './App.css';
import TodoTable from './TodoTable';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {date:'', description: '', todos: []}
  }

  inputChanged = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  addTodo = (event) => {
    event.preventDefault();
    const newToDo = {description:this.state.description, date:this.state.date};
    this.setState({
      todos: [...this.state.todos, newToDo]
    });
  }
  deleteTodo = (event) => {
    const index = parseInt(event.target.id);
    console.log(index + 1);
    this.setState({
      todos: this.state.todos.filter((todo, i) => i !== index)
    })
  }
  

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Simple Todolist</h2>
          </div>
          <div>
          <form onSubmit={this.addTodo}>Date:
            <input type="text" name="date" onChange={this.inputChanged} value={this.state.date}/> Description
            <input type="text" name="description" onChange={this.inputChanged} value={this.state.description}/>
            <input type="submit" value="Add"/>
          </form>
          </div>
          <div>
          <TodoTable deleteTodo = {this.deleteTodo} todos={this.state.todos} />
        </div>          
      </div>    
    );
  }
}

export default App;