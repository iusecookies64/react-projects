import React from "react";
import "./card-style.css";

export const Card = ({ monster, searchField }) => {
  if (searchField === "") {
    return (
      <div className="card-container" key={monster.id}>
        <img
          alt="monster"
          src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
        />
        <h1>{monster.name}</h1>
        <p>{monster.email}</p>
      </div>
    );
  } else {
    const index = monster.name.toLowerCase().indexOf(searchField);
    const str1 = monster.name.slice(0, index);
    const str2 = monster.name.slice(index, index + searchField.length);
    const str3 = monster.name.slice(index + searchField.length);
    return (
      <div className="card-container" key={monster.id}>
        <img
          alt="monster"
          src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
        />
        <h1>
          <span>{str1}</span>
          <span className="highlight">{str2}</span>
          <span>{str3}</span>
        </h1>
        <p>{monster.email}</p>
      </div>
    );
  }
};
