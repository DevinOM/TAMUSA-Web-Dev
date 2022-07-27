function buttonNum(num) {
    document.getElementById("result").value += num
}

function clearResult() {
    document.getElementById("result").value = ""
}

function calculateResult() {
    let input = document.getElementById("result").value 
    let result = eval(input)

    document.getElementById("result").value = result
}

function inverseSign() {
    let num = document.getElementById("result").value
    let result = eval(num * -1)

    document.getElementById("result").value = result
}

function addOperator(operator) {
    document.getElementById("result").value += operator
}