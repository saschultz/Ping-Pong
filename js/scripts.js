//Back-end logic:
var numberToRange = ""
var output = ""
var resultNumber = [""]

var rangeStringNumber = function(numberToRange) {
  for (var i = 1; i <= numberToRange; i ++) {
    resultNumber = (output += i);
    console.log(resultNumber);
  }
return (resultNumber);
};


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
