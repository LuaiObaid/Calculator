class Calculator {
    constructor(prevBtn, currenntBtn) {
        this.prevBtn = prevBtn;
        this.currenntBtn = currenntBtn;
    }

    compute() {
        var reslut
        const current = parseFloat(this.currenntBtn)
        const prev = parseFloat(this.prevBtn)
        switch (this.operation) {
            case '+':
                reslut = current + prev;
                break;
            case '-':
                reslut = current - prev;
                break;
            case '*':
                reslut = current * prev;
                break;
            case '/':
                reslut = current / prev;
                break;
            default:
                break;
                
        }
        this.currenntBtn = reslut;
        this.operation = undefined;
        this.prevBtn = '';


    }

}

const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')
const equalsButton = document.querySelector('[data-equals]')
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

var nums = document.querySelectorAll('.number');
var opera = document.querySelectorAll('.operation')

equalsButton.addEventListener('click', button => {
    calculator.compute()
  })