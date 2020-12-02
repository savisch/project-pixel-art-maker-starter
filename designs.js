
let table = document.getElementById('pixelCanvas');
// Select color input
let color = document.getElementById('colorPicker');
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    let height = document.getElementById('inputHeight').value;
    let width = document.getElementById('inputWidth').value;
    for(let i = 0; i < height; i ++){
        let row = table.insertRow();
        for(let j = 0; j < width; j ++){
            let cell = row.insertCell();
            cell.innerHTML = "";
        }
    }
}

