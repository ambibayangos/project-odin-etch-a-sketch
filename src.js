/*

***********************************************
1. There is a bug when changing the grid size
2. Implement color mode.
3. Fix bug when the mouse is held down.
************************************************


*/

let drawFlag = 0;
let colorMode = 0;
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
    if(drawFlag){
        
        if(!colorMode){
            this.style.backgroundColor = `rgb(${0},${0},${0})`;
            return;
        }
        
        let elementRGB = getElementRGBValue(this);
        RValue = +elementRGB[0];
        GValue = +elementRGB[1];
        BValue = +elementRGB[2];
        let elementBackgroundIsWhite = RValue === 255 && GValue === 255 && BValue === 255;
        if(elementBackgroundIsWhite){
            let randomRGB = generateRandomRBGValue();
            this.style.backgroundColor = `rgb(${randomRGB[0]},${randomRGB[1]},${randomRGB[2]})`;
        }else{
            RValue =  (+elementRGB[0] - 25) <= 0 ? 0 : +elementRGB[0] - 25;
            GValue =  (+elementRGB[1] - 25) <= 0 ? 0 : +elementRGB[1] - 25;
            BValue =  (+elementRGB[2] - 25) <= 0 ? 0 : +elementRGB[2] - 25;
            this.style.backgroundColor = `rgb(${RValue},${GValue},${BValue})`;
        }
    }
}

function generateRandomRBGValue(){
    let R = Math.round(Math.random()*255);
    let G = Math.round(Math.random()*255);
    let B = Math.round(Math.random()*255);
    return [R,G,B];
}

function getElementRGBValue(element){
    let rawRGB  = window.getComputedStyle(element).backgroundColor;
    let reg = /[0-9]+, [0-9]+, [0-9]+/;
    let processedRGB = reg.exec(rawRGB);
    let rgbArray = processedRGB[0].split(',');
    return rgbArray;
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
    
    if(!gridSize || +gridSize > 100){
        gridSize = 2;
    }

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

const colorModeButtonElement = document.querySelector('.chande-mode-button');
colorModeButtonElement.addEventListener('click', () =>{

    if(colorMode){
        colorMode = 0;
        colorModeButtonElement.textContent = 'Color mode';
        colorModeButtonElement.classList.remove('chande-mode-button-black');
        colorModeButtonElement.classList.add('chande-mode-button');

    }else{
        colorMode = 1;
        colorModeButtonElement.textContent = 'Black and white mode';
        colorModeButtonElement.classList.add('chande-mode-button-black');
        colorModeButtonElement.classList.remove('chande-mode-button');
    }
});

createGrid(5);

// if the color is white then make a random color
// else increase the RBG values by 10% each pass
// then after 10 pass the RBG should be black.