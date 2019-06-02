import React, { Component } from 'react';

class App extends Component {
  // Classes must have constructors if initial variables are to be set automatically
  constructor () {
    super();
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

  deletePerson (index) {
    const { people } = this.state;
    people.splice(index, 1);
    this.setState({ people });
  }

  // Class based method to render each person's name and age
  getPeople () {
    let people = this.state.people;
    let that = this;
    return people.map(function (person, index) {
      return (
        <div key={index}>
          <h2>{person.name} <div onClick={() => { that.deletePerson(index); }}>delete</div></h2>
          <p>{person.age}</p>
        </div>
      );
    });
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
  }

  renderForm () {
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
  getYoungest () {
    let people = this.state.people;
    let youngest = people[0];
    for (let i = 0; i < people.length; i++) {
      if (people[i].age < youngest.age) {
        youngest = people[i];
      }
    }
    return (
      <div>
        <h1>{youngest.name}</h1>
        <p>{youngest.age}</p>
      </div>
    );
  }

  render () {
    return <div>
      <h1>{this.props.greeting}</h1>
      <h2>Add Person: </h2>
      <div>{this.renderForm()}</div>
      <div>{this.getPeople()}</div>
    </div>;
  }
}

export default App;
