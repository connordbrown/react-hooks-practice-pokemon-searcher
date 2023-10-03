import React from "react";

function Search({ pokeSearch, setPokeSearch }) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={(e) => setPokeSearch(e.target.value)} value={pokeSearch} className="prompt"/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
