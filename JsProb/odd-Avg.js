// function takes an array as parameter
// give me the average of the odd numbers in the array
// function takes an array as parameter
// give me the average of the odd numbers in the array

function oddAvg(num) {
    let sum = 0;
    let count = 0;

    for (const number of num) {
        if (number % 2 === 1) {
            sum += number;
            count++;
        }
    }

    return sum / count;
}

const num = [40, 30, 51, 20, 61];

const avg = oddAvg(num);

console.log('Average of the odd numbers is:', avg);