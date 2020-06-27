import { ScreenPrinter } from "./screen-printer";

class Main {
    constructor() {
        this.sp = new ScreenPrinter();
        
        this.sp.createEnvironment();
    }

    callMoveHero(index, direction) {
        return this.sp.moveHero(index, direction);
    }
}

let actualIndex = 0;

const app = new Main();

window.onkeydown = (e => {
    switch (e.code) {
        case "ArrowUp":
            actualIndex = app.callMoveHero(actualIndex, "N");
            break;

        case "ArrowDown":
            actualIndex = app.callMoveHero(actualIndex, "S");
            break;

        case "ArrowRight":
            actualIndex = app.callMoveHero(actualIndex, "E");
            break;

        case "ArrowLeft":
            actualIndex = app.callMoveHero(actualIndex, "O");
            break;
    }
});