import React from 'react';

import Person from './Person';
const People = (props) => {
  let people = props.people;
  return people.map(function (person, index) {
    return (
      <div className="people">
        <Person index={index} person={person} deletePerson={props.deletePerson} />
      </div>
    );
  });
};

export default People;
