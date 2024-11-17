import { describe, expect, it } from "vitest";
import { canReconfigure } from "../../services/can-configure";

describe('canReconfigure', () => {
    // it('should be a function', () => {
    //     expect(canReconfigure).toBeTypeOf('function');
    // });

    it('should throw if first parameter is missing', () => {
        expect(() => canReconfigure()).toThrow();
    });

    it('should throw if first parameter is not a string', () => {
        expect(() => canReconfigure(2)).toThrow();
    });

    it('should throw if second parameter is not a string', () => {
        expect(() => canReconfigure(2, 'a')).toThrow();
    });
});