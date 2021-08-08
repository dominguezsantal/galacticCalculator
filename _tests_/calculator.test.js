import { TestScheduler } from 'jest';
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
        expect(newTest.mercuryCalculator()).toEqual(7);
    });
});


describe('AgeCalculator', () => {
    test('should return the age in Venus years', () => {
        const age = 30;
        const expectancy = 73;
        const newTest = new AgeCalculator(age, expectancy);
        expect(newTest.venusCalculator()).toEqual(19);
    });
});

describe('AgeCalculator', () => {
    test('should return the age in Mars years', () => {
        const age = 30;
        const expectancy = 73;
        const newTest = new AgeCalculator(age, expectancy);
        expect(newTest.marsCalculator()).toEqual(56);
    });
});

describe('AgeCalculator', () => {
    test('should return the age in Jupiter years', () => {
        const age = 30;
        const expectancy = 73;
        const newTest = new AgeCalculator(age, expectancy);
        expect(newTest.jupiterCalculator()).toEqual(356);
    });
});

describe('AgeCalculator', () => {
    test('should return the number of years left to live on Earth if your age is less than average age expectancy', () => {
        const age = 30;
        const expectancy = 73;
        const newTest = new AgeCalculator(age, expectancy);
        expect(newTest.lifeCalculator()).toEqual('You have 43 years left to live before reaching average life expectancy on Earth.');
    });
});