// get the random number

let randomNum = Math.floor((Math.random() * 100) + 1)

// make random number appear over the screen

const submit = document.querySelector("#submit")
const result = document.querySelector("#result")
result.setAttribute('style', 'padding-left: 5px; color: black')

submit.addEventListener("click", ()=>{
        result.textContent = `Chances: ${randomNum}%`;
})



