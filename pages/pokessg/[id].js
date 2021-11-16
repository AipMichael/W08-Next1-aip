const Pokemons = ({ pokemons }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <p>loading</p>;
  }

  return html;
};

export const getStaticPaths = async () => {
  const response = await fetch("https://pokeapi-menchu.herokuapp.com/pokemon");
  const pokeAPI = await response.json();

  const paths = pokeApi.map((pokemon) => ({ params: { id: `${pokemon.id}` } }));
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (params) => {
  const response = await fetch(
    `https://pokeapi-menchu.herokuapp.com/pokemon/${params.id}`
  );
  const pokeAPI = await response.json();
  return {
    props: {
      pokemons: pokeApi,
    },
  };
};
