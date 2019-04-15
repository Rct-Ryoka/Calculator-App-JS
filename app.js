//when a number is pressed the display-result will output the number pressed
let numButtons = document.querySelectorAll('.digits');
let operatorButtons = document.querySelectorAll('.operator');
let displayValue =  document.querySelector('.display-result');
let firstNumber = '0' ;
let operatorUsed = '';
let pendingVal = 0 ;
let finalValue = 0 ;
let lengthNumbers = 0;
// event keys for numbers
for (const digits of numButtons) {
    
    digits.addEventListener('click', function () {

    if(firstNumber==0)
        firstNumber = '';     

     firstNumber +=digits.innerText; 
     displayValue.innerText = firstNumber;


    });


}
// event keys for operators
for(const operators of operatorButtons) {
    operators.addEventListener('click' , function(){
      
        pendingVal = `${displayValue.innerText} ${operators.innerText}`; 
        firstNumber = 0;
        console.log(pendingVal);
     
        
    });
}
// event key for equal button
document.querySelector('.btn-equals').addEventListener('click' , function(elem){
       finalValue = eval(`${pendingVal} ${displayValue.innerText} `);
       console.log(finalValue);
       displayValue.innerText = finalValue;
       firstNumber = finalValue;

});
// event key for clear button
document.querySelector('.clear').addEventListener('click' , function(){
    pendingVal ='0';
    firstNumber = '0';
    displayValue.innerText = 0;

});

//event key for backspace button

document.querySelector('.backspace').addEventListener('click' , function(){

    //get the length of the string and remove the last character in the string
    lengthNumbers = displayValue.innerText.slice(0, displayValue.innerText.length-1);
    //display the new set of string
    if(lengthNumbers.length === 0){
        displayValue.innerText = 0;
        firstNumber = 0;
    }else{
        displayValue.innerText = lengthNumbers;
        firstNumber = lengthNumbers;
    }





    console.log(lengthNumbers.length);

});

