const label = document.querySelectorAll('label')

label.forEach(item => {
    item.innerHTML = item.innerText.split('').map((text,index) => `<span style="transition-delay:${index*50}ms">${text}</span>`).join('')
})