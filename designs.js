
// Select color input
let color;
let colorPick = document.getElementById('colorPicker');
//listen for change in color selection from default color
colorPick.addEventListener('change', function(){
    color = document.getElementById('colorPicker').value;
});

let submitButton = document.getElementById('submitButton');
//listen for click on submit button
submitButton.addEventListener('click', buttonAction);
let count = 0;

//calls make grid if first submit click
//clears inner HTML and makes new grid if any addt'l clicks
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


