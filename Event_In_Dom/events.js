function makeGreen() {
    document.body.style.backgroundColor = 'green';
}

document.getElementById('btn-make-purple').addEventListener('click', function makePurple() {
    document.body.style.backgroundColor = 'purple';
})

document.getElementById('btn-update-title').addEventListener('click', function () {
    const titleText = document.getElementById('text-Title');
    console.log(titleText);
})