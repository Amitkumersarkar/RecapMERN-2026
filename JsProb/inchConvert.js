function inchToFeet(inch) {
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + 'ft ' + inchRemaining + 'inch'
    return result;
}
const myHeight = inchToFeet(70);
console.log(myHeight);