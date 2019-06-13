import React, { Component } from 'react';
import People from './People';
import AddEditPerson from './AddEditPerson';
import { Link, Route } from 'react-router-dom'

class App extends Component {
  // Classes must have constructors if initial variables are to be set automatically
  constructor() {
    super();
    this.state = {
      people: []
    };
  }

  deletePerson(index) {
    const { people } = this.state;
    people.splice(index, 1);
    this.setState({ people });
  }

  addPerson = (firstName, age) => {
    const { people } = this.state;

    const person = {
      name: { first: firstName },
      dob: { age: age }
    };

    people.push(person);
    this.setState({ people })
  }

  async componentDidMount() {
    const response = await fetch('https://randomuser.me/api/?nat=us&results=10')
    const json = await response.json()
    console.log(json)
    this.setState({ people: json.results })
  }

  render() {
    return <div>

      <div>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add-person">Add person</Link></li>
          </ul>
        </nav>
      </div>

      <h1>{this.props.greeting}</h1>
      <div>
        <Route path="/add-person"
          render={() =>
            <AddEditPerson addPerson={this.addPerson.bind(this)}
            />}
        />
    </div>
      <div className="people">
        <Route path="/" exact
          render={() =>
            <People
              people={this.state.people}
              deletePerson={this.deletePerson.bind(this)}
            />}
        />
      </div>
    </div >
  }
}

export default App;
