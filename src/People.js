import React from 'react';

import Person from './Person';
const People = ({ people, deletePerson }) => {
  return people.map(function (person) {
    console.log(person.cell)
    return (
      <div className="people">
        <Person person={person} deletePerson={deletePerson} />
      </div >
    );
  });
};

export default People;
