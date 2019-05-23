import React, { Component } from 'react';

class App extends Component {
  // Classes must have constructors if initial variables are to be set automatically
  constructor () {
    super();
    this.state = {
      greeting: 'We did it!',
      people: [
        { name: 'Alex', age: 21 },
        { name: 'Ben', age: 18 },
        { name: 'Abe', age: 31 }
      ]
    };
  }

  // Class based method to render each person's name and age
  getPeople () {
    let people = this.state.people;
    return people.map(function (person) {
      return (
        <div key={person.name}>
          <h2>{person.name}</h2>
          <p>{person.age}</p>
        </div>
      );
    });
  }

  // Method to render a div countaining the name and age of the youngest person in the state's people array
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
    return <div>{this.getPeople()}</div>;
  }
}

export default App;
