// those year that is not divisible by 100 ,
//  if the year is divisible by 4 then it will be a leap year

function isLeapYear(year) {
    if (year % 100 !== 0 && year % 4 === 0) {
        return true;
    } if (year % 100 === 0 && year % 400 === 0) {
        return true;
    }
    else {
        return false;
    }
}
const isLeap = isLeapYear(2024);
console.log(isLeap);