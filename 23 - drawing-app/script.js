const canvas = document.getElementById('canvas')
const decrease = document.getElementById('decrease')
const increase = document.getElementById('increase')
const size = document.getElementById('size')
const color = document.getElementById('color')
const clear = document.getElementById('clear')

const ctx = canvas.getContext('2d')

ctx.lineCap = 'round'
ctx.lineJoin = 'round'
ctx.lineWidth = size.innerText
ctx.strokeStyle = color.value
ctx.fillStyle = color.value

let x = 0,
    y = 0,
    lastX = 0,
    lastY = 0,
    isDrawing = false

decrease.addEventListener('click', () => {
    if (size.innerText > 5) {
        size.innerText -= 5
    } else {
        size.innerHTML = 5
    }

    ctx.lineWidth = size.innerText
})

increase.addEventListener('click', () => {
    if (size.innerText < 50) {
        size.innerText = parseInt(size.innerText) + 5
    } else {
        size.innerText = 50
    }

    ctx.lineWidth = size.innerText
})

color.addEventListener('change', () => {
    ctx.strokeStyle = color.value
    ctx.fillStyle = color.value
})

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true
    lastX = e.offsetX
    lastY = e.offsetY
})

canvas.addEventListener('mousemove', (e) => {
    if (!isDrawing) return

    x = e.offsetX
    y = e.offsetY

    ctx.beginPath()
    ctx.moveTo(lastX, lastY)
    ctx.lineTo(x, y)
    ctx.stroke()

    lastX = x
    lastY = y
})

canvas.addEventListener('mouseup', () => isDrawing = false)

canvas.addEventListener('mouseout', () => isDrawing = false)

clear.addEventListener('click', () => {
    const w = canvas.width
    const h = canvas.height
    ctx.clearRect(0, 0, w, h)
})