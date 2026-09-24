const price = 2500;

if (price >= 2500) {
    const discount = price * 10 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}