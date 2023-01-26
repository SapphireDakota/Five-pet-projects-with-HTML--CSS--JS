const $ = document.querySelector.bind(document),
board = $('#board'),
colors = ['Crimson','DeepPink','DarkCyan','MediumSpringGreen','MediumVioletRed','Teal','DarkTurquoise'],
SQUARES_NUMBER = 500;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        setColor(square, getRandomColor(colors), true)
    })
    
    square.addEventListener('mouseleave', () => {
        setColor(square)
    })

    board.append(square)
}

function setColor(element, color = '#1d1d1d', boxShadow = false) {
    element.style.backgroundColor = color;
    boxShadow?
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    :element.style.boxShadow = '0 0 2px #000';
}

function getRandomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)]
}