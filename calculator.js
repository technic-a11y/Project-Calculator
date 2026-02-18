const container = document.querySelector('#container');
const display = document.querySelector ('#display');
display.textContent = '0';



let num1 = '';
let num2 = '';
let op = '';

function operate() {
    if (num1 === '' || num2 === '') return;
    let result;
   let a = parseFloat(num1);
   let b = parseFloat(num2);
  switch(op) {
    case '+':
        result= a + b;
        break;
    case '-' :
        result = a - b;
        break;
    case '*' :
        result = a * b;
        break;
    case '/':
        result = b === 0 ? 'Error' : a / b;
        break;
    default:
        return;
  }
   num1 = result.toString();
   op ='';
   num2 = '';

   display.textContent = num1;
}




const button = document.querySelectorAll('button');
button.forEach (button => {
    button.addEventListener ('click', () => {
     const value = button.textContent;
    
     if (!isNaN(value)) {
        if (op === '') {
            num1 += value;
            display.textContent = num1;
        }
        else {
            num2 += value;
            display.textContent = num2;
        }
    }
    else if (['+','-','*','/'].includes(value)) {
        if (num1 === '') return;
        
        op += value;
        display.textContent = op;
    }
    else if (value === '=') {
        operate();
    }
    else if (value === 'C') {
        num1 = '';
        num2 = '';
        op = '';
        display.textContent = '0';
    }

    })
});
// figure out how to get the calculations to work on with the equals button.
// Maybe delete the whole logic of event.this or try to refactor it?
// Or maybe create a different class of buttons for equals and clear button to pass on different logic?