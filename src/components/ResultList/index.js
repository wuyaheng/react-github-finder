import React from "react";

function ResultList(props) {
  return (
    <ul className="list-group search-results">
      {props.results.map(result => (
        <li key={result} className="list-group-item">
          <img alt="Profile" src={result} className="img-fluid" />
        </li>
      ))}
    </ul>
  );
}

export default ResultList;
