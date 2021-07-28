let number1 = document.getElementById("num1")
let number2 = document.getElementById("num2")
let resultHolder = document.getElementById("total-sum")

let firstNumber = number1.textContent = 8
let secondNumber = number2.textContent = 2


function addition() {

    let calculation = firstNumber + secondNumber
    resultHolder.textContent = "Answer is :" + calculation
}

function subtraction() {
    let calculation = firstNumber - secondNumber
    resultHolder.textContent = "Answer is :" + calculation

}

function division() {
    let calculation = firstNumber / secondNumber
    resultHolder.textContent = "Answer is :" + calculation

}

function multiplication() {
    let calculation = firstNumber * secondNumber
    resultHolder.textContent = "Answer is :" + calculation

}