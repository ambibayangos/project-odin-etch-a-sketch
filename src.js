let drawFlag = 0;
const drawingBoardPixelSize = 500;

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
    if(drawFlag){
        this.style.backgroundColor  = "black";
    }
}

function disableDrawFlag(){
    drawFlag = 0;
}

function enableDrawFlag(){
    drawFlag = 1;
}


const button = document.querySelector('.select-grid-button');
button.addEventListener('click', () =>{
    let gridSize = prompt('Enter the grid size!');
    console.log(gridSize);
    const gridItems = document.querySelectorAll('.col');
    gridItems.forEach(item => {
        item.remove();
    });

    createGrid(+gridSize);
});

createGrid(5);

