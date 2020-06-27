import { Pokedex } from './pokedex';

export class Pokemon {
    constructor(code) {
        this.name = Pokedex[code];
        this.code = code;
        this.filename = `${this.code}.png`;
    }
}