
const modulo = document.getElementById("form");
let num = document.getElementById("num");
let mm = document.getElementById("mm");
let cvv = document.getElementById("cvv");

let popup = document.querySelector('.popup');
let box=document.getElementById("box");



modulo.addEventListener("submit",function(e){

    e.preventDefault();

    let vFunction =campoObbligatorio(num.value);
    // console.log(vFunction);

    let cardNumber = num.value.trim();
    let cardNumberValid = checkCard(cardNumber);

    
    if(campoObbligatorio(num.value)){

    if(checkCard(num.value)){
        num.classList.remove("input-error");
        num.classList.remove("warn");
    }
    else{
        num.classList.add("input-error");
        num.classList.add("warn");
        num.placeholder = "Invalid Card Number";
        
    }
}
    
    else{
            num.classList.add("input-error");
            num.classList.add("warn");
            
        }

        if (mm.value.trim().length == 0) {
        mm.classList.add("input-error");
        mm.placeholder = "Insert expiration date (MM/AA)";
        mm.classList.add("warn");
        } else if (!checkEx(mm.value.trim())) {
        mm.classList.add("input-error");
        mm.placeholder = "Invalid date format (MM/AA)";
        mm.classList.add("warn");
        } else {
        mm.classList.remove("input-error");
        mm.classList.remove("warn");
        }
    


        if (cvv.value.trim().length == 0) {
            cvv.classList.add("input-error");
            cvv.placeholder = "Insert CVV";
            cvv.classList.add("warn");
          } else if (!checkCVV(cvv.value.trim())) {
            cvv.classList.add("input-error");
            cvv.placeholder = "Invalid CVV";
            cvv.classList.add("warn");
          } else {
            cvv.classList.remove("input-error");
            cvv.classList.remove("warn");
          }
    

        //   popup.classList.add("poppedup");
          

    
          let errors = document.querySelectorAll('.input-error');

        

        if(errors.length==0){
            box.classList.add("hide");
            popup.classList.add("poppedup");
        }

    
    
      

    
    



    });//submit 


function campoObbligatorio(contenuto){

    if(contenuto.trim().length == 0){
        return false;

    }
    else{
        return true;
    }
}





function checkCard(card)
{
    const reNumber = /^[0-9]{16}$/;
    // console.log(reNumber.test(card));
    return reNumber.test(card);
};

function checkEx(x)
{
    const reDate = /^(0[1-9]|1[0-2])\/(\d{2})$/;
    return reDate.test(x);
}

function checkCVV(x) {
    const reCVV = /^\d{3,4}$/;
    return reCVV.test(x);
  }

  