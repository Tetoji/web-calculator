const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

class Calculator
{
    constructor(previousOperandTextElement, currentOperandTextElement)
    {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear()
    {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete()
    {
        
    }

    appendNumber(number)
    {
        if (number === '.' && this.currentOperand.includes('.')) 
            return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation()
    {
        
    }

    compute()
    {

    }

    updateDisplay()
    {
        this.currentOperandTextElement.innerText =  this.currentOperand
    }
}

const calculator =  new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button =>
    {
        button.addEventListener('click', () =>
        {
            calculator.appendNumber(button.innerText)
            console.log(button)
            calculator.updateDisplay()
        })
    })

operationButtons.forEach(button =>
    {
        button.addEventListener('click', () =>
        {
            calculator.chooseOperation(button.innerText)
            calculator.updateDisplay()
        })
    })
    

function addValue(v)
{
    var a = document.getElementById('number').value = v; 
    a = a + a;
    
    console.log(a);
}

function deleteAll(v)
{
    var myobj = document.getElementById('deleteAll').value = v;
    myobj.remove();
}