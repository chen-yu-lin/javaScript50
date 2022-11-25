const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
    const password = resultEl.innerText

    if (!password) {
        return
    }

    //写入文本至操作系统剪贴板
    navigator.clipboard.writeText(password)
    alert('Password copied to clipboard!')
})

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
})

function generatePassword(lower, upper, number, symbol, length) {
    let generatePassword = ''

    //勾选条件的个数
    let typesCount = lower + upper + number + symbol

    //Object.values 枚举对象属性值
    //过滤出checked为true的选项
    let typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0])

    console.log(typesCount, typesArr)

    if (typesCount === 0) {
        return ''
    }

    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(object => {
            //Object.key() 枚举对象属性
            const funcName = Object.keys(object)[0]
            generatePassword += randomFunc[funcName]()
        })
    }

    const finalPassworld = generatePassword.slice(0, length)
    return finalPassworld
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 97)
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 65)
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}