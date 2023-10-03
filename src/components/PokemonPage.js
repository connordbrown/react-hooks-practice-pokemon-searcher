import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokeSearch, setPokeSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(response => response.json())
    .then(data => setPokemonList(data))
  }, [])

  const filteredPokemon = pokemonList.filter(pokemon => {
    return pokemon.name.includes(pokeSearch);
  })

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm pokemonList={pokemonList} setPokemonList={setPokemonList} />
      <br />
      <Search pokeSearch={pokeSearch} setPokeSearch={setPokeSearch} />
      <br />
      <PokemonCollection filteredPokemon={filteredPokemon} />
    </Container>
  );
}
export default PokemonPage;
