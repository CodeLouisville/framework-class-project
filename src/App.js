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

  // Class based method to log out all people over 18
  getOldPeople () {
    let people = this.state.people;
    let olds = [];
    for (let i = 0; i < people.length; i++) {
      if (people[i].age > 18) {
        olds.push(people[i]);
      }
    }
    return olds;
  }

  // Method to render a div countaining the name and age of the youngest person in the states people array
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
    console.log(this.getOldPeople());
    return <div>{this.getYoungest()}</div>;
  }
}

export default App;
