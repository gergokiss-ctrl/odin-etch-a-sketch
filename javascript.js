const container = document.querySelector('#container');
const button = document.querySelector('#button');
let gridSize = 16;

createGrid(gridSize);
let gridElements = document.querySelectorAll('div.column');

gridElements.forEach(column => column.addEventListener('pointerenter', function (e) {
    e.target.style.background = 'orange';
}))

button.addEventListener('click', () => {
    gridSize = prompt("Enter a grid size", 16);

    while (gridSize > 100) {
        alert('Please enter a number lower or equal to 100!');
        gridSize = prompt("Enter a grid size", 100);
    }

    while (container.firstChild) {
        container.firstChild.remove();
    }

    createGrid(gridSize);
    gridElements = document.querySelectorAll('div.column');
    gridElements.forEach(column => column.addEventListener('pointerenter', function (e) {
        e.target.style.background = 'orange';
    }))
})

function createGrid(gridSize) {
    for (i = 1; i <= gridSize; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);

        for (j = 1; j <= gridSize; j++) {
            let column = document.createElement('div');
            column.classList.add('column');
            row.appendChild(column);
        }
    }
}