let princ=document.getElementById("princ");
let car=document.getElementById("car");
let taglie = document.querySelectorAll(".us");
const bag = document.getElementById("bag");
let close=document.getElementById("close");
const bagButton = document.getElementById("bag");
const sizes = document.querySelectorAll(".us");
const size = document.getElementById("size");
const container = document.getElementById("us1");
let selectedSize = null;
let viewCart=document.getElementById("viewCart");
let checkout = document.getElementById("checkout");

bagButton.addEventListener("click", function() {
  if (!selectedSize) {
    size.style.color = "red";
    container.style.border = "1px solid red";
  } else {
    size.style.color = "";
    container.style.border = "";
    car.style.display = "block";
    car.style.zIndex= "1";
    princ.style.opacity = "0.5";
    princ.style.pointerEvents = "none";
  }
});


sizes.forEach(option => {
  option.addEventListener("click", function() {
    selectedSize = option;
    
    sizeOptions.forEach(option => {
      option.classList.remove("selected");
    });

    option.classList.add("selected");
    size.style.color = "";
    container.style.border = "";
  });
});
  

    
    
const sizeOptions = document.querySelectorAll(".us");
sizeOptions.forEach(option => {
  option.addEventListener("click", function() {
    size.style.color = "";
    container.style.border = "";
  });
});

for (var i = 0; i < taglie.length; i++) {
  taglie[i].addEventListener("click", function() {
    
    for (var j = 0; j < taglie.length; j++) {
      taglie[j].style.border = "";
    }

    
    this.style.border = "1px solid black";
  });
}





window.onload = function() {
    var images = document.getElementsByClassName("scarpe");
  
    for (var i = 0; i < images.length; i++) {
      images[i].addEventListener("click", function() {
        var selectedImage = this;
        var mainImage = document.getElementById("mainImage");
        mainImage.src = selectedImage.src;
      });
    }
  };

close.addEventListener("click",function() {

closePopup();
car.style.display = "none";
princ.style.opacity = "1";
princ.style.pointerEvents = "auto";


  });

  function closePopup() {
    car.style.display = "none";
  }


  viewCart.addEventListener("click", function() {

    goToCartPage();

  });

  checkout.addEventListener("click", function() {

    goTocheckout();

  });



  function goToCartPage() {
    window.location.href = "carrello.html";
  }

  function goTocheckout () {
    window.location.href = "pagamento.html";
  }



  

  












        