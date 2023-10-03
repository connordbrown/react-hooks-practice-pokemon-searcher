import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ filteredPokemon }) {
  const pokemonToDisplay = filteredPokemon.map(pokemon => {
    const {id, name, hp, sprites} = pokemon;
    return <PokemonCard key={id}
                        id={id}
                        name={name}
                        hp={hp}
                        sprites={sprites}
    />
  })

  return (
    <Card.Group itemsPerRow={6}>
      {pokemonToDisplay}
    </Card.Group>
  );
}

export default PokemonCollection;
