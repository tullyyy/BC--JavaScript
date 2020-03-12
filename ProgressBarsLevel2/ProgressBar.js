let value = 5;


// Add a color parameter to the constructor of the ProgressBar class so that we can choose the color of the progress bar. Use the color value inside the render method to create a progress bar with a given color.


// Add a max parameter to the constructor of the ProgressBar class so that we can the set the maximum allowed value of the progress bar. The challenge is to correctly convert the value of the progress to percentages for the width of the knob. The formula is value / max. Make sure the progress bar cannot go over the maximum limit.


// Put three progress bars on the page - a red one, a green one, and a blue one. Set their ranges to 0 - 17. Put a button od the page. When the button is clicked the user should see the color mixed by these progress bars. You need tu multiply the value of each progress by 15 to get from range 0 - 17 to 0 - 255 for each color component.




class ProgressBar {
  constructor(value, color, max) {
    this.value = value;
    this.color = color;
    this.max = max;
  }

  increment() {
    if (this.value < this.max) {
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
        <span id="counter">4</span>/<span id="maximum">${this.max}</span>
      </div>
      <div class="progress">
        <div id="minus" class="btn-minus"></div>
        <div class="bar">
          <div id="knob" class="knob"></div>
        </div>
        <div id="plus" class="btn-plus"></div>
      </div>`
    );

    const knobElm = this.element.querySelector('#knob');
    knobElm.style.backgroundColor = this.color;

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
    knobElm.style.width = `${(this.value / this.max) * 100}%`;

  }

  mount(parent) {
    this.render();
    this.update();
    parent.appendChild(this.element);
  }
};
