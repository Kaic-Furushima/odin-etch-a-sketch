const gridContainer = document.querySelector("#gridContainer");
const gridSizeSelector = document.querySelector("#gridSizeSelector");
const selectMode = document.querySelector("#gridModeSelector")
let gridSize = 16;

function createGrid(size) {
    gridContainer.innerHTML = '';
    gridSize = size;

    for (let i = 0; i < size; i++) {
        const gridContainerRow = document.createElement("div");
        gridContainerRow.classList.add("gridRow");

        for (let j = 0; j < size; j++) {
            const cell = document.createElement("div");
            cell.classList.add("gridCell");
            gridContainerRow.appendChild(cell);
            cell.addEventListener("mouseover", mouseOver);
            cell.addEventListener("click", clearCell);
        }

        gridContainer.appendChild(gridContainerRow);
    }    
}

createGrid(gridSize);

const gridCell = document.querySelector(".gridCell")

function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1));
}

function mouseOver(event) {
    if(selectMode.options[selectMode.selectedIndex].value == "normal"){
        event.target.style.backgroundColor = "black";
    } else if(selectMode.options[selectMode.selectedIndex].value == "rgb"){
        let r = randomInteger(255);
        let g = randomInteger(255);
        let b = randomInteger(255);
        event.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    } else if(selectMode.options[selectMode.selectedIndex].value == "opacity"){
        let bgColor = window.getComputedStyle(event.target).backgroundColor;
        let rgbaValues = bgColor.match(/rgba?\((\d+), (\d+), (\d+),? ?([\d\.]+)?\)/);
        let r = parseInt(rgbaValues[1]);
        let g = parseInt(rgbaValues[2]);
        let b = parseInt(rgbaValues[3]);
        let a = parseFloat(rgbaValues[4]);
        if(a < 1){
            a += 0.1;
        } else {
            a = 1;
        }
        event.target.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
    }
}

function clearCell(event){
    event.target.style.backgroundColor = "white";
}

gridSizeSelector.addEventListener("click", () => {
    let size;
    do{
        let input = prompt("Enter grid size: ");
        size = parseInt(input);
    } while(size > 100 || size < 0)

        createGrid(size);
});

selectMode.addEventListener("change", () => {
    createGrid(gridSize);
});