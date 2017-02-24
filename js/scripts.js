//Back-end logic:
var numberToRange = ""
var output = ""
var resultNumber = ""
var newOutput = ""
var numThree = ""

var rangeStringNumber = function(numberToRange) {
  for (var i = 1; i <= numberToRange; i ++) {
    resultNumber = (output += i);
    newOutput = output.split([]);
    // console.log(newOutput)

    }
    if (numberToRange % 3 === 0) {
        alert("ping");
    } else if (numberToRange % 5 === 0) {
        alert("pong");
    } else if (numberToRange % 15 === 0) {
        alert("ping-pong");
    } else {
        // return newOutput;
    }
};

//Front-end logic:
$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    numberToRange = parseInt($("#numberInput").val());
    output = rangeStringNumber(numberToRange);
        // console.log(numberToRange);
    $("#result").append("<li>" + newOutput + "</li>");
  });
});
