const imgs = document.getElementById('imgs')
const prev = document.getElementById('left')
const next = document.getElementById('right')
const img = document.querySelectorAll('img')

let index = 0
let interval = setInterval(run, 2000)

function run() {
    index++
    changeImage()
}

function changeImage() {
    if (index > img.length - 1) {
        index = 0
    } else if (index < 0) {
        index = img.length - 1
    }

    imgs.style.transform = `translateX(${-index * 500}px)`
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run,2000)
}

prev.addEventListener('click',() => {
    index--
    changeImage()
    resetInterval()
})

next.addEventListener('click',() => {
    run()
    resetInterval()
})
