function createGrid(size) {
    gridContainer.innerHTML = '';

    for (let i = 0; i < size; i++) {
        const gridContainerRow = document.createElement('div');
        gridContainerRow.classList.add("gridRow");

        for (let j = 0; j < size; j++) {
            const cell = document.createElement('div');
            cell.classList.add("gridCell");
            gridContainerRow.appendChild(cell);
        }

        gridContainer.appendChild(gridContainerRow);
    }    
}

const gridContainer = document.querySelector("#gridContainer");

createGrid(16);

