export default class AgeCalculator {
    constructor(age, expectancy) {
        this.age = age;
        this.expectancy = expectancy;
    }
    earthCalculator() {
        return this.age * 1.0;
    }
    mercuryCalculator() {
        return this.age * 0.24;
    }


    lifeCalculator() {
        if (this.age > this.expectancy) {
            return (`You have lived ${this.age - this.expectancy} years beyond average life expectancy on Earth.`);
        } else if (Math.round(this.age) === Math.round(this.expectancy)) {
            return (`You are ${this.age} years old and that is equal to the average life expectancy on Earth.`);
        } else {
            return (`You have ${this.expectancy - this.age} years left to live before reaching average life expectancy on Earth.`);
        }
    }
}