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
        expect(newTest.earthCalculator()).toEqual(30);
    });
});