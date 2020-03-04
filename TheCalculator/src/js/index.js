document.addEventListener("DOMContentLoaded", () => {
  const btnClear = document.querySelector("#btn-clear");
  const btnPlus = document.querySelector("#btn-plus");
  const btnEquals = document.querySelector("#btn-equals");
  const calcResult = document.querySelector(".calc__result");
  const calcControls = document.querySelector(".calc__controls");
  const calcInput = document.querySelector(".calc__input");

  let lastOperation;

  btnEquals.addEventListener("click", () => {
    calcInput.value = "";
    calcResult.value = Number(calcResult.value) + Number(calcInput.value);
  });

  btnPlus.addEventListener("click", () => {
    calcInput.value = "0";
    calcResult.value = Number(calcInput.value) + lastOperation;
  });

  btnClear.addEventListener("click", () => {
    calcInput.value = "";
    calcResult.value = "";
  });
});

// calcInput.value = "";
// Reset input to zero

// main div =                    .calc
// result input=                 .calc__result
// clear/divide/equals=          .calc__controls
// clear = #btn-clear            .calc__btn
// divide = #btn-divide          .calc__btn
// equals = #btn-equals          .calc__btn
