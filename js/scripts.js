

function Pizza (size, veggies){
  this.size = size;
  this.veggies= veggies;
  this.price = 0;
  }

Pizza.prototype.costCalulator = function(size, veggies){
    if(this.veggies === "undefined"){
      return 0;
    }
    this.veggies.forEach(function(){
      this.price += 2
    });
    if(this.size === "12 Inch"){
      this.price += 6;
    } else if (this.size === "6 Inch"){
      this.price += 4;
    } else if(this.price += "2 Inch"){
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

      var veggiesInputs = $("#veggies:checked").val();
      console.log(veggiesInputs);
      var vegArray = [];
      veggiesInputs.forEach(function(veg){
        vegArray.push(veg.val());
});



// for (var i = 0; i <= veggiesInputs.length; i++) {
//     vegArray.push(veggiesInputs[i].val());
// }


    let newPizza = new Pizza (sizeInput, vegArray)
    console.log(vegArray);


});
});
