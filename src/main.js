import { ScreenPrinter } from "./screen-printer";

class Main {
    constructor() {
        const sp = new ScreenPrinter();
        sp.createEnvironment();
    }
}

const app = new Main();