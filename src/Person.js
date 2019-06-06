import React from 'react';

const Person = props => {
  return (
    <div key={props.index}>
      <h2>{props.person.name} <span className="delete" onClick={() => { props.deletePerson(props.index); }}>delete</span></h2>
      <p>{props.person.age}</p>
    </div>
  );
};

export default Person;
