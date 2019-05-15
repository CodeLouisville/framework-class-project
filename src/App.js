import React, { Component } from 'react';

class App extends Component {
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
