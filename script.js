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
        cell.setAttribute('id', `${i+1}`);
    }
}

gridMaker(16, 16);

// let painted = document.querySelectorAll(".neutral");
// painted.addEventListener('mouseover', e => {
//     cell.classList.add("painted-black");
// });

// document.getElementById('test01').style.backgroundColor = 'black';

function paintCell() {
    const painted = document.querySelectorAll(".neutral");
    for (let i = 0; i < painted.length; i++) {
        painted[i].addEventListener('mouseover', e => {
            console.log(e);
            document.getElementById(`${i+1}`).style.backgroundColor = 'gray';
        });
    }
}

paintCell();

// cell.classList.add("painted-black");