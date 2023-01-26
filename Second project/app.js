const item = document.querySelector('.item');
const placeholders = [...document.querySelectorAll('.placeholder')]

item.draggable = true;
item.addEventListener('dragstart',dragstart)
item.addEventListener('dragend',dragend)

placeholders.forEach(e => {
    e.addEventListener('dragover',dragover)
    e.addEventListener('dragenter',dragenter)
    e.addEventListener('dragleave',dragleave)
    e.addEventListener('drop',dragdrop)
})

function dragstart(event) {
    setTimeout(() => event.target.hidden = true, 0)
}

function dragend(event) {
    event.target.hidden = false;
}

function dragover(event) {
    event.preventDefault()
}

function dragenter(event) {
    event.target.classList.add('hovered')
}

function dragleave(event) {
    event.target.classList.remove('hovered')
}

function dragdrop(event) {
    event.target.classList.remove('hovered')
    event.target.append(item)
}