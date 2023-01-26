const $ = document.querySelector.bind(document),
downBtn = $('.down-button'),
upBtn = $('.up-button'),
sidebar = $('.sidebar'),
sidebarCount = sidebar.children.length,
slider = $('.main-slide'),
sliderCount = slider.children.length;

let activeSidebarIndex = 0,
activeSlideIndex = sliderCount - 1;

slider.style.top = `-${activeSlideIndex}00vh`

upBtn.addEventListener('click', () => {
    changeSlide('up')
})

downBtn.addEventListener('click', () => {
    changeSlide('down')
})

function changeSlide(direction) {
    switch(direction) {
    case 'up':
    activeSidebarIndex=(++activeSidebarIndex)%sidebarCount;
    activeSlideIndex=(activeSlideIndex+sliderCount-1)%sliderCount;
    break;
    case 'down':
        activeSlideIndex=(++activeSlideIndex)%sliderCount;
        activeSidebarIndex=(activeSidebarIndex+sidebarCount-1)%sliderCount;
    break;
    }
    slider.style.top = `-${activeSlideIndex}00vh`
    sidebar.style.top = `-${activeSidebarIndex}00vh`
}