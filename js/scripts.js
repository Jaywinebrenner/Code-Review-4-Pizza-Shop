

function Pizza (size, veggies){
  this.size = size;
  this.veggies= veggies;
  this.price = 0;
  }


Pizza.prototype.costCalulator = function(size, veggies){
    // if(this.veggies === "undefined"){
    //   return 0;
    // }
    this.veggies.forEach(function(veggies){
      this.price += 2;
      console.log(this.price);
    });
    if(this.size === "12 Inch"){
      this.price += 6;
    } else if (this.size === "6 Inch"){
      this.price += 4;
    } else if(this.price === "2 Inch"){
      this.price += 2;
    } else {
      return this.price;
    }

};


function showCost(costCalculator) {
    $("#show").show();
    $("#price-span").html("$" + costCalculator);
  };


$(document).ready(function(){
$("#inputForm").submit(function(event){
  event.preventDefault();


      var sizeInput= $("#size").val();
      console.log("pizza size" , sizeInput);

      var vegArray = [];
      $("input:checkbox[name=veggies]:checked").each(function(){
      var inputVeggies = $(this).val();
       vegArray.push(inputVeggies);

    });

    let newPizza = new Pizza (sizeInput, vegArray)
    newPizza.costCalulator();



});
});
