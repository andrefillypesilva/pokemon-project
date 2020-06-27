import { VirtualGame } from './virtual-game';

export class ScreenPrinter {
    constructor() {
        this.pokemonCaptured = 0;
        this.visitedPokehomes = [];
        this.gameAlreadyStarted = false;

        this.vg = new VirtualGame();
    }

    createEnvironment() {
        let app = document.getElementById("app");
        let container = document.createElement("div");
        let row = document.createElement("row");

        app.appendChild(container);
        container.appendChild(row);

        container.setAttribute("class", "container");
        row.setAttribute("class", "row");

        let pokearena = document.createElement("div");
        pokearena.classList = "col-md-10";

        let pokearenaRow = document.createElement("div");
        pokearenaRow.classList = "row";

        pokearena.appendChild(pokearenaRow);

        row.appendChild(pokearena);

        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                let pokehomeDiv = document.createElement("div");
                pokehomeDiv.setAttribute("id", `pokehome${j + 1}-${i + 1}`);

                pokehomeDiv.classList = "col-md-3 pokehome";

                pokearenaRow.appendChild(pokehomeDiv);

                let img = document.createElement("img");
                img.setAttribute("src", `./images/${this.randomImage()}`);
                pokehomeDiv.appendChild(img);

                let span = document.createElement("span");
                span.textContent = `x: ${j + 1} - y: ${i + 1}`;
                pokehomeDiv.appendChild(span);
            }
        }

        let scoreDiv = document.createElement("div");
        scoreDiv.classList = "col-md-2 score";

        row.appendChild(scoreDiv);

        let title = document.createElement("h5");
        title.textContent = "Pokémon: Apanhá-los todos.";

        let description = document.createElement("p");
        description.textContent = "Para jogar você poderá utilizar o campo abaixo digitando a sequência de movimentos (dessa maneira será utilizada uma grelha virtual com infinitas casas) ou poderá utilizar as teclas [UP], [DOWN], [RIGHT], [LEFT] para mover o personagem na grelha com posições finitas renderizada na tela.";

        let input = document.createElement("input");
        input.setAttribute("id", "input");
        input.classList = "form-control";
        input.addEventListener("keyup", () => {
            button.setAttribute("disabled", "disabled");
            if (input.value != "") {
                button.removeAttribute("disabled");
            }
        });

        let button = document.createElement("button");
        button.setAttribute("id", "submit");
        button.innerHTML = "Enviar";
        button.classList = "btn btn-warning btn-lg btn-block";
        button.addEventListener("click", () => {
            const score = this.vg.start();
            if (this.gameAlreadyStarted) this.recreateEnvironment();
            document.querySelector(".score-value").innerHTML = score;
            input.value = "";
            this.gameAlreadyStarted = false;
        });
        button.setAttribute("disabled", "disabled");

        let extra = document.createElement("p");
        extra.innerHTML = "Movimentos: <br/>N: Norte - S: Sul - E: Este - O: Oeste";

        scoreDiv.appendChild(title);
        scoreDiv.appendChild(description);
        scoreDiv.appendChild(input);
        scoreDiv.appendChild(button);
        scoreDiv.appendChild(extra);

        let span = document.createElement("span");
        let h1 = document.createElement("h1");

        span.textContent = "Quantos Pokémons você capturou:";
        h1.textContent = "0";
        h1.classList = "score-value";

        scoreDiv.appendChild(span);
        scoreDiv.appendChild(h1);
    }

    recreateEnvironment() {
        const app = document.getElementById("app");
        app.innerHTML = "";

        this.createEnvironment();
    }

    moveHero(x, y, direction) {
        this.gameAlreadyStarted = true;
        let newX = x;
        let newY = y;
        let canResetGame = false;

        switch (direction) {
            case "N":
                if (y != 1) {
                    newY = y - 1;
                }
                break;

            case "S":
                if (y != 4) {
                    newY = y + 1;
                }
                break;

            case "E":
                if (x != 4) {
                    newX = x + 1;
                }
                break;

            case "O":
                if (x != 1) {
                    newX = x - 1;
                }
                break;
        }

        let images = document.getElementById(`pokehome${newX}-${newY}`).getElementsByTagName("img");

        for (let i = 0; i < images.length; i++) {

            document.getElementById(`pokehome${x}-${y}`).classList.remove("active");
            document.getElementById(`pokehome${newX}-${newY}`).classList.add("active");

            let temp = this.visitedPokehomes.find(v => v == `${newX}-${newY}`);

            if (temp == undefined) {
                canResetGame = this.capturePokemon();
                images[i].setAttribute("src", "./images/pokeball.png");
                this.visitedPokehomes.push(`${newX}-${newY}`);
            }
        }

        if (canResetGame) {
            newX = 1;
            newY = 1;
        }

        return [newX, newY];
    }

    capturePokemon() {
        this.pokemonCaptured++;

        let score = document.querySelector(".score-value");
        score.textContent = this.pokemonCaptured;

        setTimeout(() => {
            if (this.pokemonCaptured == 16) {
                alert("Parabéns! Você capturou todos os Pokémons disposíveis e se tornou um Mestre Pokémon! :)");
                this.resetGame();
            }
        }, 200);

        return this.pokemonCaptured == 16;
    }

    resetGame() {
        this.gameAlreadyStarted = false;
        this.pokemonCaptured = 0;
        this.visitedPokehomes = [];
        this.recreateEnvironment();
    }

    randomImage() {
        return `${Math.ceil(Math.random() * 10)}.png`;
    }
}