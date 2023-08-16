let gridSize = 20

const grid = document.querySelector('.grid');
const eraseButton = document.getElementById('erase');

// Function to create the grid items
function createGrid(gridSize) {
    gridSize *= gridSize
    for (let i = 0; i < gridSize; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        grid.appendChild(gridItem);
    }
}

// Create a grid-items
createGrid(gridSize);

// Create grid
grid.style.gridTemplateColumns = `repeat(${gridSize}, calc(100% / ${gridSize}))`;
grid.style.gridTemplateRows = `repeat(${gridSize}, calc(100% / ${gridSize}))`;

// Sketching
const gridItems = document.querySelectorAll('.grid-item');
let isDrawing = false;

// Function to create a random color
function randomColor() {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}

gridItems.forEach(item => {
    item.addEventListener('mousedown', () => {
        isDrawing = true;
        item.style.backgroundColor = randomColor() // Change color when clicked
    });

    item.addEventListener('mouseover', () => {
        if (isDrawing) {
            item.style.backgroundColor = randomColor() // Change color when dragging
        }
    });

    item.addEventListener('mouseup', () => {
        isDrawing = false;
    });
});

// reset all grid items to white
eraseButton.addEventListener('click', () => {
    gridItems.forEach(item => {
            item.style.backgroundColor = 'white'; // Change color when clicked
        });
  });

  

