import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import styles from "../../styles/pokemon.module.css";

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
      <header className={styles.headerBar}>
        <h1 className={styles.title}>
          Poke-hola. Esto es de Client Server Rendering
        </h1>
        <div className={styles.headerMenu}>
          <Link href="/pokemon" cllinkssName={styles.headRoutes}>
            Pokémon
          </Link>
          <h2 className={styles.headRoutes}>Poke SSR</h2>
          <h2 className={styles.headRoutes}>Poke SSG</h2>
          <h2 className={styles.headRoutes}>Poke ISR</h2>
        </div>
      </header>
      <ul>
        {pokemons.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </>
  );
}
