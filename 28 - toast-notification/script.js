const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
]

const types = ['info', 'success', 'error']

button.addEventListener('click', () => createNotification())

function createNotification(message = null, type = null) {
    let toast = document.createElement('div')
    toast.classList.add('toast')
    toast.classList.add(type ? type : getRandomType())
    toast.innerHTML = message ? message : getRandomMessage()

    toasts.appendChild(toast)

    setTimeout(() => {
        toast.remove()
    }, 3000)
}

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)]
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}