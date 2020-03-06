// A simple grocery shopping list (stage 1)
// Create a web page which will display a shopping list.

// Create a simple project with HTML, CSS and JavaScript.
// In your index.js create an array of grocery items to buy such as apples, bananas, milk, bread etc. The items are just simple strings

// In your HTML create a div with id and class list
// Use a for each loop to go through the array of grocery items and create its HTML representation such as this.
// <div class="item">Apples</div>
// <div class="item">Bananas</div>
// <!-- other items... -->


// Set this content is innerHTML of the #list element.
// Stage 2: More complicated items
// We would like our shopping list to have not only the item names but also how many or much of the item you should buy.

// Change the items in the array from simple string to object, which will contain the name of the item and the amount as well.
// Change your page so that it displays the name and amount
// Stage 3: Adding new items
// Put a form to your page for adding new items to the list.
// Stage 4: (optional, challenging)
// Put a cross beside each item which, when clicked, will delete the item from the list.

const groceryList = [{
  fruit: 'apples',
  amount: 1
}, {
  fruit: 'bananas',
  amount: 20
}, {
  fruit: 'strawberries',
  amount: 40
}, {
  fruit: 'kiwis',
  amount: 2
}, {
  fruit: 'mangoes',
  amount: 6
}, {
  fruit: 'chocolate',
  amount: 99
}, {
  fruit: 'lemons',
  amount: 3
}, {
  fruit: 'oranges',
  amount: 7
}, {
  fruit: 'avocadoes',
  amount: 10
}];


document.addEventListener('DOMContentLoaded', () => {


  const list = document.querySelector('#list');
  for (let i = 0; i < groceryList.length; i += 1) {
    list.innerHTML += `<div class="item"><span class="cross">✠</span>${groceryList[i].fruit} ${groceryList[i].amount}</div>`;
  }
  const newItemBtn = document.querySelector('#addItem');
  const newItemInput = document.querySelector('#newItem');

  newItemBtn.addEventListener('click', () => {
    list.innerHTML += `<div class="item"><span class="cross">✠</span>${newItemInput.value}</div>`;
  });

  // const cross = document.querySelectorAll('.cross');
  // cross.addEventListener('click', () => {
  //   list.innerHTML -= `<div class="item"><span class="cross">✠</span>${groceryList[i].fruit} ${groceryList[i].amount}</div>`;
  // });
});

// Stage 3: Adding new items
// Put a form to your page for adding new items to the list.
// Stage 4: (optional, challenging)
// Put a cross beside each item which, when clicked, will delete the item from the list.

/* <label for="newItem">Add a new item to the list<input type="text" id="newItem"></label><button */
// id="addItem">Add</button>