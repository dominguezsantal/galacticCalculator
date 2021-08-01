import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import AgeCalculator from './js/calculator.js';
import AgeExpectancy from './js/expectedAge.js';


$(document).ready(function() {
    $("form#userInput").submit(function(event) {
        event.preventDefault();
        let age = $("#userAge").val();
        let region = $("#region").val();
        let gender = $("input:radio[name=gender]:checked").val();
        let exercise = $("input:radio[name=exercise]:checked").val();
        let alcohol = $("input:radio[name=alcohol]:checked").val();

        let userInfo = new AgeExpectancy(age, region, gender, exercise, alcohol);

        userInfo.regionCalculator();
        userInfo.genderCalculator();
        userInfo.exerciseCalculator();
        userInfo.alcoholCalculator();
        const userLifeExpectancy = userInfo.ageExpectancy;

        let solarAge = new AgeCalculator(age, userLifeExpectancy);




        $("#userInput").hide();
        $(".button").hide();
        $("#output").show();

    });
});