//import { TestScheduler } from 'jest';
import AgeCalculator from './../src/js/calculator.js';

describe('AgeCalculator', () => {
    test('should return the age in Earth years', () => {
        const age = 30;
        const expectancy = 73;
        const newTest = new AgeCalculator(age, expectancy);
        expect(newTest.earthCalculator()).toEqual(30);
    });
});
describe('AgeCalculator', () => {
    test('should return the age in Mercury years', () => {
        const age = 30;
        const expectancy = 73;
        const newTest = new AgeCalculator(age, expectancy);
        expect(newTest.mercuryCalculator()).toEqual(30);
    });
});
describe('AgeCalculator', () => {
    test('should return the age in Venus years', () => {
        const age = 30;
        const expectancy = 73;
        const newTest = new AgeCalculator(age, expectancy);
        expect(newTest.venusCalculator()).toEqual(30);
    });
});
describe('AgeCalculator', () => {
    test('should return the age in Mars years', () => {
        const age = 30;
        const expectancy = 73;
        const newTest = new AgeCalculator(age, expectancy);
        expect(newTest.earthCalculator()).toEqual(30);
    });
});
describe('AgeCalculator', () => {
    test('should return the age in Jupiter years', () => {
        const age = 30;
        const expectancy = 73;
        const newTest = new AgeCalculator(age, expectancy);
        expect(newTest.jupiterCalculator()).toEqual(30);
    });
});