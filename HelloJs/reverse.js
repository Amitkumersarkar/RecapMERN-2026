const sentence = 'iam a full stack developer';
let reverse = '';
for (const letter of sentence) {
    reverse = letter + reverse;
}
console.log(reverse);