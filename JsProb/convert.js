function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}
const myHeight = inchToFeet(70);
console.log(myHeight);