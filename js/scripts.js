//Back-end logic:
var output = "";
numberToRange = "";
userInput = "";
// var infiniteNum = numberToRange.POSITIVE_INFINITY;
// console.log(infiniteNum);


var rangeStringNumber = function(numberToRange) {

  // for (numberToRange = 2; numberToRange <= Infinity; numberToRange++)
  //   ("numberToRange" + "numberToRange" + "<br>");
  //
  //
  // if (numberToRange <= 0) {
  //   return numberToRange;
  // } else if (numberToRange < Infinity) {
  //   var returnRange = numberToRange + "00";
  //   return returnRange;
  //   console.log(returnRange);
  // }

  for (var i = 0; i <= numberToRange; i ++) {
    result += i;
    console.log(result);;
  }
};


//Front-end logic:
$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    var numberToRange = $("#numberInput").val();
    output = rangeStringNumber(numberToRange);
    $("#result").text(output);


  });
});
