export class ScreenPrinter {
    constructor() {
        this.pokemonCaptured = 0;
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

        for (let i = 0; i < 16; i++) {
            let pokehomeDiv = document.createElement("div");
            pokehomeDiv.setAttribute("id", `pokehome${i + 1}`);

            pokehomeDiv.classList = "col-md-3 pokehome";

            pokearenaRow.appendChild(pokehomeDiv);

            let img = document.createElement("img");
            img.setAttribute("src", `./images/${this.randomImage()}`);
            pokehomeDiv.appendChild(img);
        }

        let scoreDiv = document.createElement("div");
        scoreDiv.classList = "col-md-2 score";

        row.appendChild(scoreDiv);

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

    moveHero(index, direction) {
        let newIndex = 0;

        switch (direction) {
            case "N":
                if (index < 4 || index == 0) {
                    newIndex = index;
                } else {
                    newIndex = index - 4;
                }
                break;

            case "S":
                if (index > 13 || index == 0) {
                    newIndex = index;
                } else {
                    newIndex = index + 4;
                }
                break;

            case "E":
                if (index % 4 == 0 && index != 0) {
                    newIndex = index;
                } else {
                    newIndex = index + 1;
                }
                break;

            case "O":
                if (index == 1 || index == 5 || index == 9 || index == 13 || index == 0) {
                    newIndex = index;
                } else {
                    newIndex = index - 1;
                }
                break;
        }

        let images = document.getElementById(`pokehome${newIndex}`).getElementsByTagName("img");

        for (let i = 0; i < images.length; i++) {

            if (index != 0) document.getElementById(`pokehome${index}`).classList.remove("active");
            document.getElementById(`pokehome${newIndex}`).classList.add("active");

            if (!images[i].getAttribute("src").includes("pokeball")) {
                this.capturePokemon();
                images[i].setAttribute("src", "./images/pokeball.png");
            }
        }

        return newIndex;
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
    }

    resetGame() {
        this.pokemonCaptured = 0;
        this.recreateEnvironment();
    }

    randomImage() {
        return `${Math.ceil(Math.random() * 10)}.png`;
    }
}