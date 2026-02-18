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
    
     if (value >= '0' && value <= '9') {
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
    } else if ( value === '.') {
        if (op === '') {
            if (num1.includes('.')) return;
            num1 += value;
            display.textContent = num1;
        }
    } else if (value === 'BackSpace') {
        if (op === '') {
            num1 = num1.slice(0, -1);
            display.textContent = num1 || '0';
        }
        else {
            num2 = num2.slice(0, -1);
            display.textContent = num2 || '0';
        }
    }
    button.addEventListener('keyup', (event) => {
        
        if (event.key === 'Enter') {
            operate();
        }
            else if (event.key === 'Backspace') {
                if (op === '') {
                    num1 = num1.slice(0, -1);
                    display.textContent = num1 || '0';                
                }
                else { 
                    num2 = num2.slice(0, -1);
                    display.textContent = num2 || '0';
                }
            }
            else if (event.key >= '0' && event.key <= '9') {
                if (op === '') {
                    num1 += event.key;
                    display.textContent = num1;
                } else {
                    num2 += event.key;
                    display.textContent = num2;
                }
            } else if (['+','-','*','/'].includes(event.key)) {
                if (num1 === '') return;
                op = event.key;
                display.textContent = op;
            } else if (event.key === '.') {
                if (op === '') {
                    num1 += event.key;
                    display.textContent = num1;
                }
                else {
                    num2 += event.key;
                    display.textContent = num2;
                }
            }
            event.preventDefault();
        event.stopPropagation();
    })
    
    })
});
// figure out how to get the calculations to work on with the equals button.
// Maybe delete the whole logic of event.this or try to refactor it?
// Or maybe create a different class of buttons for equals and clear button to pass on different logic?