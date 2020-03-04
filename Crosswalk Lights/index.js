document.addEventListener("DOMContentLoaded", () => {
  const stopGoElm = document.querySelector(".stop");
  const walkGoElm = document.querySelector(".walk");
  const walk = document.querySelector("#walk");


  walk.addEventListener("click", () => {
    let countdown = (Math.ceil(Math.random() * 5 + 1));
    let waitTime = 3;
    const counter2 = document.querySelector('.counter1');
    counter2.textContent = countdown;

    const timerID = setInterval(() => {
      countdown--;
      // counter1.style.display = hidden;
      counter2.textContent = countdown;


      if (countdown === 0) {
        stopGoElm.className = "stop stay";
        walkGoElm.className = "walk stay";
        clearInterval(timerID);

        const counter1 = document.querySelector('.counter2');
        counter1.textContent = waitTime;


        const timer = setInterval(() => {
          waitTime--;
          counter1.textContent = waitTime;

          if (waitTime === 0) {
            stopGoElm.className = "stop go";
            walkGoElm.className = "walk go";
            clearInterval(timer);
          }
        }, 1000);
      }



      // if (stopGoElm.className = "stop stay") {
      //   const counter1 = document.querySelector('.counter');
      //   counter2.style.display = hidden;
      //   counter1.textContent = '3';
      // } else {
      //   const counter2 = document.querySelector('.counter');
      //   counter1.style.display = hidden;
      //   counter2.textContent = '3';
      // }

      // setTimeout(() => {
      //   stopGoElm.className = "stop go";
      //   walkGoElm.className = "walk go";
      // }, 5000);
    }, 1000);

  });
});


// It is a bit annoying that you press the button and something happens only after 3 seconds. Put a countdown next to the crosswalk light which will count down from 3 seconds when the pedestrian presses the button. Also, do a countdown when the green light is on from 5 seconds to 0.

// The waiting time for the green light should be somewhat random. Make it so that when a pedestrian presses the button, they will wait a random time between 2 and 6 seconds before the green light goes on.

// document.addEventListener("DOMContentLoaded", () => {
//   const btnCalc = document.querySelector("#calc__btn");
//   const text = document.querySelector(".calc__text");
//   const result = document.querySelector(".calc__result");
//   btnCalc.addEventListener("click", () => {
//     result.value = Number(result.value) + Number(text.value);
//     text.value = "";
//   });
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const btnStop = document.querySelector("#btnStop");
//   btnStop.addEventListener("click", () => {
//     if (timerID !== undefined) {
//       clearInterval(timerID);
//       timerID = undefined;
//     } else {
//       timerID = setInterval(() => console.log("hello"), 500);
//     }
//   });
// });