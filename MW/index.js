document.addEventListener("DOMContentLoaded", () => {
  const padlock = document.querySelector(".padlock");
  const text = document.querySelector(".text");

  padlock.addEventListener("mouseleave", () => {
    text.style.display = "none";
  });
  padlock.addEventListener("mouseenter", () => {
    text.style.display = "block";
  });
});

// mouseenter           text is diplayed

// mouseleave           text is hidden

// Attach these events to the padlock element on the document's DOMContentLoaded event inside your index.js.

// Martin's solution
// document.addEventListener('DOMContentLoaded', () => {
// const padlock = document.querySelector('#padlock');
// const message = document.querySelector('#message');

// padlock.addEventListener("mouseleave", () => {
//   message.className = 'message hidden'
// OR use message.classList.add('hidden')
// });
// padlock.addEventListener("mouseenter", () => {
//   message.className = 'message'
// >>OR use message.classList.remove('hidden')
// >>OR use message.classList.toggle('hidden')
// });
// });

// Toggle will remove/add on/off> from previous state to other state.

// IN CSS:
// .hidden {opacity: 0;}
