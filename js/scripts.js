//Back-end logic:
var numberToRange = ""
var output = ""
var resultNumber = ""
var newOutput = output;
var numThree = ""
var rangeStringNumber = function(numberToRange) {
  for (var i = 1; i <= numberToRange; i ++) {
    resultNumber = (output += i);
    newOutput = output.split([]);

    } if (numberToRange % 3 === 0) {
        // numberToRange.replace("ping");
    } else if (numberToRange % 5 === 0) {
        // numberToRange.replace("ping");
    } else if (numberToRange % 15 === 0) {
        // numberToRange.replace("ping");
    } else { //numbers 0 or 1
        return newOutput;
    }
};
//Front-end logic:
$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    numberToRange = parseInt($("#numberInput").val());
    output = rangeStringNumber(numberToRange);
    $("#result").append("<li>" + newOutput + "</li>");
  });
});
