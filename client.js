console.log("Test sourced");

var redCounterVar=0;
var blueCounterVar=0;
var greenCounterVar=0;
var yellowCounterVar=0;

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

  // event listener for click on block
  $(document).on("click", '.block', blockClickFunc);

}

// adds blocks to the DOM
function addBlock(color) {
  var divString = "";

  // builds HTML <div> element and appends it to the <body>
  divString = '<div class ="block ' + color +' id="></div>';
  $('body').append(divString);

  // increases counter
  updateCounter(color,1);

  // changes counter on the page
  displayCounter(color);
}

function updateCounter(color,value) {
  switch (color) {
    case "red":
      redCounterVar+=value;
      break;
    case "blue":
      blueCounterVar+=value;
      break;
    case "green":
      greenCounterVar+=value;
      break;
    case "yellow":
      yellowCounterVar+=value;
      break;
  }
}

// Updates the counters on the page
function displayCounter(color){
    switch (color) {
    case "red":
      $(".redCounter").text("Red count: " + redCounterVar);
      break;
    case "blue":
      $(".blueCounter").text("Blue count: " + blueCounterVar);
      break;
    case "green":
      $(".greenCounter").text("Green count: " + greenCounterVar);
      break;
    case "yellow":
      $(".yellowCounter").text("Yellow count: " + yellowCounterVar);
      break;
  }
}

// calls function to add block and increase counter depending on color
function buttonClickFunc(color) {
  addBlock(color);
}

// deletes block and decreases counter
function blockClickFunc() {

  console.log("in function");

  var color = $(this).attr('class').split(' ')[1];
  console.log(color);

  $(this).hide();

}

$(document).ready(onReady);
