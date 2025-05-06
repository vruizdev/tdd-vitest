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

    it('should return a boolean', () => {
        expect(canReconfigure('a', 'b')).toBeTypeOf('boolean');
    });

    it('should return false if string provided have different length even with same unique letter', () => {
        expect(canReconfigure('aab', 'ab')).toBe(false);
    });

    it('should return false if string provided have a different number of unique letter', () => {
        expect(canReconfigure('abc', 'ddd')).toBe(false);
    });

    it('should return false if string has different order of transformation', () => {
        expect(canReconfigure('XBOX', 'XXBO')).toBe(false);
    });
});
