const loveMe = document.querySelector('.loveMe')
const times = document.getElementById('times')

// let number = 0
// loveMe.addEventListener('dblclick',addLove)

// function addLove(e) {
//     const i = document.createElement('i')
//     i.classList.add('fas','fa-heart')
//     i.style.top = `${e.offsetY}px`
//     i.style.left = `${e.offsetX}px`
//     loveMe.appendChild(i)

//     number++
//     times.textContent = number

//     setTimeout(() => {
//         i.remove()
//     },1000)
// }

let clickTime = 0
let timesClicked = 0

loveMe.addEventListener('click', (e) => {
    if (clickTime === 0) {
        clickTime = new Date().getTime()
    } else {
        if (new Date().getTime() - clickTime < 800) {
            createHeart(e)
            clickTime = 0
        } else {
            clickTime = new Date().getTime()
        }
    }
})

function createHeart(e) {
    const i = document.createElement('i')
    i.classList.add('fas', 'fa-heart')

    const x = e.clientX
    const y = e.clientY

    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop

    const insideX = x - leftOffset
    const insideY = y - topOffset

    i.style.left = `${insideX}px`
    i.style.top = `${insideY}px`

    loveMe.appendChild(i)
    times.textContent = ++timesClicked

    setTimeout(() => {
        i.remove()
    }, 1000)
}