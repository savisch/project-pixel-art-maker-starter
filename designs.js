
// Select color input
let color;
let colorPick = document.getElementById('colorPicker');
colorPick.addEventListener('change', function(){
    color = document.getElementById('colorPicker').value;
});

let submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', buttonAction);
let count = 0;
function buttonAction(){
    count ++;
    if(count === 1){
        makeGrid()
    }else{
        document.getElementById('pixelCanvas').innerHTML = '';
        makeGrid();
    }
}

//create grid from input height and width
//add event listener on cells to change background-color
function makeGrid() {
    let table = document.getElementById('pixelCanvas');
    let height = document.getElementById('inputHeight').value;
    let width = document.getElementById('inputWidth').value;

    for(let i = 0; i < height; i ++){
        let row = table.insertRow();
        for(let j = 0; j < width; j ++){
            let cell = row.insertCell();
            cell.innerHTML = "";
            cell.addEventListener('click', function(){
                cell.style.backgroundColor = color;
            });
        }
    }
}


