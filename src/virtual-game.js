export class VirtualGame {
    constructor() {
        this.actualX = 1;
        this.actualY = 1;
        this.pokemonCaptured = 0;
        this.visitedPokehomes = [];
    }

    start() {
        let directions = [...document.getElementById("input").value];
        
        directions.forEach(direction => {
            switch (direction) {
                case "N":
                    this.actualY--;
                    break;
                case "S":
                    this.actualY++;
                    break;
                case "E":
                    this.actualX++;
                    break;
                case "O":
                    this.actualX--;
                    break;
            }

            this.capturePokemon(this.actualX, this.actualY);
        });

        const result = this.pokemonCaptured;

        this.reset();

        return result;
    }

    reset() {
        this.actualX = 1;
        this.actualY = 1;
        this.visitedPokehomes = [];
        this.pokemonCaptured = 0;
    }

    capturePokemon(x, y) {
        let temp = this.visitedPokehomes.find(v => v == `${x}-${y}`);

        if (temp == undefined) {
            this.visitedPokehomes.push(`${x}-${y}`);
            this.pokemonCaptured++;
        }
    }
}