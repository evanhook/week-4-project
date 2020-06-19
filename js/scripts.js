// Business Logic
function PizzaParlor(){
  this.pizzaOrders = []
}

function PizzaOrder(name, size, toppings, pizzaPrice) {
  this.name = name;
  this.size = size;
  this.toppings = toppings;
  this.pizzaPrice = pizzaPrice
}

PizzaParlor.prototype.addNewOrder = function(order) {
  this.pizzaOrders.push(order);
}

// User Interface
let pizzaParlor = new PizzaParlor();

// function totalCost(){
//   let size = $("input:checkbox[name=select-toppings]:checked");
//   if checked {
//     display("#")
//   } else 
  
//   this.pizzaPricePrice.push()
// }

function displayPizzaOrderDetails(pizzaParlorToDisplay) {
  let orderList = $("ul#orders");
  let htmlForOrderInfo = "";
  pizzaParlorToDisplay.orders.forEach(function(order) {
    htmlForOrderInfo += "<li id=" + order.id + ">" + order.firstName + "</li>";
  });
  ordersList.html(htmlForOrderInfo);
};

function showOrder(orderId) {
  const myOrder = pizzaParlor.addNewOrder("");
  const toppingsSelected = document.querySelectorAll('input[name="selet-toppings"]:checked');
  $("#show-order").show();
  $("#first-name").html(this.name);
  $("#pizza-size").html(this.size);
  $("#pizza-toppings").html(toppingsSelected);
  //$(".pizza-price").html(this.pizzaPrice);
}
// function attachOrderListeners() {
//   $("ul#orders").on("click", "li", function (){
//     showOrder(this.id);
//   });
// }

$(document).ready(function(){
  $("form#orderForm").submit(function(event){
    event.preventDefault();
    const inputtedName = $("input#new-name").val();
    const inputtedSize = document.getElementsByName("select-size");
    //const inputtedToppings = document.getElementsByName("select-toppings");
    const toppingsSelected = document.querySelectorAll('input[name="selet-toppings"]:checked');

    let newOrder = new PizzaOrder(inputtedName, inputtedSize, toppingsSelected);
    pizzaParlor.addNewOrder(newOrder);
    $("show-order").show("");
    console.log(newOrder);
  });
});