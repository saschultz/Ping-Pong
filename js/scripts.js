//Back-end logic:

var numberToRange = ""
var output = ""
var resultNumber = ""

var rangeStringNumber = function(numberToRange) {
  for (var i = 1; i <= numberToRange; i ++) {
    var resultNumber = (result += i);

    console.log(resultNumber);
  }
  return resultNumber;
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
    numberToRange = $("#numberInput").val();
    output = rangeStringNumber(numberToRange);
        // console.log(numberToRange);
    $("#result").text(output);


  });
});
