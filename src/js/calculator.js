export default class AgeCalculator {
    constructor(age, expectancy) {
        this.age = age;
        this.expectancy = expectancy;
    }
    earthCalculator() {
        return this.age * 1.0;
    }