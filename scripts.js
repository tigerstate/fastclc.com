let display = "";
let inputDisplay = document.getElementById('display');

let btn = document.querySelectorAll('button');
let ara = Array.from(btn)
ara.forEach(button =>{

  button.addEventListener('click',(e)=>{

        if(e.target.innerHTML=="="){
            display =  eval(display);
            inputDisplay.value = display;
        }
        else if(e.target.innerHTML=="AC"){
            display =" "
            inputDisplay.value = display;
        }
        else if(e.target.innerHTML=="DEL"){
                  display = display.substring(0,display.length-1);
                  inputDisplay.value = display;
        }
        else{
            display += e.target.innerHTML;
            inputDisplay.value = display;
           }

  })

})