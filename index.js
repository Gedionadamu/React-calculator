const buttons = document.querySelectorAll('button')
const display = document.querySelector('.no_display')



let calculation =[]
let CollCal
function calculate(button){
    
    const value = button.textContent
    if(value == "Clear"){
        console.log(value)
        calculation=[]
        display.value ="0"
    } else if (value=="="){
        let ans = eval(CollCal)
        display.value = ans
        calculation=[]
        calculation.push(ans)
        
    } else{
        calculation.push(value)
        CollCal = calculation.join('')
        display.value= CollCal
    }
    
   
}

buttons.forEach(button=> button.addEventListener('click', ()=> calculate(button)))