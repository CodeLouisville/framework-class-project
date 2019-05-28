import React, { Component } from 'react';

class App extends Component {
  // Classes must have constructors if initial variables are to be set automatically
  constructor() {
    super();
    // Sets the initial state for the App
    this.state = {
      nameInput: "",
      ageInput: 21,
      people: [
        { name: 'Alex', age: 21 },
        { name: 'Ben', age: 18 },
        { name: 'Abe', age: 31 }
      ]
    };
  }

  // Function called when adding a person from the form
  addPerson = (event) => {
    // prevents a page reload
    event.preventDefault();
    // Grabs people from the state object
    const { people } = this.state;
    // creates a new person with the current state values
    const person = {
      name: this.state.nameInput,
      age: this.state.ageInput
    };
    // Adds the new person 
    people.push(person);
    // Sets the state to include the new person and reset the inputs
    this.setState({ people, nameInput: "", ageInput: 21 });
  }

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

  // returns all people
  getPeople() {
    const { people } = this.state
    return people.map((person) => {
      return (
        <div className="person">
          <h2>{person.name}</h2>
          <p>{person.age}</p>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="App">
        {this.renderForm()}
        <div className="people">
          {this.getPeople()}
        </div>
      </div>
    );
  }
}

export default App;
