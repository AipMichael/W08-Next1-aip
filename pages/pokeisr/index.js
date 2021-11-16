import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import styles from "../../styles/pokemon.module.css";

function PokeIsr({ pokemons }) {
  return (
    <>
      <header className={styles.headerBar}>
        <h1 className={styles.title}>
          Poke-hola. Esto es de Static Site Generation
        </h1>
        <div className={styles.headerMenu}>
          <Link href="/" cllinkssName={styles.headRoutes}>
            Home
          </Link>
          <Link href="/pokemon" cllinkssName={styles.headRoutes}>
            Pokémon
          </Link>
          <Link href="/pokessr" className={styles.headRoutes}>
            Poke SSR
          </Link>
          <Link href="/pokessg" className={styles.headRoutes}>
            Poke SSG
          </Link>
          <Link href="/pokeisr" className={styles.headRoutes}>
            Poke ISR
          </Link>
        </div>
      </header>
      <ul>
        {pokemons.map(({ name }) => (
          <li key={name}>{name.toLowerCase()}</li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://pokeapi-menchu.herokuapp.com/pokemon`);
  const pokemons = await res.json();

  return { props: { pokemons }, revalidate: 20 };
}

export default PokeIsr;
