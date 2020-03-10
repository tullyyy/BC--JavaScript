// Exercise 1: Products
// 1 Create an object representing a product in an e-shop. Give it these properties

// name - name of the product
// price - the price of the product in euros
// quantity - number of items available in the store
// Create an array containing at least 7 different products.
// Creating such an array is hard work. Let's create a class Product to make our lives easier.

// Create a class named Product
// Create a constructor inside of it taking these three parameters: name, price and quantity. In the constructor set the properties of the object to the values of these parameters.
// Create the same array as before with the 7 products but now useing your class and the new keyword.
// Now we add some methods to our class

// Add a method called sell() which will sell one product. This will decrease the number of products of this type in the store (decrease the quantity property)
// Add a method called store(count) which will put count more products of this type to the store
// Making a website

// Create a website which displays the products in our array. Display each product with its name, price and quantity.
// Put a buy button next to each item that, when clicked, will call the method sell() on the appropriate object.
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  sell() {
    return this.quantity -= 1;
    alert('hi')
  }

  count() {
    return this.quantity += 1;
  }
}


// const tshirt = new Product('T-shirt', 15, 200);
// const cardigan = new Product('Cardigan', 28, 100);
// const longsleeve = new Product('Long-sleeve', 20, 50);
// const tanktop = new Product('Tank Top', 10, 10);
// const polo = new Product('Polo', 25, 1);
// const buttonup = new Product('Button-up', 22, 150);
// const sweater = new Product('Sweater', 30, 110);


const products = [
  new Product('T-shirt', 15, 200),
  new Product('Cardigan', 28, 100),
  new Product('Long-sleeve', 20, 50),
  new Product('Tank Top', 10, 10),
  new Product('Polo', 25, 1),
  new Product('Button-up', 22, 150),
  new Product('Sweater', 30, 110),
];




document.addEventListener('DOMContentLoaded', () => {
  for (i = 0; i < products.length; i += 1) {
    let items = document.createElement('tr');
    const body = document.querySelector('.tbody');
    const btn = document.createElement('button');

    items.innerHTML += `
    <td>${products[i].name}</td>
    <td>${products[i].price}</td>
    <td>${products[i].quantity}</td>
    `

    btn.innerHTML += `Buy`

    body.appendChild(items);
    items.appendChild(btn)
    btn.addEventListener('click', (products[i].sell()))
  }


});





// to log or call, products[3].price or products[5].sell()