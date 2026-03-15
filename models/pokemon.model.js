export class Pokemon {
    constructor(data) {
        this.name = data.name;
        this.id = data.id;
        this.image = data.sprites.front_default;
        this.types = data.types.map((typeInfo) => typeInfo.type.name);
        this.height = `${data.height / 10} m`;
        this.skills = data.abilities.map((abilityInfo) => abilityInfo.ability.name).join(', ');
    }

    static fromApi(data) {
        return new Pokemon(data);
    }
}