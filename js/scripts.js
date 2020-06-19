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

PizzaOrder.prototype.pizzaCost = function() {
  return pizzaPrice = size + toppings;
  // take in number of toppings selected multiplied by 50 cents
}

// User Interface Logic
function showCost(pizzaSize){
// create equation if small show else large show
//let smallPizza = 10
//let largePizza - 15


}

$(document).ready(function() {
  let pizzaParlor = new PizzaParlor();
  //let completedOrder;
$("form#orderForm").submit(function(event) {
  event.preventDefault();
  const inputtedFirstName = $("input#new-first-name").val();
  const inputtedLastName = $("input#new-last-name").val();
  const inputtedPhoneNumber = $("input#new-phone-num").val();
  const inputtedPizzaSize = $("input:radio[name=select-toppings]:checked").val();
  const inputtedToppings = $("input:checkbox[name=select-toppings]:checked").val();

  $("input#new-first-name").val("");
  $("input#new-last-name").val("");
  $("input#new-phone-num").val("");
  $("input:radio[name=select-toppings]:checked").val("");
  $("input:checkbox[name=select-toppings]:checked").val("");

  completedOrder = new PizzaOrder(inputtedFirstName, inputtedLastName, inputtedPhoneNumber, inputtedPizzaSize, inputtedToppings);
  pizzaParlor.addPizzaOrder(completedOrder);
  displayPizzaOrder(completedOrder);

// call showcost
})
});
//let pizzaOrder = new PizzaOrder()
//let smallPizza = 10
//let largePizza - 15
//let toppings = .50
//let toppings = .50 