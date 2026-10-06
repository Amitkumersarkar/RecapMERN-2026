// function takes an array as parameter
// give me the average of the odd numbers in the array
function oddAvg(num) {
    for (const numbers of num) {
        if (numbers % 2 === 1)
            console.log(numbers);
    }
}
const num = [40, 30, 50, 20, 60];
const avg = oddAvg(num);
console.log('average of the odd number is : ', avg);