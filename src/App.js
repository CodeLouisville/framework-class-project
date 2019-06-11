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
      cellInput: 5555555555,
      people: []
    };
  }

  async componentDidMount() {
    const res = await fetch('https://randomuser.me/api/?nat=us&results=10')
    const json = await res.json()
    console.log(json.results)
    this.setState({ people: json.results })
  }

  // Function used to add a person to the state's people array
  addPerson = (event) => {
    event.preventDefault();
    const people = this.state.people.slice();
    const person = {
      name: { first: this.state.nameInput },
      dob: { age: this.state.ageInput },
      cell: this.state.cellInput
    };

    people.push(person);
    this.setState({ people, nameInput: '', ageInput: 38 });
  };

  // Function used to remove people from the state's people array  
  deletePerson = (index) => {
    console.log(index)
    // filters out the people array removing the element with the passed index
    const people = this.state.people.filter((person) => person.cell !== index)
    this.setState({ people });
  };

  // Event called When the cell input is changed
  onCellChange = (event) => {
    // updates the state to match the event target value
    this.setState({ cellInput: event.target.value });

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
        <input type="number" value={this.state.ageInput} onChange={this.onAgeChange} /><br />
        <label>Phone Number: </label>
        <input type="tel" value={this.state.cellInput} onChange={this.onCellChange} /><br />
        <input type="submit" />
      </form>
    );
  }

  // Method to render a span containing the name and age of the youngest person in the state's people array
  getYoungest() {
    let youngest = this.state.people.reduce((max, p) => (p.dob.age < max.dob.age) ? p : max, this.state.people[0]);
    return <span>{youngest.name.first}: Age {youngest.dob.age}</span>
  }


  render() {
    return (
      <div>
        <h1>React App</h1>
        {
          this.state.people.length > 0 && (
            <div>
              <h1>Youngest Person: {this.getYoungest()}</h1>
              <h2>Add Person: </h2>
              <div>{this.renderForm()}</div>
              <People people={this.state.people} deletePerson={this.deletePerson} />
            </div>)
        }
      </div>
    );
  }
}

// Exports the App to be usable by other components in the app
export default App;
