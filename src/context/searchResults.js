import React from "react";

const SearchResults = ({ searchResults }) => {
  return (
    <div>
      <h1>Search Results</h1>
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
