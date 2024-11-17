import { describe, expect, it } from 'vitest';
import { fizzbuzz } from '../../services/fizzbuzz';


describe('fizzbuzz', () => {
    // Este test es redundante.
    // it('should be a function', () => {
    //     expect(typeof fizzbuzz).toBe('function');
    // });

    it('should throw if not a number is provided as parameter', () => {
        expect(() => fizzbuzz()).toThrow();
    });

    it('should throw a specific error message if not number is provided parameter', () => {
        expect(() => fizzbuzz()).toThrow('parameter provided must be a number');
    });

    it('should throw a specific error message not number is provided', () => {
        expect(() => fizzbuzz(NaN)).toThrow('parameter provided must be a number');
    });

    it('should return 1 if number provided is 1', () => {
        expect(fizzbuzz(1)).toBe(1);
    });

    it('should return 2 if number provided is 2', () => {
        expect(fizzbuzz(2)).toBe(2);
    });

    it('should return "fizz" if number provided is 3', () => {
        expect(fizzbuzz(3)).toBe('fizz');
    });

    it('should return "fizz" if number provided is multiple of 3', () => {
        expect(fizzbuzz(6)).toBe('fizz');
        expect(fizzbuzz(9)).toBe('fizz');
        expect(fizzbuzz(12)).toBe('fizz');
    });

    // Ya esta cubierto
    // it('should return 4 if number provided is 4', () => {
    //     expect(fizzbuzz(4)).toBe(4);
    // });

    it('should return "buzz" if number provided is 5', () => {
        expect(fizzbuzz(5)).toBe('buzz');
    });

    it('should return "buzz" if number provided is multiple of 5', () => {
        expect(fizzbuzz(10)).toBe('buzz');
        expect(fizzbuzz(20)).toBe('buzz');
    });

    it('should return "fizzbuzz" if number provided is multiple of 3 and 5', () => {
        expect(fizzbuzz(15)).toBe('fizzbuzz');
    });

    it('should return "woff" if number provided is 7', () => {
        expect(fizzbuzz(7)).toBe('woff');
    });

    it('should return "fizzwoff" if number provided is 21', () => {
        expect(fizzbuzz(21)).toBe('fizzwoff');
    });
});