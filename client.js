console.log("Test sourced");

var redCounterVar=0;
var blueCounterVar=0;
var greenCounterVar=0;
var yellowCounterVar=0;

function onReady(){
  console.log("Document ready");

  // display the basic elements on the page
  displayElements();

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
  $(".container").on("click", '.block', blockClickFunc);
}

function displayElements() {

  colorsArray = ["red","blue","green","yellow"];
  htmlString = '';

  // counters:
  //<h2><span class="redCounter">Red count:</span></h2>
  htmlString = '<div>';
  for (var i=0; i<colorsArray.length; i++) {
    htmlString += '<h2><span class="' + colorsArray[i] +
                  'Counter">'+colorsArray[i]+' count:</span></h2>';
  }
  htmlString += '</div>';
  $('.container').append(htmlString);

  // buttons:
  // <button id="redButton">Red</button>
  htmlString = '<div>';
  for (i=0; i<colorsArray.length; i++) {
    htmlString += '<button id="' + colorsArray[i] + 'Button">'+
                  colorsArray[i]+'</button>';
  }
  htmlString += '</div>';
  $('.container').append(htmlString);

  // adds four initial blocks
  addBlock("red");
  addBlock("blue");
  addBlock("green");
  addBlock("yellow");
}

// adds blocks to the DOM
function addBlock(color) {
  var divString = "";

  // builds HTML <div> element and appends it to the <div class='container'>
  divString = '<div class ="block ' + color +'"></div>';
  $('.container').append(divString);

  // adds data to block
  var $element = $(".container").children().last();
  $element.data("color", color);

  console.log($element.data('color'));

  // increases counter
  updateCounter(color,1);

  // changes counter on the page
  displayCounter(color);
}

// increases or decreases color counters
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
  // gets the color of the block that has been clicked
  var blockData = $(this).data();
  var currentColor = blockData.color;

  console.log('current color ' + currentColor);

  // removes block
  $(this).remove();

  // updates and displays counters
  updateCounter(currentColor,-1);
  displayCounter(currentColor);
}

$(document).ready(onReady);
