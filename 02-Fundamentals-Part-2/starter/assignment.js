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


///////////////////////////////////////
// Assignment: Arrow Functions
///////////////////////////////////////
const percentageOfWorld2 = population => (population / 7900) * 100;

const percPortugal2 = percentageOfWorld2(10);
const percSouthAfrica2 = percentageOfWorld2(60);
const percChina2 = percentageOfWorld2(1441);
console.log(percPortugal2, percSouthAfrica2, percChina2);


///////////////////////////////////////
// Assignment: Functions Calling Other Functions
///////////////////////////////////////
function percentageOfWorld1(population) {
return (population / 7900) * 100;
}

function describePopulation(country, population) {
    const percentage = percentageOfWorld1(population);
    const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;

    return description;
}

console.log(describePopulation("Portugal", 10));
console.log(describePopulation("China", 1441));
console.log(describePopulation("South Africa", 60));


///////////////////////////////////////
// Assignment: Introduction to Arrays
///////////////////////////////////////
function percentageOfWorld1(population) {
    return population / 7900 * 100;
}

const populations = [10, 1441, 60, 6];
console.log(populations.length === 4);
const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
console.log(percentages);


///////////////////////////////////////
// Assignment: Basic Array Operations (Methods)
///////////////////////////////////////
const neighbours = ["France", "Germany", "Netherlands", "Luxembourg"];

neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("Germany")) {
    console.log("Probably not a central European country :D");
}

neighbours[neighbours.indexOf("Luxembourg")] = "Still Luxembourg";
console.log(neighbours);


///////////////////////////////////////
// Assignment: Introduction to Objects
///////////////////////////////////////
const myCountry = {
    country: "Portugal",
    capital: "Lisbon",
    language: "Portuguese",
    population: 60,
    neighbours: ["Spain"]
};



///////////////////////////////////////
// Assignment: Dot vs. Bracket Notation
///////////////////////////////////////
const myCountry = {
    country: "Portugal",
    capital: "Lisbon",
    language: "Portuguese",
    population: 60,
    neighbours: ["Spain"]
};
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

myCountry.population += 2;
console.log(myCountry.population);
myCountry["population"] -= 2;
console.log(myCountry.population);


///////////////////////////////////////
// Assignment: Object Methods
///////////////////////////////////////
const myCountry = {
    country: "Portugal",
    capital: "Lisbon",
    language: "Portuguese",
    population: 60,
    neighbours: ["Spain"],
    describe: function() {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
    },
    checkIsland: function() {
        this.isIsland = this.neighbours.length === 0 ? true : false;
    }
};
myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);


///////////////////////////////////////
// Assignment: Iteration: The for Loop
///////////////////////////////////////
for (let i = 1; i <= 50; i++) {
    console.log(`Voter number ${i} is currently voting`);
}


///////////////////////////////////////
// Assignment: Looping Arrays, Breaking and Continuing
///////////////////////////////////////
function percentageOfWorld1(population) {
    return population / 7900 * 100;
}

const populations = [10, 1441, 60, 6];
const percentages2 = [];
for (let i = 1; i < populations.length; i++) {
    percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(percentages2);


///////////////////////////////////////
// Assignment: Looping Backwards and Loops in Loops
///////////////////////////////////////
const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
];

for (let row = 0; row < listOfNeighbours.length; row++) {
    for (let col = 0; col < listOfNeighbours[row].length; col++) {
        console.log(`Neighbour: ${listOfNeighbours[row][col]}`);
    }
}


///////////////////////////////////////
// Assignment: The while Loop
///////////////////////////////////////
function percentageOfWorld1(population) {
    return population / 7900 * 100;
}

const populations = [10, 1441, 60, 6];
const percentages3 = [];
let i = 0;
while (i < populations.length) {
    percentages3.push(percentageOfWorld1(populations[i]));
    i++;
}
console.log(percentages3);
*/























