/*

***********************************************
1. There is a bug when changing the grid size
2. Implement color mode.
3. Fix bug when the mouse is held down.
************************************************


*/

let drawFlag = 0;
const drawingBoardPixelSize = 600;

const gridBoxElement = document.querySelector('.grid-box');

function createGrid(gridSize){
    for(let row = 0; row < gridSize ; row++){
        let rowElement = document.createElement('div');
        rowElement.setAttribute('id',`row${row}`);
        rowElement.classList.add('row');
            for(let col = 0; col < gridSize; col++){
                let colElement = document.createElement('div');
                colElement.setAttribute('id', `row${row}-col${col}`);
                colElement.classList.add('col');
                colElement.setAttribute('style', 
                `height:${drawingBoardPixelSize/gridSize}px;
                 width:${drawingBoardPixelSize/gridSize}px;`);
                colElement.addEventListener('mousedown',enableDrawFlag);
                colElement.addEventListener('mouseup',disableDrawFlag);
                colElement.addEventListener('mouseover',setElementBackgroundColor);
                rowElement.append(colElement);
            }
            gridBoxElement.append(rowElement);
        }
}


function setElementBackgroundColor(){
    let gridItemBackgroundColor = this.style.backgroundColor;
    if(gridItemBackgroundColor === ''){
        // set back ground color to anything
        if(drawFlag){
            this.style.backgroundColor  = "black";
        }
    }else{
        // increase RGB value until its completely black
    }

   
}

function disableDrawFlag(){
    drawFlag = 0;
}

function enableDrawFlag(){
    drawFlag = 1;
}


const createGridButtonElement = document.querySelector('.select-grid-button');
createGridButtonElement.addEventListener('click', () =>{
    let gridSize = prompt('Enter the grid size!');
    const colItems = document.querySelectorAll('.col');
    colItems.forEach(col =>{
        col.remove();
    });

    const rowItems = document.querySelectorAll('.row');
    rowItems.forEach(row =>{
        row.remove();
    });
    createGrid(+gridSize);
});


const clearGridButtonElement = document.querySelector('.clear-grid-button');
clearGridButtonElement.addEventListener('click', () =>{
    const gridItems = document.querySelectorAll('.col');
    gridItems.forEach(item =>{
        item.style.backgroundColor  = "white";
    });
});


createGrid(5);

