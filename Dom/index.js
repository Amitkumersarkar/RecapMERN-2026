// console.log('Hello from js');
const student = {
    name: 'amit',
    id: 283,
    study: function (sub) {
        console.log('studying subject : ', sub);
    }
}

const liCollection = document.getElementsByTagName('li');
console.log(liCollection);
for (const li of liCollection) {
    console.log(li.innerText);
}

const allHeading = document.getElementsByTagName('h1');
console.log(allHeading);
for (const head of allHeading) {
    console.log(head.innerText);
}