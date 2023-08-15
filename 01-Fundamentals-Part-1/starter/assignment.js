
/*
///////////////////////////////////////
// Assignment Values and Variables
///////////////////////////////////////
let country = "South Africa";
let continent = "Africa";
let population = 60;

console.log(country);
console.log(continent);
console.log(population);


///////////////////////////////////////
// Assignment Data Types
///////////////////////////////////////
let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);


///////////////////////////////////////
// Assignment let, const and var
///////////////////////////////////////
language = "English";

const country = "South Africa";
const continent = "Africa";
let population = 60;
const isIsland = false;
//isIsland = true;


///////////////////////////////////////
// Assignment Basic Operators
///////////////////////////////////////
console.log(population / 2);
population++;
console.log(population);

const populationFinland = 6;
console.log(population > populationFinland);

console.log(population < 33);

const description = country + " is in " + continent + ", and its " + population + " million people speak " + language;
console.log(description)


///////////////////////////////////////
// Assignment Strings and Template Literals
///////////////////////////////////////
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;


///////////////////////////////////////
// Assignment Taking Decisions: if / else Statements
///////////////////////////////////////
//const population = 130;
//const country = "South Africa";
if (population > 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${33 - population} million below average`);
}


///////////////////////////////////////
// Assignment Type Conversion and Coercion
///////////////////////////////////////
console.log("9" - "5"); // -> 4
console.log("19" - "13" + "17"); // -> "617"
console.log("19" - "13" + 17); // -> 23
console.log("123" < 57); // -> false
console.log(5 + 6 + "4" + 9 - 4 - 2); // -> 1143


///////////////////////////////////////
// Assignment Equality Operators: == vs. ===
///////////////////////////////////////
const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));

if (numNeighbours === 1) {
    console.log("Only 1 border!");
} else if (numNeighbours > 1) {
    console.log("More than 1 border in case");
} else {
    console.log("No borders");
}


///////////////////////////////////////
// Assignment Logical Operators
///////////////////////////////////////
let country = "South Africa";
let language = "English";
let population = 40;
let isIsland = false;

if (language === "English" && population < 50 && !isIsland) {
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}


///////////////////////////////////////
// Assignment The switch Statement
///////////////////////////////////////
const language = "english";

switch (language) {
    case "chinese":
    case "mandarin":
        console.log("MOST number of native speakers!");
        break;
    case "spanish":
        console.log("2nd place in number of native speakers");
        break;
    case "english":
        console.log("3rd place");
        break;
    case "hindi":
        console.log("Number 4");
        break;
    case "arabic":
        console.log("5th most spoken language");
        break;
    default:
        console.log("Great language too :D");
}


///////////////////////////////////////
// Assignment The Conditional (Ternary) Operator
///////////////////////////////////////
const country = "South Africa";
const population = 60;

console.log(`${country}'s population is ${population > 33 ? "above" : "below"} average`);
*/