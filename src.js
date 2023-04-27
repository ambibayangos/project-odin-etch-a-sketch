let drawFlag = 0;

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
                colElement.addEventListener('mousedown',enableDrawFlag);
                colElement.addEventListener('mouseup',disableDrawFlag);
                colElement.addEventListener('mouseover',setElementBackgroundColor);

                rowElement.append(colElement);
            }
            gridBoxElement.append(rowElement);
        }
}


function setElementBackgroundColor(){
    console.log(this);
    if(drawFlag){
        this.setAttribute('style', 'background-color: black');
    }
}

function disableDrawFlag(){
    drawFlag = 0;
}

function enableDrawFlag(){
    drawFlag = 1;
}


createGrid(20);
