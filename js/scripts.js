

function Pizza (size, sauce, veggies){
  this.size = size;
  this.sauce = sauce;
  this.veggies= veggies;
  this.price = 0;
  }

Pizza.prototype.costCalulator = function(size, sauce, veggies){
  if (this.size === "undefined"){
    price += 0;
  }
  if (this.size === "12 Inch") {
    this.price += 10;
  }
  if (this.size === "6 Inch") {
    this.price += 8;
  }
  if (this.size === "2 Inch") {
    this.price += 4;
  }
console.log(this.sauce);
  if (this.sauce == "Tomato") {
    this.price += 3;
    console.log(this.price);
  }
  if (this.sauce == "Liquid Larynx" || "Bat Blood") {
    this.price += 5;
    console.log(this.price);
  }
  if(this.sauce === "Extra Spicy") {
    this.price += 8;
    console.log(this.price);

  }
  //
  // if (this.size === "2 Inch") {
  //   this.price += 4;
  // }
  // this.veggies.forEach(function(veggies){
  //   this.price += 2;
  //   });

    return this.price;
};

Pizza.prototype.showCost = function(price){
  $("#show").show();
  $("#price-p").html("$" + this.price);

};




$(document).ready(function(){
$("#inputForm").submit(function(event){
  event.preventDefault();

      var sizeInput= $("#size").val();
      var sauceInput = $("#sauce").val();

      var vegArray = [];
      $("input:checkbox[name=veggies]:checked").each(function(){
      var inputVeggies = $(this).val();
       vegArray.push(inputVeggies);
    });

    let newPizza = new Pizza (sizeInput, sauceInput, vegArray);
    newPizza.costCalulator(sizeInput, sauceInput, vegArray);
    newPizza.showCost();


});
});
