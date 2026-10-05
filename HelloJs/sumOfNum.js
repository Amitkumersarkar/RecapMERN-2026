function sumOfNum(num) {
    let sum = 0;
    for (const number of num) {
        console.log(number);
        sum = sum + number;
    }
    return sum;
}
const numbs = [50, 60, 65, 12, 30];
const sum = sumOfNum(numbs);
console.log('sum of the numbers is : ', sum);