import AgeExpectancy from './../src/js/expectedAge.js';


describe('AgeExpectancy', () => {
    test('should  return average life expectancy based on region', () => {
        const age = 30;
        const region = "Americas";
        const gender = "female";
        const exercise = "heavy";
        const alcohol = "moderate";
        const newTest = new AgeExpectancy(age, region, gender, exercise, alcohol);
        expect(newTest.regionCalculator()).toEqual(77);
    });
});
describe('AgeExpectancy', () => {
    test('should  return average life expectancy based on region', () => {
        const age = 30;
        const region = "Africa";
        const gender = "female";
        const tobacco = "heavy";
        const alcohol = "moderate";
        const newTest = new AgeExpectancy(age, region, gender, tobacco, alcohol);
        expect(newTest.regionCalculator()).toEqual(64);
    });
});

describe('AgeExpectancy', () => {
    test('should  return average life expectancy based on region', () => {
        const age = 30;
        const region = "Eastern Mediterranean";
        const gender = "female";
        const tobacco = "heavy";
        const alcohol = "moderate";
        const newTest = new AgeExpectancy(age, region, gender, tobacco, alcohol);
        expect(newTest.regionCalculator()).toEqual(70);
    });
});