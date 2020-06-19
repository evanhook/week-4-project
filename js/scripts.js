// Business Logic
  function PizzaParlor(){
    this.pizzaOrders = []
  }

PizzaParlor.prototype.addPizzaOrder = function(pizzaOrder) {
  this.pizzaOrder.push(pizzaOrder);
}

function PizzaOrder(firstName, lastName, phoneNum, size, toppings, pizzaPrice) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.phoneNum = phoneNum
  this.size = size,
  this.toppings = toppings
  this.pizzaPrice = pizzaPrice
}

//let pizzaOrder = new PizzaOrder()
//let smallPizza = 10
//let largePizza - 15
//let toppings = .50

// User Interface Logic
$(document).ready(function() {

});
