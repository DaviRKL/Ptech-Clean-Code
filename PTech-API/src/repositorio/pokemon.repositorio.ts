import fs from 'fs'; 

export default class PokemonRepositorio{
    public listarTodos(): any{
        const pokemons = fs.readFileSync('./pokemons/pokemons.json', 'utf8');
        const objPokemons = JSON.parse(pokemons);

        return objPokemons;
    }

    public listarPokemonsPeloNome(nomePokemon: string): any{
        const nome = `./pokemons/${nomePokemon}.json`;
        const pokemon = fs.readFileSync(nome, 'utf8');
        const objPokemon = JSON.parse(pokemon);

        return objPokemon;
    }
}