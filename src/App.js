import React, { Component } from 'react';

import People from './People';
class App extends Component {
  // Classes must have constructors if initial variables are to be set automatically
  constructor() {
    // calls the constructor for the parent (Component) class
    super();
    // sets the initail state to include these items
    this.state = {
      nameInput: '',
      ageInput: '',
      people: [
        { name: 'Alex', age: 21 },
        { name: 'Ben', age: 18 },
        { name: 'Abe', age: 31 }
      ]
    };
  }

  addPerson = (event) => {
    event.preventDefault();
    const { people } = this.state;
    // const people = this.state.people;

    const person = {
      name: this.state.nameInput,
      age: this.state.ageInput
    };

    people.push(person);
    this.setState({ people, nameInput: '', ageInput: '' });
  };

  deletePerson = (index) => {
    const { people } = this.state;
    people.splice(index, 1);
    this.setState({ people });
  };

  renderForm() {
    return (
      <form onSubmit={this.addPerson}>
        <label>Name: </label>
        <input type='text' id='name' value={this.state.nameInput} onChange={(event) => {
          this.setState({ nameInput: event.target.value });
        }}
        />
        <label>Age: </label>
        <input type='text' id='age' value={this.state.ageInput} onChange={(event) => {
          this.setState({ ageInput: event.target.value });
        }}
        />
        <input type='submit' />
      </form>
    );
  }

  // Method to render a div containing the name and age of the youngest person in the state's people array
  getYoungest() {
    let youngest = this.state.people.reduce((max, p) => p.age < max.age ? p : max, this.state.people[0]);
    return <span>{youngest.name}: Age {youngest.age}</span>
  }

  render() {
    return (
      <div>
        <h1>Youngest Person: {this.getYoungest()}</h1>
        <h2>Add Person: </h2>
        <div>{this.renderForm()}</div>
        <People people={this.state.people} deletePerson={this.deletePerson} />
      </div>
    );
  }
}

// Exports the App to be usable by other components in the app
export default App;
