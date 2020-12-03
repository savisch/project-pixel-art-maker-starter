
// Select color input
let color;
let colorPick = document.getElementById('colorPicker');
colorPick.addEventListener('change', function(){
    color = document.getElementById('colorPicker').value;
});

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
        };
    };
};
