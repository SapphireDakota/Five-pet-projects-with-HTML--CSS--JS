const $ = document.querySelector.bind(document),
$$ = document.querySelectorAll.bind(document),
startBtn = $('.start'),
screens = $$('.screen'),
timeList = $('.time-list'),
timeEl = $('#time'),
colors = ['Crimson','DeepPink','DarkCyan','MediumSpringGreen','MediumVioletRed','Teal','DarkTurquoise'],
board = $('#board');
let time = 0, score = 0;

startBtn.addEventListener('click', e => {
    e.preventDefault();
    screens[0].classList.add('up')
})

timeList.addEventListener('click', e => {
    if(e.target.classList.contains('time-btn')) {
        time = parseInt(e.target.dataset.time)
    screens[1].classList.add('up')
        startGame()
    }
})

board.addEventListener('click', e => {
    if (e.target.classList.contains('circle')) {
        score++
        e.target.remove()
        createRandomCircle()
    }
})

function startGame() {
    setInterval(decreaseTime,1000)
    createRandomCircle()
    timeEl.innerHTML = `00:${time}`
}

function decreaseTime() {
    if(time === 0) {
        finishGame()
    } else {
        let current = --time;
        timeEl.innerHTML = '00:' + `${current}`.padStart(2,'0')
    }
}

function finishGame() {
    timeEl.parentNode.remove()
    board.innerHTML = `<h1>Счёт: <span class='primary'>${score}</span></h1>`
    clearInterval(decreaseTime,1000)
}

function createRandomCircle() {
    const circle = document.createElement('div'),
    size = getRandomNumber(10,60),
    {width,height} = board.getBoundingClientRect(),
    x = getRandomNumber(0,width - size),
    y = getRandomNumber(0,height - size);

    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    setColor(circle, getRandomColor(colors))
    console.log(circle.style)

    board.append(circle)
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function setColor(element, color) {
    element.style.background = color
}

function getRandomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)]
}