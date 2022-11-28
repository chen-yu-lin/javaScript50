const content = document.querySelectorAll('.content')
const btns = document.querySelectorAll('nav ul li')

btns.forEach((item,index) => {
    item.addEventListener('click',() => {
        content.forEach(img => img.classList.remove('show'))
        btns.forEach(btn => btn.classList.remove('active'))

        item.classList.add('active')
        content[index].classList.add('show')
    })
})

