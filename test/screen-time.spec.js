import { ScreenPrinter } from '../src/screen-printer';

describe("testing Screen Priter model", () => {
    it("should create a instance of Virtual Game", () => {
        let sp = new ScreenPrinter();
        expect(sp).toBeInstanceOf(ScreenPrinter);
    });
    it("should to create a screen", () => {
        let sp = new ScreenPrinter();
        sp.createEnvironment();

        let input = document.getElementById("input");

        expect(input).not.toBe(undefined);
    });
});