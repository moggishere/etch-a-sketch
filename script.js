const container = document.getElementById('container');

function gridMaker(row, column) {
    container.style.setProperty('--grid-rows', row);
    container.style.setProperty('--grid-columns', column);
    for (let i = 0; i < column*row; i++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'gridCell';
        cell.classList.add("neutral")
        // cell.innerText = (i +1);
        //cell.classList.add("painted-black");
    }
}

gridMaker(16, 16);

let painted = document.querySelectorAll(".neutral");
painted.addEventListener('click', e => {
    cell.classList.add("painted-black");
});

// cell.classList.add("painted-black");