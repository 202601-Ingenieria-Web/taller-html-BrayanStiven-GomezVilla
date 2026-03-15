export class PokemonEvolution {
    constructor(evolutions) {
        this.evolutions = evolutions;
    }

    static fromApi(evolutionPokemons) {
        return new PokemonEvolution(
            evolutionPokemons.map((pokemon) => ({
                id: pokemon.id,
                name: pokemon.name,
                image: pokemon.sprites.front_default
            }))
        );
    }
}