/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

///////////////////////////////////////
// Values and Variables
///////////////////////////////////////
console.log("Claudio");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
let $function = 27;

let person = "Claudio";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);


///////////////////////////////////////
// Data Types
///////////////////////////////////////
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

//console.log(typeof true);
console.log(typeof javaScriptIsFun);
//console.log(typeof 23);
//console.log(typeof "Jonas");

javaScriptIsFun = "YES!";
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


///////////////////////////////////////
// let, const and var
///////////////////////////////////////
let age = 30;
age = 31;

const birthYear = 1991;
//birthYear = 1990;
//const job;

var job = "programmer";
job = "teacher";

lastName = "Jardim";
console.log(lastName);


///////////////////////////////////////
// Assignment Basic Operators
///////////////////////////////////////
// Math operators
const now = 2037;
const ageClaudio = now - 1998;
const ageSarah = now - 2018;
console.log(ageClaudio, ageSarah);

console.log(ageClaudio * 2, ageClaudio / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Claudio";
const lastName = "Jardim";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10
x *= 4; // x = x * 4
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageClaudio > ageSarah); // >, <. >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1998 > now - 2018);


///////////////////////////////////////
// Assignment Operator Precedence
///////////////////////////////////////
const now = 2037;
const ageClaudio = now - 1998;
const ageSarah = now - 2018;

console.log(now - 1998 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageClaudio + ageSarah) / 2;
console.log(ageClaudio, ageSarah, averageAge);


///////////////////////////////////////
// Strings and Template Literals
///////////////////////////////////////
const firstName = "Claudio";
const job = "Data Scientist";
const birthYear = 1998;
const year = 2037;

const claudio = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(claudio);

const claudioNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(claudioNew);

console.log(`Just a regular string...`);

console.log("String with \n\
multiple \n\
lines");

console.log(`String
multiple
lines`);


///////////////////////////////////////
// Taking Decisions: if / else Statements
///////////////////////////////////////
const age = 15;

if (age >= 18) {
    console.log("Sarah can start driving license");
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/