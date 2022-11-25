// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
    const result = numbers.filter(number => typeof number === "number");
    let ave = 0;
    result.forEach(e => {
    ave= ave + e 
    });
    return ave / result.length;
}

module.exports = average;
