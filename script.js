const display = document.querySelector('.result')

// buttons initializations
const add = document.querySelector('.add')
const sub = document.querySelector('.sub')
const mul = document.querySelector('.mul')
const div = document.querySelector('.div')
const clear = document.querySelector('.cle')
const res = document.querySelector('.res')
const del = document.querySelector('.del')
const dot = document.querySelector('.dot')
const operators = document.querySelector('.operators')
const operations = operators.querySelectorAll('button')

// digit init
const digit = document.querySelector('.digit')
const numbers = digit.querySelectorAll('button')

// variables
let previousInput = 0;
let currentInput = 0;
let currentOperation;

// functions

// Creating number and displaying it into the result display
for(const number of numbers){
    number.addEventListener('click', ()=> {
        // console.log(number.id)
        display.textContent += number.id
        currentInput = Number(display.textContent)
    })
}

// button functions

add.addEventListener('click', () => {
    previousInput = currentInput;
    currentOperation = '+'
    display.textContent = ''
    console.log(previousInput, currentOperation)
})

sub.addEventListener('click', () => {
    previousInput = currentInput;
    currentOperation = '-'
    display.textContent = ''
    console.log(previousInput, currentOperation)
})

mul.addEventListener('click', () => {
    previousInput = currentInput;
    currentOperation = 'x'
    display.textContent = ''
    console.log(previousInput, currentOperation)
})

div.addEventListener('click', () => {
    previousInput = currentInput;
    currentOperation = '/'
    display.textContent = ''
    console.log(previousInput, currentOperation)
})

clear.addEventListener('click', () =>{
    display.innerHTML = ''
    previousInput = 0;
    currentInput = 0;
    currentOperation = ''
})

del.addEventListener('click', ()=>{
    function splitNumber(num){
        return String(num).split('').map(Number)
    }
    let number = Number(display.innerHTML);
    let digits = splitNumber(number)
    console.log(digits)
    digits.pop()
    console.log(digits)
    number = Number(digits.join(''))
    display.innerHTML = number;
    currentInput = number;
})

dot.addEventListener('click', () => {
    function splitNumber(num){
        return String(num).split('').map(Number)
    }
    let number = Number(display.innerHTML);
    let digits = splitNumber(number);
    if(digits.includes('.')){
        alert('You have declared a Decimal')
    } else {
        digits.push('.')
        number = digits.join('')
        console.log(number)
        display.innerHTML = number;
        currentInput = number;
    }
})
// end

// operation

let result;

function operate(operator, num1, num2){
    switch (operator){
        case '+':
            result = Math.round((num1 + num2)*100)/100
            break;
        case '-':
            result = Math.round((num1 - num2)*100)/100
            break;
        case 'x':
            result = num1 * num2
            break;
        case '/':
            if(num2 == 0){
                display.innerHTML = 'Cannot divide by 0'
            } else {
                result = Math.round((num1 / num2)*100)/100
            }
            break;
        default: 
            display.innerHTML = 'Error: Invalid Operator'
    }
    display.innerHTML = result
    currentInput = result 
}

res.addEventListener('click', function(){
    operate(currentOperation, previousInput, currentInput)
})

// end