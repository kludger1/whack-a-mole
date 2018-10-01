var startBtn = document.querySelector('#start-btn')
// var score = document.querySelectorAll('.score')
var moles = document.querySelectorAll('.mole')
let lastMole;
let gameOver = false;
let points = 0;



function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomMole(moles) {
    const idx = Math.floor(Math.random() * moles.length);
    const mole = moles[idx]

    if (mole === lastMole) {
        // console.log('nah fam thats the same mole')
        return randomMole(moles)
    }
    lastMole = mole;
    return mole;
}

function pop() {
    const time = randomTime(200, 800);
    const mole = randomMole(moles);
    // console.log(time, mole)
    mole.classList.add('pop')
    setTimeout(() => {
        mole.classList.remove('pop')
        if (!gameOver) {
            pop();
        }
    }, time);
}


function startGame() {
    $('.score').html('SCORE: ' + 0);
    gameOver = false;
    points = 0;
    pop();
    setTimeout(() => {
        gameOver = true
        if (gameOver == true) {
            startBtn.style.visibility = 'visible';
        }
    }, 15000)

}

function hit (e) {
    if(!e.isTrusted) return
    points++
    this.classList.remove('pop')
    console.log(points)
    $('.score').html('SCORE: ' + points);
}




moles.forEach(mole => mole.addEventListener('click', hit));


startBtn.addEventListener('click', e => {
    startBtn.style.visibility = 'hidden';
    startGame();
})








