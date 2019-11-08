

function Pizza (size, sauce, veggies){
  this.size = size;
  this.sauce = sauce;
  this.veggies= veggies;
  this.price = 0;
  }
Pizza.prototype.garlic = function(veggies){
  if(this.veggies.includes("Garlic")){
    console.log(this.veggie);
    this.price = 0;
    $("#show2").show();
    $("#show").toggle();
  }

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
  if (this.sauce === "Tomato") {
    this.price += 3;
  }
  if (this.sauce === "Pesto") {
    this.price += 4;
  }
  if (this.sauce === "Bat Blood") {
    this.price += 5;
  }
  if (this.sauce === "Liquid Larynx") {
    this.price += 6;
    console.log(this.sauce);
  }
  if(this.sauce === "Extra Spicy") {
    this.price += 8;
  }



  let veggieVariable= 0;
  this.veggies.forEach(function(veggies){
    veggieVariable += 2;
    });
    this.price += veggieVariable;

    return this.price;
};

Pizza.prototype.showCost = function(price){
  $("#show").show();
  $("#price-p").html("$" + this.price);
};

// Pizza.prototyple.garlicReset = function(){
//   this.size = 0;
//   this.sauce = 0;
//   this.veggies= 0;
//   this.price = 0;
// }


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
    newPizza.garlic();
    // $("#garlic-button").click(function(){
    //   myPizza.garlicReset();
    // })


});
});
