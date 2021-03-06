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
        } = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=10&offset=7"
        );

        setPokemons(pokemons);
      })(),
    [setPokemons]
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
          <Link href="/pokessr" cllinkssName={styles.headRoutes}>
            Poke SSR
          </Link>
          <Link href="/pokessg" cllinkssName={styles.headRoutes}>
            Poke SSG
          </Link>
          <Link href="/pokeisr" cllinkssName={styles.headRoutes}>
            Poke ISR
          </Link>
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
