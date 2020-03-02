const showMessage = () => {
  const textInput = document.querySelector('#textInput');
  const buttonInput = document.querySelector("#buyButton");
  buttonInput.className = "cart";
  buttonInput.textContent = textInput.value + ' Bouquets in Cart';

  // alert("Product added to cart");
};

// const msg = document.querySelector("#message");
// msg.textContent = "Hello, Sweetie";
// msg.style.color = "pink";

// const header = document.querySelector(".header");
// // header.style.backgroundColor = "hotpink";
// header.style.padding = "5rem";
// header.style.margin = "0";