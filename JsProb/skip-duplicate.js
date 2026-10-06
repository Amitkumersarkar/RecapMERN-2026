// array has some duplicate elements
const pizzaLover = ['amit', 'niloy', 'antik', 'surjo', 'amit', 'niloy'];
const num = [1, 5, 50, 70, 30];

function noDuplicate(array) {
    const unique = [];
    for (const item of array) {
        if (unique.includes(item) === false) {
            unique.push(item);
        }
    }
    return unique;
}
const uniqueArray = noDuplicate(pizzaLover);
console.log(uniqueArray);