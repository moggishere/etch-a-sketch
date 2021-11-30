const container = document.getElementById('container');

function gridMaker(row, column) {
    container.style.setProperty('--grid-rows', row);
    container.style.setProperty('--grid-columns', column);
    for (let i = 0; i < column * row; i++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'gridCell';
        cell.classList.add("neutral");
        cell.setAttribute('id', `${i + 1}`);
    }
}

function paintCell() {
    const painted = document.querySelectorAll(".neutral");
    for (let i = 0; i < painted.length; i++) {
        painted[i].addEventListener('mouseover', e => {
            document.getElementById(`${i + 1}`).style.backgroundColor = '#424242';
        });
    }
}

function rainbowCell() {
    const painted = document.querySelectorAll(".neutral");
    for (let i =0; i < painted.length; i++) {
        painted[i].addEventListener('mouseover', e => {
            document.getElementById(`${i + 1}`).style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        })
    }
}

const defaultButton = document.getElementById("default");
defaultButton.addEventListener('click', e => {
    paintCell();
})

const rainbowButton = document.getElementById("rainbow");
rainbowButton.addEventListener('click', e=> {
    rainbowCell();
})

const cleared = document.getElementById("clear");
cleared.addEventListener('click', e => {
    console.log(e);
    const painted = document.querySelectorAll(".neutral");
    for (let i = 0; i < painted.length; i++) {
        document.getElementById(`${i + 1}`).style.backgroundColor = null;
    }
})

const resizeButton = document.getElementById("resize");
resizeButton.addEventListener('click', e => {
    console.log(e);
    let userRows = prompt("Input number of rows", "eg. 16");
    let userColumns = prompt("Input number of columns", "eg. 16");

    const painted = document.querySelectorAll(".neutral");
    for (let i = 0; i < painted.length; i++) {
        document.getElementById(`${i + 1}`).remove();
        
    }

    gridMaker(userRows, userColumns);
})

window.onload = gridMaker(16, 16), paintCell();
