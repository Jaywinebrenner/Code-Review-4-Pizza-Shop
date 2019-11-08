

function Pizza (size, veggies){
  this.size = size;
  this.veggies= veggies;
  this.price = 0;
  }

Pizza.prototype.costCalulator = function(size){
  if (this.size === "undefined"){
    price += 0;
  };

  if (this.size === "12 Inch") {
    this.price += 10;

  }
  if (this.size === "6 Inch") {
    this.price += 8;
  }

  if (this.size === "2 Inch") {
    this.price += 4;
  }

  if (this.veggies.length === [0]){
    this.price += 2;
  }
  this.veggies.forEach(function(veggies){
    this.price += 2;
    console.log(this.veggies);
    });

    return this.price;
};

Pizza.prototype.showCost = function(price){
  $("#show").show();
  $("#price-span").html("$" + this.price);

};



// function showCost() {
//     $("#show").show();
//     $("#price-span").html("$" + this.price);
//   };


$(document).ready(function(){
$("#inputForm").submit(function(event){
  event.preventDefault();

      var sizeInput= $("#size").val();

      var vegArray = [];
      $("input:checkbox[name=veggies]:checked").each(function(){
      var inputVeggies = $(this).val();
       vegArray.push(inputVeggies);
    });

    let newPizza = new Pizza (sizeInput, vegArray);
    newPizza.costCalulator(sizeInput, vegArray);
    newPizza.showCost();


});
});
