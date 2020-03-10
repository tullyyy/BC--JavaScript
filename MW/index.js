// let counter = 4;

// document.addEventListener('DOMContentLoaded', () => {

//   const btnMinus = document.querySelector('#minus');
//   const btnPlus = document.querySelector('#plus');
//   const knobElm = document.querySelector('#knob');

//   btnMinus.addEventListener('click', () => {
//     if (counter > 0) {
//       counter--;
//       const counterElm = document.querySelector('#counter');
//       counterElm.textContent = counter;
//       knobElm.style.width = (Number(counter) * 10) + '%';
//     }
//   });

//   btnPlus.addEventListener('click', () => {
//     if (counter < 10) {
//       counter++;
//       const counterElm = document.querySelector('#counter');
//       counterElm.textContent = counter;
//       knobElm.style.width = (Number(counter) * 10) + '%';
//     }
//   });
// });


/* <div id="label" class="label">
    <span id="counter">4</span>/<span id="maximum">10</span>
  </div>
  <div class="progress">
    <div id="minus" class="btn-minus"></div>
    <div class="bar">
      <div id="knob" class="knob"></div>
    </div>
    <div id="plus" class="btn-plus"></div>
  </div> */





// Add a button click and make a listener and add an alert to ensure it works

// document.addEventListener('DOMContentLoaded', () => {
//   const btnPlus = document.querySelector('#plus');
//   btnPlus.addEventListener('click', () => {
//     alert('hello');
//   })
// });





// Add a value += 1 and add an alert to ensure it works
// document.addEventListener('DOMContentLoaded', () => {
//   const btnPlus = document.querySelector('#plus');
//   btnPlus.addEventListener('click', () => {

//     value += 1;
//     alert(value);
//   })
// });





// change the counter on the page and check in HTML that it works

// let value = 4;

// document.addEventListener('DOMContentLoaded', () => {
//   const btnPlus = document.querySelector('#plus');
//   btnPlus.addEventListener('click', () => {
//     value += 1;
//     const counterElm = document.querySelector('#counter')
//     counterElm.textContent = value;
//   })
// });





// Do the same for minus
// let value = 4;

// document.addEventListener('DOMContentLoaded', () => {
//   const btnPlus = document.querySelector('#plus');
//   btnPlus.addEventListener('click', () => {
//     value += 1;
//     const counterElm = document.querySelector('#counter')
//     counterElm.textContent = value;
//   })

//   const btnMinus = document.querySelector('#minus');
//   btnMinus.addEventListener('click', () => {
//     value -= 1;
//     const counterElm = document.querySelector('#counter')
//     counterElm.textContent = value;
//   })
// });




// Change knob width so it shows progress
// let value = 4;

// document.addEventListener('DOMContentLoaded', () => {
//   const btnPlus = document.querySelector('#plus');
//   btnPlus.addEventListener('click', () => {
//     value += 1;
//     const counterElm = document.querySelector('#counter')
//     counterElm.textContent = value;
//     const knobElm = document.querySelector('#knob');
//     knobElm.style.width = `${value * 10}%`;
//   })

//   const btnMinus = document.querySelector('#minus');
//   btnMinus.addEventListener('click', () => {
//     value -= 1;
//     const counterElm = document.querySelector('#counter')
//     counterElm.textContent = value;
//     const knobElm = document.querySelector('#knob');
//     knobElm.style.width = `${value * 10}%`;
//   })
// });




// Create a function to combine like code

// let value = 4;

// const updateHTML = () => {
//   const counterElm = document.querySelector('#counter')
//   counterElm.textContent = value;
//   const knobElm = document.querySelector('#knob');
//   knobElm.style.width = `${value * 10}%`;
// }

// document.addEventListener('DOMContentLoaded', () => {
//   const btnPlus = document.querySelector('#plus');
//   btnPlus.addEventListener('click', () => {
//     value += 1;
//     updateHTML();
//   })

//   const btnMinus = document.querySelector('#minus');
//   btnMinus.addEventListener('click', () => {
//     value -= 1;
//     updateHTML();
//   })
// });




// Change start value to 10 by adding update function
// let value = 10;

// const updateHTML = () => {
//   const counterElm = document.querySelector('#counter')
//   counterElm.textContent = value;
//   const knobElm = document.querySelector('#knob');
//   knobElm.style.width = `${value * 10}%`;
// }

// document.addEventListener('DOMContentLoaded', () => {

//   updateHTML()

//   const btnPlus = document.querySelector('#plus');
//   btnPlus.addEventListener('click', () => {
//     value += 1;
//     updateHTML();
//   })

//   const btnMinus = document.querySelector('#minus');
//   btnMinus.addEventListener('click', () => {
//     value -= 1;
//     updateHTML();
//   })
// });



// Make sure the limits are set so it an't go above 10 over below 0
// let value= 10

// const updateHTML = () => {
//   const counterElm = document.querySelector('#counter')
//   counterElm.textContent = value;
//   const knobElm = document.querySelector('#knob');
//   knobElm.style.width = `${value * 10}%`;
// }

// document.addEventListener('DOMContentLoaded', () => {

//   updateHTML()

//   const btnPlus = document.querySelector('#plus');
//   btnPlus.addEventListener('click', () => {
//     if (value < 10) {
//       value += 1;
//       updateHTML();
//     }
//   })

//   const btnMinus = document.querySelector('#minus');
//   btnMinus.addEventListener('click', () => {
//     if (value > 0) {
//       value -= 1;
//       updateHTML();
//     }
//   })
// });

let value = 10;

class ProgressBar {
  constructor(value) {
    this.value = value;
  }

  increment() {
    if (this.value < 10) {
      this.value += 1;
      this.update()
    }


  }
  decrement() {
    if (this.value > 0) {
      this.value -= 1;
      this.update()
    }
  }

  render() { //create the dom element for the progress bar
    this.element = document.createElement('div');
    this.element.className = 'progress-bar';
    this.element.innerHTML = (
      `<div id="label" class="label">
        <span id="counter">4</span>/<span id="maximum">10</span>
      </div>
      <div class="progress">
        <div id="minus" class="btn-minus"></div>
        <div class="bar">
          <div id="knob" class="knob"></div>
        </div>
        <div id="plus" class="btn-plus"></div>
      </div>`
    );

    const btnPlus = this.element.querySelector('#plus');
    btnPlus.addEventListener('click', () => this.increment());


    const btnMinus = this.element.querySelector('#minus');
    btnMinus.addEventListener('click', () => this.decrement())

    return this.element;
  }

  update() { //updates the element according to the state changes
    const counterElm = this.element.querySelector('#counter')
    counterElm.textContent = this.value;
    const knobElm = this.element.querySelector('#knob');
    knobElm.style.width = `${this.value * 10}%`;
  }

  mount(parent) {
    this.render();
    this.update();
    parent.appendChild(this.element);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('.app')

  const progress1 = new ProgressBar(3);
  const progress2 = new ProgressBar(5);
  const progress3 = new ProgressBar(7);

  progress1.mount(app);
  progress2.mount(app);
  progress3.mount(app);
})