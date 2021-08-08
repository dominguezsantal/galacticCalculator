export default class AgeExpectancy {
    constructor(age, region, gender, exercise, alcohol) {
        this.age = age;
        this.region = region;
        this.gender = gender;
        this.exercise = exercise;
        this.alcohol = alcohol;
        this.ageExpectancy = 0;
    }
    regionCalculator() {
        if (this.region === "Americas") {
            this.ageExpectancy = 77;
        } else if (this.region === "Africa") {
            this.ageExpectancy = 64;
        } else if (this.region === "Eastern Mediterranean") {
            this.ageExpectancy = 70;
        } else if (this.region === "Europe") {
            this.ageExpectancy = 70;
        } else if (this.region === "Western Pacific") {
            this.ageExpectancy = 78;
        } else {
            this.ageExpectancy = 71;
        }
        return this.ageExpectancy;
    }

    genderCalculator() {
        if (this.gender === "female") {
            this.ageExpectancy += 5;
            return this.ageExpectancy;
        } else {
            return this.ageExpectancy;
        }
    }
    exerciseCalculator() {
        if (this.exercise === "never") {
            return this.ageExpectancy;
        } else if (this.exercise === "sometimes") {
            return this.ageExpectancy -= 4;
        } else {
            return this.ageExpectancy -= 13;
        }
    }

    alcoholCalculator() {
        if (this.alcohol === "never" || this.alcohol === "minimal") {
            return this.ageExpectancy;
        } else if (this.alcohol === "moderate") {
            return this.ageExpectancy -= 2;
        } else {
            return this.ageExpectancy -= 5;
        }
    }

}