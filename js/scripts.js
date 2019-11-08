

function Pizza (size, veggies){
  this.size = size;
  this.veggies= veggies;
  this.price = 0;
  }





let newPizza = new Pizza(sizeInput, vegArray)

$(document).ready(function(){
$("#inputForm").submit(function(event){
  event.preventDefault();


      var sizeInput= $("#size").val();
      console.log(size);

      var veggiesInputs = $("#veggies:checked");
      console.log(veggiesInputs);
      var vegArray = [];
      var checkboxArr=[];
veggiesInputs.forEach(function(veg){
    vegArray.push(veg.val());
});

console.log(vegArray);

// for(i=0; i <= veggiesInputs.length; i++){
//   vegArray.push(veggiesInputs[i]);



});
});
