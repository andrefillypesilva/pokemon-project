import { ScreenPrinter } from "./screen-printer";

class Main {
    constructor() {
        this.sp = new ScreenPrinter();
        
        this.sp.createEnvironment();
    }

    callMoveHero(x, y, direction) {
        return this.sp.moveHero(x, y, direction);
    }
}

let actualX = 1;
let actualY = 1;

const app = new Main();

window.onkeydown = (e => {
    let movementResult = [];
    switch (e.code) {
        case "ArrowUp":
            movementResult = app.callMoveHero(actualX, actualY, "N");
            break;

        case "ArrowDown":
            movementResult = app.callMoveHero(actualX, actualY, "S");
            break;

        case "ArrowRight":
            movementResult = app.callMoveHero(actualX, actualY, "E");
            break;

        case "ArrowLeft":
            movementResult = app.callMoveHero(actualX, actualY, "O");
            break;
    }

    actualX = movementResult[0];
    actualY = movementResult[1];
});