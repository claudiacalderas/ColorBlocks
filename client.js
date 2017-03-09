console.log("Test sourced");

function onReady(){
  console.log("Document ready");

  addBlock("red");
  addBlock("blue");
  addBlock("green");
  addBlock("yellow");

  // event listeners
  $('#redButton').click(function() {
    buttonClickFunc("red");
  });

  $('#blueButton').click(function() {
    buttonClickFunc("blue");
  });
  $('#greenButton').click(function() {
    buttonClickFunc("green");
  });
  $('#yellowButton').click(function() {
    buttonClickFunc("yellow");
  });
}

// adds blocks to the DOM
function addBlock(color) {
  var divString = "";

  divString = '<div class ="block ' + color +'"></div>';
  console.log(divString);
  $('body').append(divString);
}

function buttonClickFunc(color) {
    switch (color) {
      case "red":
        addBlock(color);
        break;
      case "blue":
        addBlock(color);
        break;
      case "green":
        addBlock(color);
        break;
      case "yellow":
        addBlock(color);
        break;
      default:
    }
}

$(document).ready(onReady);
