import React, { Component } from 'react';

import People from './People';
class App extends Component {
  // Classes must have constructors if initial variables are to be set automatically
  constructor() {
    // calls the constructor for the parent (Component) class
    super();
    // sets the initial state to include these items
    this.state = {
      nameInput: '',
      ageInput: 21,
      people: [
        { name: 'Alex', age: 21 },
        { name: 'Ben', age: 18 },
        { name: 'Abe', age: 31 }
      ]
    };
  }

  // Function used to add a person to the state's people array
  addPerson = (event) => {
    event.preventDefault();
    const people = this.state.people.slice();
    const person = {
      name: this.state.nameInput,
      age: this.state.ageInput
    };

    people.push(person);
    this.setState({ people, nameInput: '', ageInput: 38 });
  };

  // Function used to remove people from the state's people array  
  deletePerson = (index) => {
    // filters out the people array removing the element with the passed index
    const people = this.state.people.filter((person, i) => i !== index)
    this.setState({ people });
  };

  // Event called When the name input is changed
  onNameChange = (event) => {
    // updates the state to match the event target value
    this.setState({ nameInput: event.target.value });

  }

  // event called when the age input is changed
  onAgeChange = event => {
    this.setState({ ageInput: event.target.value });
  }

  // returns a form with a name and age input
  renderForm() {
    return (
      <form onSubmit={this.addPerson}>
        <label>Name: </label>
        <input type="text" value={this.state.nameInput} onChange={this.onNameChange} /><br />
        <label>Age: </label>
        <input type="number" value={this.state.ageInput} onChange={this.onAgeChange} />
        <input type="submit" />
      </form>
    );
  }

  // Method to render a span containing the name and age of the youngest person in the state's people array
  getYoungest() {
    let youngest = this.state.people.reduce((max, p) => (p.age < max.age) ? p : max, this.state.people[0]);
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
