import { VirtualGame } from '../src/virtual-game';

describe("testing Virtual Game model", () => {
    it("should create a instance of Virtual Game", () => {
        let vg = new VirtualGame();
        expect(vg).toBeInstanceOf(VirtualGame);
    });
    it("should capture Pokémons", () => {
        let vg = new VirtualGame();
        expect(vg.start("NESO")).toBe(4);
        vg.reset();
        expect(vg.start("NSNSNSNSNS")).toBe(2);
        vg.reset();
        expect(vg.start("E")).toBe(2);
    });
});