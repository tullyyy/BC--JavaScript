let balance = 300;

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#balance__box').textContent = balance;
  const dice = document.querySelector('#dice');

  dice.addEventListener('click', () => {
    let randomNr = Math.ceil(Math.random() * 6);
    let bet = Number(document.querySelector('#bet__input').value);

    dice.className = 'dice' + randomNr;

    if (randomNr === 6) {
      balance += bet * 6;
    } else {
      balance -= bet;
    }

    document.querySelector('#balance__box').textContent = balance;
  });
});




// 
//       let balance = document.querySelector('#balance__box').textContent = 300;