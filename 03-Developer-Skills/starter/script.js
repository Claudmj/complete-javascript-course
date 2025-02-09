// Remember, we're gonna use strict mode in all scripts now!
'use strict';


/*
const x = "23";
if (x === 23) console.log(23);

const calcAge = birthYear => 2037 - birthYear;

console.log(calcAge(1991));


///////////////////////////////////////
// Using Google, StackOverflow and MDN
///////////////////////////////////////

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it
function calcAmplitude(temps) {
    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i]
        if (typeof curTemp !== "number") continue;

        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }

    console.log(max, min);
    return max - min;
};
const amplitude = calcAmplitude(temperatures);
console.log(amplitude);


// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays
function calcAmplitudeNew(t1, t2) {
    const temps = t1.concat(t2);
    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i]
        if (typeof curTemp !== "number") continue;

        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }

    console.log(max, min);
    return max - min;
};
const amplitudeNew = calcAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
 

///////////////////////////////////////
// Debugging with the Console and Breakpoints
///////////////////////////////////////
function measureKelvin() {
    const measurement = {
        type: "temp",
        unit: "celsius",
        // value: Number(prompt("Degree celsius:"))
        value: 10
    }
    // console.log(measurement);
    // console.table(measurement);
    const kelvin = measurement.value + 273;

    return kelvin;
}
console.log(measureKelvin());


// Using a debugger
function calcAmplitudeBug(t1, t2) {
    const temps = t1.concat(t2);
    let max = 0;
    let min = 0;
    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i]
        if (typeof curTemp !== "number") continue;

        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }

    console.log(max, min);
    return max - min;
};
const amplitudeBug = calcAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) Identified bug
console.log(amplitudeBug);
*/

///////////////////////////////////////
// Coding Challenge #1
///////////////////////////////////////
/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/
/*
function printForecast(arr) {
    let printString = "";
    for (let i = 0; i < arr.length; i++) {
        printString += `${arr[0]}ºC in ${i + 1} days ... `;
    }
    console.log("..." + printString);
}

const DATA1 = [17, 21, 23];
const DATA2 = [12, 5, -5, 0, 4];
printForecast(DATA1);
printForecast(DATA2);
*/