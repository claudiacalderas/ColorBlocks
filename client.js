console.log("Test sourced");

function onReady(){
  console.log("Document ready");

  addBlock("red");
  addBlock("blue");
  addBlock("green");
  addBlock("yellow");

}

// adds blocks to the DOM
function addBlock(color) {
  var divString = "";

  divString = '<div class ="block ' + color +'"></div>';
  console.log(divString);
  $('body').append(divString);

}

$(document).ready(onReady);
