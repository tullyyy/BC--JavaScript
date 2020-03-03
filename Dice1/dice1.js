    // const oneSide = document.querySelector(".dice1");
    // const twoSide = document.querySelector(".dice2");
    // const threeSide = document.querySelector(".dice3");
    // const fourSide = document.querySelector(".dice4");
    // const fiveSide = document.querySelector(".dice5");
    // const sixSide = document.querySelector(".dice6");



    let sideNumber = 0;

    document.addEventListener('DOMContentLoaded', () => {
      document.addEventListener('keypress', () => {
        const dice = document.querySelector('#dice');
        if (sideNumber === 6) {
          sideNumber = 1;
        } else {
          sideNumber += 1;
        }
        dice.className = 'dice' + sideNumber;
      });
    });

    // let diceRoll = Math.floor(Math.random() * 6 + 1);
    // dice.className = 'dice' + randomNr;
    // box.classList.toggle('box--anim')

    // 