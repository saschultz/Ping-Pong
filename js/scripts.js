//Back-end logic:
// var output = "";
// numberToRange = "";
// userInput = "";
// var infiniteNum = numberToRange.POSITIVE_INFINITY;
// console.log(infiniteNum);


var rangeStringNumber = function(numberToRange) {
  for (var i = 1; i <= numberToRange; i ++) {
    var newVar = (result += i).slice();
    // return newVar;
    console.log(newVar);
  }
};

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


//Front-end logic:
$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    var numberToRange = $("#numberInput").val();
    var output = rangeStringNumber(numberToRange);
        // console.log(numberToRange);
    $("#result").text(output);


  });
});
