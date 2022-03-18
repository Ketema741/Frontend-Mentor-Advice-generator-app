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
let colors = ['#254D4C', '#121C2B', '#005B60', '#5E5E5E', '#4E4E4E', '#4B4A54', '#412728', '#254D4C']
let clr = colors[Math.floor(Math.random() * colors.length)]
let ad = 'advice  #  '
buttun.addEventListener("click", () => {
    let clr = colors[Math.floor(Math.random() * colors.length)]

    myFunction()

    heading.innerText = ad + adviceId
    para.textContent = adviceContent
        // advicebgrnd.style.backgroundPosition = "100%"
    advicebgrnd.style.backgroundColor = clr
        // advicebgrnd.style.backdropFilter = 'blur(50px)'
        //backdrop-filter: blur(5px);
        // advicebgrnd.style.backgroundSize = "300%"




})