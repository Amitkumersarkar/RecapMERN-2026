const iphonePrice = 155000;
if (iphonePrice > 150000) {
    const discountPrice = iphonePrice * 20 / 100;
    const payAmount = iphonePrice - discountPrice;
    console.log(payAmount)
}