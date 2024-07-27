const nameInput = document.getElementById("name");
let surname = document.getElementById("surname");
let address = document.getElementById("address");
let postcode = document.getElementById("Postcode");
let city = document.getElementById("city");
let country = document.getElementById("country");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let module = document.getElementById("form");
let error

module.addEventListener("submit",function(e){

    e.preventDefault();
    let valoreFunction =campoObbligatorio(nameInput.value);
    // console.log(valoreFunction);


    

    if(campoObbligatorio(nameInput.value))
    {
        if(checkName(nameInput.value)){
            nameInput.classList.remove("input-error");
            nameInput.classList.remove("warn");
        }
       
       
    }
    else{
        nameInput.classList.add("input-error");
        nameInput.classList.add("warn");
        nameInput.placeholder = "Name";
        
    }

    if(campoObbligatorio(surname.value)){
        surname.classList.remove("input-error");
        surname.classList.remove("warn");
       
    }
    else{
        surname.classList.add("input-error");
        surname.classList.add("warn");
        surname.placeholder = "Surname";
        
    }

    if(campoObbligatorio(address.value)){
        if(checkAddress(address.value)){
        address.classList.remove("input-error");
        address.classList.remove("warn");
        }
       
    }
    else{
        address.classList.add("input-error");
        address.classList.add("warn");
        address.placeholder = "Address";
        
    }

    if(campoObbligatorio(postcode.value)){
        if(checkAddress(postcode.value)){
        postcode.classList.remove("input-error");
        postcode.classList.remove("warn");
       
    }
}
    else{
        postcode.classList.add("input-error");
        postcode.classList.add("warn");
        postcode.placeholder = "Postcode";
        
    }

    if(campoObbligatorio(city.value)){
        if(checkCity(city.value)){
        city.classList.remove("input-error");
        city.classList.remove("warn");
        }
       
    }
    else{
        city.classList.add("input-error");
        city.classList.add("warn");
        city.placeholder = "City";
        
    }


    if(campoObbligatorio(email.value)){
        if(checkEmail(email.value)){
        email.classList.remove("input-error");
        email.classList.remove("warn");
        }
       
    }
    else{
        email.classList.add("input-error");
       email.classList.add("warn");
        email.placeholder = "Email";
        
    }

    if(campoObbligatorio(phone.value)){
        if(checkPhone(phone.value)){
        phone.classList.remove("input-error");
        phone.classList.remove("warn");
        }
       
    }
    else{
        phone.classList.add("input-error");
        phone.classList.add("warn");
        phone.placeholder = "Phone";
        
    }

    
    let errors = document.querySelectorAll('.warn');

  if (errors.length == 0) {
    window.location.href = "controllopagamento.html"; 
  }


    
    


});

function campoObbligatorio(x)
{
    if(x.trim().length == 0){
        return false;

    }
    else{
        return true;
    }
}

function checkName(x)
{
    const reName = /^[a-zA-Z]+$/;
    return reName.test(x);
}

function checkAddress(x)
{
    const reAddress = /^(?=.*[0-9])[A-Za-z0-9\s]+$/;
    return reAddress.test(x);
}

function checkCity(x)
{
    const reCity = /^[A-Za-z\s]+$/;
    return reCity.test(x);
}

function checkPostcode(x)
{
    const rePostcode = /^\d{1,6}$/;
    return rePostcode.test(x);
}

function checkEmail(x)
{
    const reEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return reEmail.test(x);
}

function checkPhone(x)
{
   const rePhone = /^([+]39)?((38[{8,9}|0])|(34[{7-9}|0])|(36[6|8|0])|(33[{3-9}|0])|(32[{8,9}]))([\d]{7})$/;

   return rePhone.test(x);
}