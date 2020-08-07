const container: HTMLElement | any = document.getElementById("app");
const allPokemon: number = 100;

interface IPokemon {
  id: number;
  name: string;
  image: string;
  type: string;
}

const fetchData = (): void => {
  for (let i = 1; i <= allPokemon; i++) {
    getPokemon(i);
  }
};

const getPokemon = async (id: number): Promise<void> => {
  const data: Response = await fetch(`https://pokeapi.co/api/v2/${id}`);
  const pokemon: any = await data.json();
  const pokemonType: string = pokemon.types
    .map((poke: any) => poke.type.name)
    .join(", ");

const transformedPokemon = {
    id: pokemon.id,
    name: pokemon.name,
    image: `${pokemon.sprites.front_default}`,
    type: pokemonType;
}

showPokemon(transformedPokemon);
};
