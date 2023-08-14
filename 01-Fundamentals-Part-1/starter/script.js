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


///////////////////////////////////////
// Type Conversion and Coercion
///////////////////////////////////////
// type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");

let n = "1" + 1;
n = n - 1;
console.log(n);


///////////////////////////////////////
//  Truthy and Falsy Values
///////////////////////////////////////
// 5 falsy values: 0, "", undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Claudio"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log("You should get a job!");
}

let height = 0;
if (height) {
    console.log("YAY! Height is defined");
} else {
    console.log("Height is UNDEFINED");
}


///////////////////////////////////////
//  Equality Operators: == vs. ===
///////////////////////////////////////
const age = "18";
if (age === 18) console.log("You just became an adult :D (strict)");

if (age == 18) console.log("You just became an adult :D (loose)");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 6) {
    console.log("Cool! 6 is an amazing number!");
} else if (favourite === 7) {
    console.log("7 is also a cool number");
} else if (favourite === 9) {
    console.log("9 is also a cool number");
} else {
    console.log("Number is not 6 or 7 or 9");
}

if (favourite !== 6) console.log("Why not 6?");
*/

