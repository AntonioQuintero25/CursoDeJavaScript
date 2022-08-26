const previousOperationsText = document.querySelector('#previous-operations');
const currentOperationsText = document.querySelector('#current-operations');

const buttons = document.querySelectorAll('#buttons-containers button')

class Calculator
{
    constructor(previousOperationsText,currentOperationsText)
    {
        this.previousOperationsText = previousOperationsText;
        this.currentOperationsText = currentOperationsText;
        this.currentOperations= "";
    }

    addDigit(digit)
    {

        if(digit === "." && this.currentOperationsText.innerText.includes("."))
        {
            return;
        }

       this.currentOperations = digit;
       this.updateScreen()
    }

    processOperation(operation){

        if (this.currentOperationsText.innerText === "" && operation !== "C") {
            if(this.previousOperationsText !== null)
            {
                this.changeOperation(operation);
            }
            return;
        }

        let operationValue;
        let previous = +this.previousOperationsText.innerText.split(" ")[0];
        let current = +this.currentOperationsText.innerText;

        switch(operation){
            case "+":
                operationValue = previous + current;
                this.updateScreen(operationValue,operation,current,previous);
                break;
            case "-":
                operationValue = previous - current;
                this.updateScreen(operationValue,operation,current,previous);
                break;
            case "*":
                operationValue = previous * current;
                this.updateScreen(operationValue,operation,current,previous);
                break;
            case "/":
                operationValue = previous / current;
                this.updateScreen(operationValue,operation,current,previous);
                break;
            case "DEL":
                this.processDelOperation();
                break;
            case "CE":
                this.processCeOperation();
                break;
            case "C":
                this.processClearAllOperation();
                break;
            case "=":
                this.processEqualOperation();
                break;
            default:
                return;
        }
    }

    updateScreen(
        operationValue = null,
        operation = null,
        current = null,
        previous = null
        )
    {
        console.log(operationValue, operation, current,previous);

        if(operationValue === null)
        {
            this.currentOperationsText.innerText += this.currentOperations;
        }else{
            if (previous === 0) {
                operationValue = current;
            }

            this.previousOperationsText.innerText = `${operationValue} ${operation}`
            this.currentOperationsText.innerText = "";

        }
        
    }

    changeOperation(operation){

        const mathOperation = ["+","-","*","/"];

        if(!mathOperation.includes(operation))
        {
            return;
        }

        this.previousOperationsText.innerText = this.previousOperationsText.innerText.slice(0, -1) + operation;
    }

    processDelOperation()
    {
        this.currentOperationsText.innerText = this.currentOperationsText.innerText.slice(0, -1)
    }

    processCeOperation()
    {
        this.currentOperationsText.innerText = "";
    }

    processClearAllOperation()
    {
        this.currentOperationsText.innerText = "";
        this.previousOperationsText.innerText = "";
    }

    processEqualOperation(){
        const operation = this.previousOperationsText.innerText.split(" ")[1];
        this.processOperation(operation);
    }
}

const calc = new Calculator(previousOperationsText,currentOperationsText);

buttons.forEach(botao => {
    botao.addEventListener('click',(e)=>{
        let value = e.target.innerText
        
        if (+value >= 0 ||  value === ".") {
            calc.addDigit(value);
        }
        else{
            calc.processOperation(value);
        }
    });
});