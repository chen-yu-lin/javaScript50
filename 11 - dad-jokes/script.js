const jokes = document.getElementById('joke')
const button = document.querySelector('.btn')

button.addEventListener('click', getJoke)

//方法一
// function getJoke() {
//     fetch('https://icanhazdadjoke.com', {
//         headers: {
//             Accept: 'application/json',
//         },
//     })
//         .then(res => res.json())
//         .then(res => {
//             jokes.innerHTML = res.joke
//         })
// }

方法二
async function getJoke() {
    const res = await fetch('https://icanhazdadjoke.com', {
        headers: {
            Accept: 'application/json',
        },
    })

    const data = await res.json()
    jokes.innerHTML = data.joke
}

