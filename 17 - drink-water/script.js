const liters = document.getElementById('liters')
const remained = document.querySelector('.remained')
const percentage = document.getElementById('percentage')
const cups = document.querySelectorAll('.cup-small')

updateBigCup()

cups.forEach((cup, index) => {
    cup.addEventListener('click', () => highlightCups(index))
})

function highlightCups(index) {
    if (index === 7 && cups[index].classList.contains('full')) {
        index--
    } else if (cups[index].classList.contains('full') && !cups[index].nextElementSibling.classList.contains('full')) {
        index--
    }

    cups.forEach((cup, index2) => {
        if (index2 <= index) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = cups.length
    const percent = fullCups / totalCups

    if (fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${percent * 330}px`
        percentage.innerText = `${percent * 100}%`
    }

    if (fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        liters.innerText = `${2 - (fullCups*250/1000)}L`
    }
}