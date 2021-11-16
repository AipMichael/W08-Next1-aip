import { useEffect, useState } from "react";
import axios from "axios";

export default function Pokemon() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(
    () =>
      (async () => {
        const {
          data: { results: pokemons },
        } = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=10%22");

        setPokemons(pokemons);
      })(),
    [setPokemons, pokemons]
  );
  return (
    <>
      <ul>
        {pokemons.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </>
  );
}
