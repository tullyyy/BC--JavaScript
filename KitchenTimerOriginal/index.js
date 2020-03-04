document.addEventListener('DOMContentLoaded', () => {
  const btnStart = document.querySelector('#btnStart');

  btnStart.addEventListener('click', () => {
    const secondsElm = document.querySelector('#seconds');
    let sec = Number(secondsElm.value);
    secondsElm.value = sec - 1;

    const minutesElm = document.querySelector('#minutes');
    let min = Number(secondsElm.value);
    // minutesElm.value = sec / 60;

    if (seconds < 1) {

      document.getElementById("result").style.color = "red";
      document.getElementById("result").innerHTML = "Time's up!";
    }
  });
});





// let min = document.querySelector('#minutes');

// document.getElementById("#seconds").value = min;
// min--

// min = 60 * sec;





























// let min = 2;
// let sec = 60;
// let timerID;

// document.addEventListener("DOMContentLoaded", () => {
//   const btnStart = document.querySelector("#btnStart");
//   btnStart.addEventListener("click", () => {
//     if (timerID === undefined) {
//       timerID = setInterval(countdown, 1000);
//     }
//   });
// });

// const countdown = () => {
//   let sec = document.querySelector(".seconds");
//   seconds = sec;
//   sec--;
//   sec.value = sec.textContent;

//   if (seconds < 1) {
//     clearInterval(timerID);
//     timerID = undefined;
//   }
//   if (seconds < 1) {
//     document.getElementById("result").style.color = "red";
//     document.getElementById("result").innerHTML = "Time's up!";
//   }
// };