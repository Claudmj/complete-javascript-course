"use strict";

/*
///////////////////////////////////////
// Assignment: Functions
///////////////////////////////////////
function describeCountry(country, population, capitalCity) {
    const describeCountryString = `${country} has ${population} million people and its capital city is ${capitalCity}`;

    return describeCountryString
}

const descPortugal = describeCountry("Portugal", 10, "Lisbon");
const descSouthAfrica = describeCountry("South Africa", 60, "Cape Town");
const descFinland = describeCountry("Findland", 6, "Helsinki");
console.log(descPortugal, descSouthAfrica, descFinland);
*/

///////////////////////////////////////
// Assignment: Function Declarations vs. Expressions
///////////////////////////////////////
function percentageOfWorld1(population) {
    return population / 7900 * 100;
}

const percPortugal1 = percentageOfWorld1(10);
const percSouthAfrica1 = percentageOfWorld1(60);
const percChina1 = percentageOfWorld1(1441);
console.log(percPortugal1, percSouthAfrica1, percChina1);

const percentageOfWorld2 = function (population) {
    return population / 7900 * 100;
}

const percPortugal2 = percentageOfWorld2(10);
const percSouthAfrica2 = percentageOfWorld2(60);
const percChina2 = percentageOfWorld2(1441);
console.log(percPortugal2, percSouthAfrica2, percChina2);
