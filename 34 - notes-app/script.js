const addBtn = document.getElementById('add')

//从本地存储中获取notes
const notes = JSON.parse(localStorage.getItem('notes'))

if (notes) {
    notes.forEach(note => {
        addNewNote(note)
    })
}

addBtn.addEventListener('click', () => {
    addNewNote()
})

function addNewNote(text = '') {
    const note = document.createElement('div')
    note.classList.add('note')
    note.innerHTML = `
        <div class="tools">
            <button class="edit">
                <i class="fas fa-edit"></i>
            </button>
            <button class="delete">
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>
        <div class="main ${text ? '' : 'hidden'}"></div>
        <textarea class="${text ? 'hidden' : ''}"></textarea>
    `

    const editBtn = note.querySelector('.edit')
    const deleteBtn = note.querySelector('.delete')
    const main = note.querySelector('.main')
    const textArea = note.querySelector('textarea')

    textArea.value = text
    main.innerHTML = text

    deleteBtn.addEventListener('click', () => {
        note.remove()
        updateLs()
    })

    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden')
    })

    textArea.addEventListener('input', (e) => {
        const { value } = e.target
        main.innerHTML = value
        updateLs()
    })

    document.body.appendChild(note)
}

function updateLs() {
    const textareas = document.querySelectorAll('textarea')
    const notes = []

    textareas.forEach(note => notes.push(note.value))

    //向本地存储添加数据，必须是json字符串
    localStorage.setItem('notes', JSON.stringify(notes))
}