const container = document.getElementById('container');

function gridMaker(row, column) {
    container.style.setProperty('--grid-rows', row);
    container.style.setProperty('--grid-columns', column);
    for (let i = 0; i < column * row; i++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'gridCell';
        cell.classList.add("neutral");
        // cell.classList.add(`${i+1}`);
        // cell.innerText = (i +1);
        //cell.classList.add("painted-black");
        cell.setAttribute('id', `${i + 1}`);
    }
}

function paintCell() {
    const painted = document.querySelectorAll(".neutral");
    for (let i = 0; i < painted.length; i++) {
        painted[i].addEventListener('mouseover', e => {
            console.log(e);
            document.getElementById(`${i + 1}`).style.backgroundColor = '#424242';
        });
    }
    if (draw == false) {
        return false;
    }
}

const cleared = document.getElementById("clear");
cleared.addEventListener('click', e => {
    console.log(e);
    const painted = document.querySelectorAll(".neutral");
    for (let i = 0; i < painted.length; i++) {
        document.getElementById(`${i + 1}`).style.backgroundColor = null;
    }
})

const stopButton = document.getElementById("default");
stopButton.addEventListener('click', e => {
    draw = false;
});

const resizeButton = document.getElementById("resize");
resizeButton.addEventListener('click', e => {
    console.log(e);
    let userRows = prompt("Input number of rows", "eg. 16");
    let userColumns = prompt("Input number of columns", "eg. 16");

    const painted = document.querySelectorAll(".neutral");
    for (let i = 0; i < painted.length; i++) {
        document.getElementById(`${i + 1}`).remove();
        // painted[i].addEventListener('mouseover', e => {
        //     document.getElementById(`${i + 1}`).remove();
        // });
    }

    gridMaker(userRows, userColumns);
    paintCell();
})

window.onload = gridMaker(16, 16), paintCell();
