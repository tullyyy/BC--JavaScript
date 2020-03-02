
const bulb = document.querySelector('#bulb');
bulb.classList.toggle("bulb-on");

const switchBulb = () => {
  const bulb = document.querySelector('#bulb');
  bulb.classList.toggle("bulb-on");
}

// Take the solution the lightbulb exercise from day 13 and turn the lightbulb into a component. 

// Properly implement the render method to create the lightbulb's DOM element,

// themount method to mount it on the page, 

// and the update method to make the bulb switch between ON/OFF. 

// The state of the component can be represented as a single boolean value with true for ON and false for OFF.