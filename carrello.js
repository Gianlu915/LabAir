let img2 = document.getElementById("img2");
let img4 = document.getElementById("img4");
let size=document.getElementById("size");
let bagFav=document.getElementById("bagFav");
let shoe1=document.getElementById("shoe1");
let shoe2=document.getElementById("shoe2");
let cartShoe=document.getElementById("cartShoe");

img2.addEventListener("click", function() {
    removeImg1();

});

function removeImg1() {
    size.remove();
    bagFav.remove();
    shoe1.remove();
    cartShoe.remove();
  }

  img4.addEventListener("click", function() {

    removeImg2();

  });

  function removeImg2 (){
    size2.remove();
    bagFav2.remove();
    shoe2.remove();
    cartShoe2.remove();
}






// Select the elements needed
let cartShoe2 = document.getElementById("cartShoe2");
let subtotal = document.getElementById("tot");
let amount = document.getElementById("amount");
let subtotalPrice = 219.98; // Initial subtotal price

// Add event listeners to the remove buttons
img2.addEventListener("click", function() {
  removeItem(cartShoe, 119.99);
});

img4.addEventListener("click", function() {
  removeItem(cartShoe2, 99.99);
});

// Function to remove an item and update subtotal and total prices
function removeItem(item, price) {
  item.remove();
  // Update the subtotal price by subtracting the price of the removed item
  subtotalPrice -= price;
  // Update the content of the subtotal element
  subtotal.textContent = "" + subtotalPrice.toFixed(2) + " US";
  // Update the content of the total amount element
  amount.textContent = subtotalPrice.toFixed(2);
}
