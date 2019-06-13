import React, { Component } from 'react'

class Person extends Component {
  render () {
    return (
      <div key={this.props.index}>
        <h2>{this.props.person.name.first} <div onClick={() => { this.props.deletePerson(this.props.index) }}>delete</div></h2>
        <p>{this.props.person.dob.age}</p>
      </div>
    )
  }
}

export default Person
