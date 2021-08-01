import AgeExpectancy from './../src/js/expectedAge.js';


describe('AgeExpectancy', () => {
    test('should  return average life expectancy based on region', () => {
        const age = 30;
        const region = "Americas";
        const gender = "female";
        const exercise = "heavy";
        const alcohol = "moderate";
        const newTest = new AgeExpectancy(age, region, gender, exercise, alcohol);
        expect(newTest.regionCalculator()).toEqual(73);
    });
});