import { ScreenPrinter } from "./screen-printer";

class Main {
    constructor() {
        this.actualX = 1;
        this.actualY = 1;

        this.sp = new ScreenPrinter();
        this.sp.createEnvironment();
    }

    callMoveHero(direction) {
        let movementResult = this.sp.moveHero(this.actualX, this.actualY, direction);

        this.actualX = movementResult[0];
        this.actualY = movementResult[1];
    }
}

const app = new Main();

window.onkeydown = (e => {
    switch (e.code) {
        case "ArrowUp":
            app.callMoveHero("N");
            break;

        case "ArrowDown":
            app.callMoveHero("S");
            break;

        case "ArrowRight":
            app.callMoveHero("E");
            break;

        case "ArrowLeft":
            app.callMoveHero("O");
            break;
    }
});