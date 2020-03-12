
document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('.app')

  const progress1 = new ProgressBar(3, "red", 17);
  const progress2 = new ProgressBar(5, "green", 17);
  const progress3 = new ProgressBar(7, "blue", 17);

  progress1.mount(app);
  progress2.mount(app);
  progress3.mount(app);

  const btnElm = document.querySelector('#colorMixer');
  btnElm.addEventListener('click', () => {
    btnElm.style.backgroundColor = `rgb(${progress1.value * 15}, ${progress2.value * 15}, ${progress3.value * 15})`;
  });
})


//  Put a button od the page. When the button is clicked the user should see the color mixed by these progress bars. You need tu multiply the value of each progress by 15 to get from range 0 - 17 to 0 - 255 for each color component.

