document.addEventListener("DOMContentLoaded", () => {
  const btnCalc = document.querySelector("#calc__btn");
  const text = document.querySelector(".calc__text");
  const result = document.querySelector(".calc__result");
  btnCalc.addEventListener("click", () => {
    result.value = Number(result.value) + Number(text.value);
    text.value = "";
  });
});

// const validation = () => {
//   const user = document.querySelector("#username");
//   const pass = document.querySelector("#password");
//   if (user.value == "Iubi" && pass.value == "020919") {
//     document.write("Good baby!");
//   } else {
//     document.write("Nice try, you're not Iubi!");
//   }
// };

// const showMessage = () => {
//   const textInput = document.querySelector('#textInput');
//   const buttonInput = document.querySelector("#buyButton");
//   buttonInput.className = "cart";
//   buttonInput.textContent = textInput.value + ' Bouquets in Cart';

//   // alert("Product added to cart");
// };

// const msg = document.querySelector("#message");
// msg.textContent = "Hello, Sweetie";
// msg.style.color = "pink";

// const header = document.querySelector(".header");
// // header.style.backgroundColor = "hotpink";
// header.style.padding = "5rem";
// header.style.margin = "0";
