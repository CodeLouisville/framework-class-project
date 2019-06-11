import React from 'react';

const Person = ({ person, deletePerson }) => {
  return (
    <div key={person.cell}>
      <h2>{person.name.first} <span className="delete" onClick={() => { deletePerson(person.cell); }}>delete</span></h2>
      <p>{person.dob.age}</p>
    </div >
  );
};

export default Person;
