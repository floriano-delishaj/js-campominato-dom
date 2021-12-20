function randomNumber (minNum, maxNum) {
    const result = Math.floor(Math.random() * ((maxNum + 1) - minNum)) + minNum;
    return result;
}

function getRandomNumbers (k) {

    const array = [];

    while (array.length < 16) {
        const num = randomNumber (1, k);
        if (!array.includes(num)) {
            array.push(num)
        }
    }

    console.log(array);
    return array;
}

function createBox (output, x) {
    const newBox = document.createElement("div");
    newBox.className = 'box';
    newBox.innerHTML = x;
    output.append(newBox);
    newBox.addEventListener('click', function () {
    do {
        if (bombs.includes(x)) {
            this.classList.add('red');
            this.innerHTML = '';
            alert('GAME OVER');
            containerOutput.innerHTML = '';
        } else {
            this.classList.add('blue');
        }
    } while (bombs.length < 16)
    })
}

//mettere l'addEventListener del newBox all'interno del for così ogni volta che creare un box compara il numero dell'array con i numeri random a quello della i

function createGrid (max) {
    for (let i = 1; i <= max; i++) {

        createBox(containerOutput, i);
    }
}

let bombs = [];
const container = document.querySelector('.container');
const containerOutput = document.querySelector('.container-grid');
const selectionOne = document.getElementById('selection-1');
const selectionTwo = document.getElementById('selection-2');
const selectionThree = document.getElementById('selection-3');

// alert('Premi un pulsante per iniziare a giocare');

selectionOne.addEventListener('click', function () {
    containerOutput.innerHTML = ''; //ripulire la griglia
    bombs = getRandomNumbers(100);
    createGrid(100);
    container.classList.remove('small', 'medium');
    container.classList.add('big');
})
selectionTwo.addEventListener('click', function () {
    containerOutput.innerHTML = '';
    bombs =getRandomNumbers(81);
    createGrid(81);
    container.classList.remove('big', 'small');
    container.classList.add('medium');
})

selectionThree.addEventListener('click', function () {
    containerOutput.innerHTML = '';
    bombs = getRandomNumbers(49);
    createGrid(49);
    container.classList.remove('big', 'medium');
    container.classList.add('small');;
})