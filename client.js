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
  //divString = '<div class ="block ' + color +' id="></div>';
  //$('body').append(divString);

  // increases counter
  switch (color) {
    case "red":
      redCounterVar+=1;
      divString = '<div class ="block ' + color +'" id="'+redCounterVar+'"></div>';
      break;
    case "blue":
      blueCounterVar+=1;
      divString = '<div class ="block ' + color +'" id="'+blueCounterVar+'"></div>';
      break;
    case "green":
      greenCounterVar+=1;
      divString = '<div class ="block ' + color +'" id="'+greenCounterVar+'"></div>';
      break;
    case "yellow":
      yellowCounterVar+=1;
      divString = '<div class ="block ' + color +'" id="'+yellowCounterVar+'"></div>';
      break;
  }
  $('body').append(divString);
  updateCounter(color);
}

// Updates the counters on the page
function updateCounter(color){
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
