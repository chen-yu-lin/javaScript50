const textarea = document.getElementById('textarea')
const div = document.getElementById('tags')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)

        randomSelect()
    }
})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())

    div.innerHTML = ''
    tags.forEach(tag => {
        const span = document.createElement('span')
        span.innerText = tag
        span.classList.add('tag')
        div.appendChild(span)
    });
}

function randomSelect() {
    const times = 3

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        if (randomTag !== undefined) {
            highlightTag(randomTag)

            setTimeout(() => {
                unHighlightTag(randomTag)
            }, 100)
        }
    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100)
    }, times * 1000)
}

function pickRandomTag() {
    const tag = document.querySelectorAll('.tag')
    return tag[Math.floor(Math.random() * tag.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}