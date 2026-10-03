const phone = {
    brand: 'apple',
    model: 'iphone 17 pro max',
    color: 'cyan',
    storage: 256,
    price: 150000,

}
for (const prop in phone) {
    console.log(prop);
}