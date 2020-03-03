let balance = 300;

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#balance__box').textContent = balance;
  const diceOne = document.querySelector('.diceOne');
  const diceTwo = document.querySelector('.diceTwo');

  betUnderBtn.addEventListener('click', () => {
    let randomNr = Math.ceil(Math.random() * 6);
    let randomNrTwo = Math.ceil(Math.random() * 6);
    let bet = Number(document.querySelector('#bet__input').value);

    diceOne.className = 'diceOne' + randomNr;
    diceTwo.className = 'diceTwo' + randomNrTwo;

    // If bet under
    if (randomNr + randomNrTwo < 7) {
      balance += bet * 2;
    } else {
      balance -= bet;
    }

    document.querySelector('#balance__box').textContent = balance;
  });

  betOverBtn.addEventListener('click', () => {
    let randomNr = Math.ceil(Math.random() * 6);
    let randomNrTwo = Math.ceil(Math.random() * 6);
    let bet = Number(document.querySelector('#bet__input').value);

    diceOne.className = 'diceOne' + randomNr;
    diceTwo.className = 'diceTwo' + randomNrTwo;

    // If bet over
    if (randomNr + randomNrTwo > 7) {
      balance += bet * 2;
    } else {
      balance -= bet;
    }

    document.querySelector('#balance__box').textContent = balance;
  });

  betSevenBtn.addEventListener('click', () => {
    let randomNr = Math.ceil(Math.random() * 6);
    let randomNrTwo = Math.ceil(Math.random() * 6);
    let bet = Number(document.querySelector('#bet__input').value);

    diceOne.className = 'diceOne' + randomNr;
    diceTwo.className = 'diceTwo' + randomNrTwo;

    // If bet seven
    if (randomNr + randomNrTwo === 7) {
      balance += bet * 4;
    } else {
      balance -= bet;
    }

    document.querySelector('#balance__box').textContent = balance;
  });
});

// betUnderBtn
//         betOverBtn
//         betSevenBtn

// let sideNumber = 0;

// document.addEventListener('DOMContentLoaded', () => {
//   document.addEventListener('keypress', () => {
//     const dice = document.querySelector('#dice');
//     if (sideNumber === 6) {
//       sideNumber = 1;
//     } else {
//       sideNumber += 1;
//     }
//     dice.className = 'dice' + sideNumber;
//   });
// });