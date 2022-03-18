let para = document.getElementById("advice__content")
let buttun = document.getElementById("btn")
let advicebgrnd = document.getElementById("advice")
let heading = document.getElementById("advice__id")

let adviceContent
let adviceId

let request = new XMLHttpRequest()

function myFunction() {

    request.open('GET', 'https://api.adviceslip.com/advice', true)
    request.onload = function() {
        let data = JSON.parse(request.responseText)
        console.log(data.slip.advice)
        adviceContent = data.slip.advice
        adviceId = data.slip.id
    }
    request.send()
}

let qoute = '"'
let colors = ['#254D4C', '#121C2B', '#005B60', '#5E5E5E', '#4E4E4E', '#4B4A54', '#412728', '#254D4C']
let selectedColor = colors[Math.floor(Math.random() * colors.length)]
let ad = 'advice  #  '
buttun.addEventListener("click", () => {
    let selectedColor = colors[Math.floor(Math.random() * colors.length)]

    myFunction()
    heading.innerText = ad + adviceId
    para.textContent = qoute + adviceContent + qoute
    advicebgrnd.style.backgroundColor = selectedColor

})