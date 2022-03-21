const container = document.querySelector('#container');

function createGrid(n) {
    for (let i = 0; i < n * n; i++) {
        const div = document.createElement('div')
        div.classList.toggle('box');
        div.style.width = (String(800 / n) + 'px');
        div.style.height = (String(800 / n) + 'px');
        container.appendChild(div);
    }
}

createGrid(32);


const clear = document.querySelector('.clear');
clear.addEventListener('click', clearGrid);

function clearGrid() {
    const boxes = container.querySelectorAll('.box');
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].remove();
    }
    let boxSize = Number(prompt("Enter number of boxes per side (100 max): ", 64));
    if (boxSize > 100) {
        boxSize = 100;
    }
    if (boxSize == 0) {
        boxSize = 16;
    }
    createGrid(boxSize);
}

const pen = document.querySelector('.pen');
pen.addEventListener('click', draw);

function draw() {
    container.addEventListener('mouseover', changeColor);
    function changeColor(e) {
        e.target.style.cursor = "url('./pencil.cur'), auto";
        e.target.style.backgroundColor = 'black';
    }
}

const eraser = document.querySelector('.eraser');
eraser.addEventListener('click', erase);

function erase() {
    container.addEventListener('mouseover', changeColor);
    function changeColor(e) {
        e.target.style.cursor = "url('./eraser.cur'), auto";
        e.target.style.backgroundColor = 'white';
    }
}