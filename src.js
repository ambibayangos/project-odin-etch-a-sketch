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
                colElement.addEventListener('mousedown',temp);

                rowElement.append(colElement);
            }
            gridBoxElement.append(rowElement);
        }
}


function temp(){
    console.log(this);
    this.setAttribute('style', 'background-color: black');
}

createGrid(10);


/*
const gridItems = document.querySelectorAll('.col');
console.log(gridItems);


gridItems.forEach(item  => {
    addEventListener('mousedown', () =>{
        console.log(item);
        //item.setAttribute('style', 'background-color: black');
    
    });
});
*/