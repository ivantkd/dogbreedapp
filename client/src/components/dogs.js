// src/components/dogs.js

import React from 'react'

const Dogs = ({ data }) => {
    //console.log(dogs);
  return (
    <div>
      <center><h1>Dog List</h1></center>
      {data.map((dog) => (
        <div className="card">
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

/*
const Dogs = ({ data }) => {
  console.log(data);
  return (
    <div>
      <center><h1>Dog List</h1></center>
      
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{data.breed}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{data.description}</h6>
            <p className="card-text">{data.wikiLink}</p>
          </div>
        </div>
  
    </div>
  )
}*/

export default Dogs