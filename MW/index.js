// You might find useful the querySelectorAll method that selects all the element that much the query and returns them in an array. You can use this technique e.g. to select all the stars and go through all of them using a loop.


// const rate () =>

//   stars[i].classList.toggle("rating__star--on")

// document.addEventListener('DOMContentLoaded', () => {

//   const stars = document.querySelectorAll('.rating__star');
//   for (let i = 0; i < stars.length; i++) {
//     stars[i].addEventListener('click', () => {
//       rate();
//     });
//   };
// })

// Martin's Solution 
// Start JS file and make variable for rating stars, using query selector all to use all stars and clg it.
// document.addEventListener('DOMContentLoaded', () => {
//   const starElms = document.querySelectorAll('.rating__star');
//   console.log(starElms);
// });


// change className on elements (test)
// document.addEventListener('DOMContentLoaded', () => {
//   const starElms = document.querySelectorAll('.rating__star');
//   starElms[0].className = 'rating__star';
//   // console.log(starElms);
// });





// Put this all in a function
// const rate = () => {
//   const starElms = document.querySelectorAll('.rating__star');
//   starElms.forEach(starElm => {
//     starElm.className = 'rating__star'
//   });
// };

// // In CLG use rate() to test this 

// document.addEventListener('DOMContentLoaded', () => {
// });




// Add an input so you can call the correct star 
// const rate = (rating) => {
//   const starElms = document.querySelectorAll('.rating__star');
//   starElms.forEach((starElm, index) => {
//     if (index < rating) {
//       starElm.className = 'rating__star rating__star--on'
//     } else {
//       starElm.className = 'rating__star'
//     }
//   });
// };

// document.addEventListener('DOMContentLoaded', () => {
// });

// In CLG use rate(4) and rate(2) to test this 




// Make the value text match up with the number of stars
// const rate = (rating) => {
//   const starElms = document.querySelectorAll('.rating__star');
//   starElms.forEach((starElm, index) => {
//     if (index < rating) {
//       starElm.className = 'rating__star rating__star--on'
//     } else {
//       starElm.className = 'rating__star'
//     }
//     const ratingElm = document.querySelector('.rating__value');
//     ratingElm.textContent = rating;
//   });
// };

// document.addEventListener('DOMContentLoaded', () => {
// });

// // In CLG use rate(4) and rate(2) to test this 


// Add click so it works in the browser
const rate = (rating) => {
  const starElms = document.querySelectorAll('.rating__star');
  starElms.forEach((starElm, index) => {
    if (index < rating) {
      starElm.className = 'rating__star rating__star--on'
    } else {
      starElm.className = 'rating__star'
    }
    const ratingElm = document.querySelector('.rating__value');
    ratingElm.textContent = rating;
  });
};

document.addEventListener('DOMContentLoaded', () => {
  const starElms = document.querySelectorAll('.rating__star');
  starElms.forEach((starElm, index) => {
    starElm.addEventListener('click', () => rate(index + 1));
  });
});

// In CLG use rate(4) and rate(2) to test this 