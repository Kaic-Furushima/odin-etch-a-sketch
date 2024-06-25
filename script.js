function mouseOver(event) {
    event.target.style.backgroundColor = 'black';
}

function createGrid(size) {
    gridContainer.innerHTML = '';

    for (let i = 0; i < size; i++) {
        const gridContainerRow = document.createElement('div');
        gridContainerRow.classList.add("gridRow");

        for (let j = 0; j < size; j++) {
            const cell = document.createElement('div');
            cell.classList.add("gridCell");
            gridContainerRow.appendChild(cell);
            cell.addEventListener('mouseover', mouseOver);
        }

        gridContainer.appendChild(gridContainerRow);
    }    
}

const gridContainer = document.querySelector("#gridContainer");
const gridSizeSelector = document.querySelector("#gridSizeSelector")

createGrid(16);

gridSizeSelector.addEventListener('click', () => {
    let input = prompt('Enter grid size: ');
    let size = parseInt(input);

    if (size > 0) {
        createGrid(size);
    }
});