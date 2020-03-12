document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('keypress', () => {
    position = .5;
    moveSnail = setInterval(() => {

      const racer = document.querySelector('.snail-racer');
      racer.style.marginLeft = `${position += 1}%`;




    }, 40);
  });

});




// Stage 1: Making a snail move
// Download a starter project for The Snails' Race project. There is an SVG snail waiting for you. Play with the site for a while. Make the snail's shell a different color. Try to move home a bit to the right.



// Set a timer which will move the snail a bit to the right every 40 milliseconds.



// Create a variable speed which stores the snail's speed in pixels per second. Make the snail move at this speed.
// exercise
// Stage 2: Snail as a component
// Make a component called Snail with properties name, speed and color. Mount it on the page. When the user presses the spacebar, the snail starts to move to the right.
// Place several snails on the page with different names, speeds and colors. When the user presses the spacebar they will start their race.
// exercise
// Stage 3: Remote snails
// Now it's time to fetch the snails from a remote API. To generate 5 snails of different colors, names and velocities go to

// http://bootcamp.podlomar.org/api/snails/5
// You can generate any number of snails from 1 to 16.

// When the page loads if will load the snails from the API. The snails will wait at the starting line and when the user presses the spacebar the race begins!












// Getting API data from a website to your JS file

// fetching from the API
// This will fetch a promise which will use our callback to do the function when the data actually arrives from the server
// const responsePromise = fetch('https://swapi.co/api/people/');
// // .then(response => console.log(response));
// const jsonPromise = responsePromise.then(response => response.json());
// // jsonPromise.then(json => console.log(json));
// jsonPromise.then(json => {
//   for (const person of json.results) {
//     console.log(person.name);
//   }
// });


// fetch('http://bootcamp.podlomar.org/api/snails/5')
//   .then(response => response.json())
//   .then(json => {
//     for (const snail of json.results) {
//       console.log(snail.name);
//     }
//   });