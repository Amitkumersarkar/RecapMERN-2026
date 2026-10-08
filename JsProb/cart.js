const products = [
    { name: 'toothPaste', price: 150 },
    { name: 'shampoo', price: 350 },
    { name: 'milkPowder', price: 450 },
    { name: 'iceCream', price: 50 },

]

function getShoppingTotal(products) {
    for (const product of products)
        console.log(product);
}
const total = getShoppingTotal(products);
console.log('total cost : ', total);