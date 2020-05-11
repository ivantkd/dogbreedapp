// src/components/dogs.js

import React from 'react'

const Dogs = ({ data }) => {
    //console.log(dogs);
  return (
    <div>
      <center><h1>Dog List</h1></center>
      {data.map((dog, i) => (
        <div className="card" key={i}>
          <div className="card-body">
            <h5 className="card-title">{dog.breed}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{dog.description}</h6>
            <p className="card-text">{dog.wikiLink}</p>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Dogs