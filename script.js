const result = document.querySelector('.result')

// buttons initializations
const add = document.querySelector('.add')
const sub = document.querySelector('.sub')
const mul = document.querySelector('.mul')
const div = document.querySelector('.div')
const clear = document.querySelector('.cle')
const res = document.querySelector('.res')
const operators = document.querySelectorAll('button')
for (const operator of operators){
    operator.addEventListener('click', () => {
        console.log(operator.innerHTML)
    })
}

// digit init
const digit = document.querySelector('.digit')
const numbers = digit.querySelectorAll('button')

// functions

// Creating number and displaying it into the result display
for(const number of numbers){
    number.addEventListener('click', ()=> {
        // console.log(number.id)
        result.textContent += number.id
    })
}
// end



// Clear button
clear.addEventListener('click', () =>{
    result.innerHTML = ''
})
// end

// Operator functions

// addition
// add.addEventListener('click', ()=>{
//     let temp = Number(result.innerHTML)
//     result.innerHTML = ''
//     res.addEventListener('click', () => {
//         result.innerHTML = (temp + Number(result.innerHTML))
//     })
// })
// end
// subtract
// sub.addEventListener('click', ()=>{
//     let temp = Number(result.innerHTML)
//     result.innerHTML = ''
//     res.addEventListener('click', () => {
//         result.innerHTML = (temp - Number(result.innerHTML))
//     })
// })
// end
// multiplication
// mul.addEventListener('click', ()=>{
//     let temp = Number(result.innerHTML)
//     result.innerHTML = ''
//     res.addEventListener('click', () => {
//         result.innerHTML = (temp * Number(result.innerHTML))
//     })
// })
// end
// divide
// div.addEventListener('click', ()=>{
//     let temp = Number(result.innerHTML)
//     result.innerHTML = ''
//     res.addEventListener('click', () => {
//         result.innerHTML = (temp / Number(result.innerHTML))
//     })
// })
// end



function operate(num1, num2, operator){
    if(operator == '+'){
        return num1 + num2
    }
    if(operator == '-'){
        return num1 - num2
    }
    if(operator == 'x'){
        return num1 * num2
    }
    if(operator == '/'){
        return num1 / num2
    }
}



// console.log(operate(10, 2, '/'))
