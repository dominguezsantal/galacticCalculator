import AgeExpectancy from './../src/js/expectedAge.js';

//region test
describe('AgeExpectancy', () => {
    test('should  return average life expectancy based on region', () => {
        const age = 30;
        const region = "Americas";
        const gender = "female";
        const exercise = "heavy";
        const alcohol = "moderate";
        const newTest = new AgeExpectancy(age, region, gender, exercise, alcohol);
        newTest.regionCalculator();
        newTest.genderCalculator();
        newTest.exerciseCalculator();
        expect(newTest.alcoholCalculator()).toEqual(93);
    });
});
describe('AgeExpectancy', () => {
    test('should  return average life expectancy based on region', () => {
        const age = 30;
        const region = "Africa";
        const gender = "female";
        const exercise = "sometimes";
        const alcohol = "moderate";
        const newTest = new AgeExpectancy(age, region, gender, exercise, alcohol);
        newTest.regionCalculator();
        newTest.genderCalculator();
        newTest.exerciseCalculator();
        expect(newTest.alcoholCalculator()).toEqual(71);
    });
});

describe('AgeExpectancy', () => {
    test('should  return average life expectancy based on region', () => {
        const age = 30;
        const region = "Eastern Mediterranean";
        const gender = "female";
        const exercise = "sometimes";
        const alcohol = "moderate";
        const newTest = new AgeExpectancy(age, region, gender, exercise, alcohol);
        newTest.regionCalculator();
        newTest.genderCalculator();
        newTest.exerciseCalculator();
        expect(newTest.alcoholCalculator()).toEqual(77);
    });
});
describe('AgeExpectancy', () => {
    test('should  return average life expectancy based on region', () => {
        const age = 30;
        const region = "Europe";
        const gender = "female";
        const exercise = "sometimes";
        const alcohol = "moderate";
        const newTest = new AgeExpectancy(age, region, gender, exercise, alcohol);
        newTest.regionCalculator();
        newTest.genderCalculator();
        newTest.exerciseCalculator();
        expect(newTest.alcoholCalculator()).toEqual(85);
    });
});

describe('AgeExpectancy', () => {
    test('should  return average life expectancy based on region', () => {
        const age = 30;
        const region = "Western Pacific";
        const gender = "female";
        const exercise = "sometimes";
        const alcohol = "moderate";
        const newTest = new AgeExpectancy(age, region, gender, exercise, alcohol);
        newTest.regionCalculator();
        newTest.genderCalculator();
        newTest.exerciseCalculator();
        expect(newTest.alcoholCalculator()).toEqual(85);
    });
});
describe('AgeExpectancy', () => {
    test('should  return average life expectancy based on region', () => {
        const age = 30;
        const region = "South-East Asia";
        const gender = "female";
        const exercise = "sometimes";
        const alcohol = "moderate";
        const newTest = new AgeExpectancy(age, region, gender, exercise, alcohol);
        newTest.regionCalculator();
        newTest.genderCalculator();
        newTest.exerciseCalculator();
        expect(newTest.alcoholCalculator()).toEqual(78);
    });
});
//gender:male
describe('AgeExpectancy', () => {
    test('should return average life expectancy based on gender', () => {
        const age = 30;
        const region = "Americas";
        const gender = "male";
        const exercise = "sometimes";
        const alcohol = "moderate";
        const newTest = new AgeExpectancy(age, region, gender, exercise, alcohol);
        newTest.regionCalculator();
        newTest.genderCalculator();
        newTest.exerciseCalculator();
        expect(newTest.alcoholCalculator()).toEqual(79);
    });
});
describe('AgeExpectancy', () => {
    test('should return average life expectancy based on gender', () => {
        const age = 30;
        const region = "Africa";
        const gender = "male";
        const exercise = "never";
        const alcohol = "moderate";
        const newTest = new AgeExpectancy(age, region, gender, exercise, alcohol);
        newTest.regionCalculator();
        newTest.genderCalculator();
        newTest.exerciseCalculator();
        expect(newTest.alcoholCalculator()).toEqual(62);
    });
});
describe('AgeExpectancy', () => {
    test('should return average life expectancy based on gender', () => {
        const age = 30;
        const region = "Eastern Mediterranean";
        const gender = "male";
        const exercise = "never";
        const alcohol = "heavy";
        const newTest = new AgeExpectancy(age, region, gender, exercise, alcohol);
        newTest.regionCalculator();
        newTest.genderCalculator();
        newTest.exerciseCalculator();
        expect(newTest.alcoholCalculator()).toEqual(65);
    });
});

//exercise
describe('AgeExpectancy', () => {
    test('should return average life expectancy based on exercise use', () => {
        const age = 30;
        const region = "Americas";
        const gender = "female";
        const exercise = "never";
        const alcohol = "heavy";
        const newTest = new AgeExpectancy(age, region, gender, exercise, alcohol);
        newTest.regionCalculator();
        newTest.genderCalculator();
        newTest.exerciseCalculator();
        expect(newTest.alcoholCalculator()).toEqual(77);
    });
});


describe('AgeExpectancy', () => {
    test('should return average life expectancy based on exercise use', () => {
        const age = 30;
        const region = "Americas";
        const gender = "female";
        const exercise = "sometimes";
        const alcohol = "moderate";
        const newTest = new AgeExpectancy(age, region, gender, exercise, alcohol);
        newTest.regionCalculator();
        newTest.genderCalculator();
        newTest.exerciseCalculator();;
        expect(newTest.alcoholCalculator()).toEqual(84);
    });
});

//male
describe('AgeExpectancy', () => {
    test('should return average life expectancy based on exercise use', () => {
        const age = 30;
        const region = "Americas";
        const gender = "male";
        const exercise = "never";
        const alcohol = "never";
        const newTest = new AgeExpectancy(age, region, gender, exercise, alcohol);
        newTest.regionCalculator();
        newTest.genderCalculator();
        newTest.exerciseCalculator();
        expect(newTest.exerciseCalculator()).toEqual(77);
    });
});
describe('AgeExpectancy', () => {
    test('should return average life expectancy based on exercise use', () => {
        const age = 30;
        const region = "Americas";
        const gender = "male";
        const exercise = "heavy";
        const alcohol = "moderate";
        const newTest = new AgeExpectancy(age, region, gender, exercise, alcohol);
        newTest.regionCalculator();
        newTest.genderCalculator();
        newTest.exerciseCalculator();
        expect(newTest.alcoholCalculator()).toEqual(88);
    });
});

describe('AgeExpectancy', () => {
    test('should return average life expectancy based on exercise use', () => {
        const age = 30;
        const region = "Americas";
        const gender = "male";
        const exercise = "sometimes";
        const alcohol = "heavy";
        const newTest = new AgeExpectancy(age, region, gender, exercise, alcohol);
        newTest.regionCalculator();
        newTest.genderCalculator();
        newTest.exerciseCalculator();
        expect(newTest.alcoholCalculator()).toEqual(76);
    });
});

//alcohol
describe('AgeExpectancy', () => {
    test('should return average life expectancy based on alcohol use', () => {
        const age = 30;
        const region = "Americas";
        const gender = "female";
        const exercise = "heavy";
        const alcohol = "never";
        const newTest = new AgeExpectancy(age, region, gender, exercise, alcohol);
        newTest.regionCalculator();
        newTest.genderCalculator();
        newTest.exerciseCalculator();
        expect(newTest.alcoholCalculator()).toEqual(95);
    });
});

describe('AgeExpectancy', () => {
    test('should return average life expectancy based on alcohol use', () => {
        const age = 30;
        const region = "Americas";
        const gender = "female";
        const exercise = "heavy";
        const alcohol = "minimal";
        const newTest = new AgeExpectancy(age, region, gender, exercise, alcohol);
        newTest.regionCalculator();
        newTest.genderCalculator();
        newTest.exerciseCalculator();
        expect(newTest.alcoholCalculator()).toEqual(95);
    });
});
describe('AgeExpectancy', () => {
    test('should return average life expectancy based on alcohol use', () => {
        const age = 30;
        const region = "Americas";
        const gender = "female";
        const exercise = "heavy";
        const alcohol = "moderate";
        const newTest = new AgeExpectancy(age, region, gender, exercise, alcohol);
        newTest.regionCalculator();
        newTest.genderCalculator();
        newTest.exerciseCalculator();
        expect(newTest.alcoholCalculator()).toEqual(93);
    });
});
describe('AgeExpectancy', () => {
    test('should return average life expectancy based on alcohol use', () => {
        const age = 30;
        const region = "Americas";
        const gender = "female";
        const exercise = "heavy";
        const alcohol = "heavy";
        const newTest = new AgeExpectancy(age, region, gender, exercise, alcohol);
        newTest.regionCalculator();
        newTest.genderCalculator();
        newTest.exerciseCalculator();
        expect(newTest.alcoholCalculator()).toEqual(90);
    });
});

//male

describe('AgeExpectancy', () => {
    test('should return average life expectancy based on alcohol use', () => {
        const age = 30;
        const region = "Americas";
        const gender = "male";
        const exercise = "never";
        const alcohol = "heavy";
        const newTest = new AgeExpectancy(age, region, gender, exercise, alcohol);
        newTest.regionCalculator();
        newTest.genderCalculator();
        newTest.exerciseCalculator();
        expect(newTest.alcoholCalculator()).toEqual(72);
    });
});
describe('AgeExpectancy', () => {
    test('should return average life expectancy based on alcohol use', () => {
        const age = 30;
        const region = "Americas";
        const gender = "male";
        const exercise = "heavy";
        const alcohol = "heavy";
        const newTest = new AgeExpectancy(age, region, gender, exercise, alcohol);
        newTest.regionCalculator();
        newTest.genderCalculator();
        newTest.exerciseCalculator();
        expect(newTest.alcoholCalculator()).toEqual(85);
    });
});
describe('AgeExpectancy', () => {
    test('should return average life expectancy based on alcohol use', () => {
        const age = 30;
        const region = "Americas";
        const gender = "male";
        const exercise = "sometimes";
        const alcohol = "never";
        const newTest = new AgeExpectancy(age, region, gender, exercise, alcohol);
        newTest.regionCalculator();
        newTest.genderCalculator();
        newTest.exerciseCalculator();
        expect(newTest.alcoholCalculator()).toEqual(81);
    });
});
describe('AgeExpectancy', () => {
    test('should return average life expectancy based on alcohol use', () => {
        const age = 30;
        const region = "Americas";
        const gender = "male";
        const exercise = "sometimes";
        const alcohol = "moderate";
        const newTest = new AgeExpectancy(age, region, gender, exercise, alcohol);
        newTest.regionCalculator();
        newTest.genderCalculator();
        newTest.exerciseCalculator();
        expect(newTest.alcoholCalculator()).toEqual(79);
    });
});
describe('AgeExpectancy', () => {
    test('should return average life expectancy based on alcohol use', () => {
        const age = 30;
        const region = "Americas";
        const gender = "male";
        const exercise = "sometimes";
        const alcohol = "minimal";
        const newTest = new AgeExpectancy(age, region, gender, exercise, alcohol);
        newTest.regionCalculator();
        newTest.genderCalculator();
        newTest.exerciseCalculator();
        expect(newTest.alcoholCalculator()).toEqual(81);
    });
});
describe('AgeExpectancy', () => {
    test('should return average life expectancy based on alcohol use', () => {
        const age = 30;
        const region = "Americas";
        const gender = "male";
        const exercise = "never";
        const alcohol = "moderate";
        const newTest = new AgeExpectancy(age, region, gender, exercise, alcohol);
        newTest.regionCalculator();
        newTest.genderCalculator();
        newTest.exerciseCalculator();
        expect(newTest.alcoholCalculator()).toEqual(75);
    });
});