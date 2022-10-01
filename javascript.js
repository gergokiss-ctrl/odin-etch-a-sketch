const container = document.querySelector('#container');
let gridSize = 16;
let counter = 1;

createGrid(gridSize);

function createGrid(gridSize) {
    for (i = 1; i <= gridSize; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);

        for (j = 1; j <= gridSize; j++, counter++) {
            let column = document.createElement('div');
            column.textContent = (`${counter}`);
            column.classList.add('column');
            row.appendChild(column);
        }
    }
}