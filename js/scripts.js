// Business Logic
function PizzaParlor(){
  this.pizzaOrders = [],
  this.currentId = 0
}

PizzaParlor.prototype.addPizzaOrder = function(pizzaOrder) {
  pizzaOrder.id = this.assignId();
  this.pizzaOrder.push(pizzaOrder);
  }

PizzaParlor.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

PizzaParlor.prototype.findPizzaOrder = function(id) {
  for (let i=0; i< this.pizzaOrders.length; i++) {
    if(this.pizzaOrders[i]) {
      if (this.pizzaOrders[i].id==id) {
        delete this.pizzaOrders[i];
        return true;
    }
  }
};
return false;
}

function PizzaOrder(firstName, lastName, phoneNum) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNum = phoneNum
  // this.size = size;
  // this.toppings = toppings;
  // this.pizzaPrice = pizzaPrice
}

PizzaOrder.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}
//this is unfinished
// PizzaOrder.prototype.pizzaCost = function() {
//   return pizzaPrice = size + toppings;
//   // take in number of toppings selected multiplied by 50 cents
// }

let pizzaParlor = new PizzaParlor();

function displayPizzaOrderDetails(pizzaParlorToDisplay) {
  let orderList = $("ul#orders");
  let htmlForOrderInfo = "";
  pizzaParlorToDisplay.orders.forEach(function(order) {
    htmlForOrderInfo += "<li id=" + order.id + ">" + order.firstName + " " + order.lastName + "</li>";
  });
  ordersList.html(htmlForOrderInfo);
};

function showOrder(orderId) {
  const order = pizzaBarlor.findPizzaOrder(orderId);
  $("#show-order").show();
  $(".first-name").html(order.firstName);
  $(".last-name").html(order.lasttName);
  $(".phone-number").html(order.phoneNum);
  // $(".pizza-size").html(order.size);
  // $(".pizza-toppings").html(order.toppings);
  // $(".pizza-price").html(order.pizzaPrice);
}

// function pizzaSizeCost(smallPizza){
//   if (smallPizza = $("input:radio[name=select-size]:checked")){
//     this.size = 10;
//   } else  {
//   this.size = 15;
//   }
// }

function attachOrderListeners() {
  $("ul#orders").on("click", "li", function (){
    showOrder(this.id);
  });
}

$(document).ready(function() {
  let newOrder;
  attachOrderListeners();
  $("form#orderForm").submit(function(event) {
    event.preventDefault;
    const inputtedFirstName = $("input#new-first-name").val();
    const inputtedLastName = $("input#new-last-name").val();
    const inputtedPhoneNumber = $("input#new-phone-num").val();
    // const inputtedPizzaSize = $(this).val();
    // const inputtedToppings = $("input:checkbox[name=select-toppings]:checked").each(function(){
    //   inputtedToppings = $(this).val();
    // });

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-phone-num").val("");

    newOrder = new PizzaOrder(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);
    pizzaParlor.addPizzaOrder(newOrder);
    displayPizzaOrderDetails(pizzaParlor);
  });
});