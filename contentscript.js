// add bubble to the top of the page
//var bubbleDOM = document.createElement('div');
//bubbleDOM.setAttribute('class', 'selection_bubble');
//document.body.appendChild(bubbleDOM);
var speechBubble = document.createElement('div');
speechBubble.setAttribute('class', 'triangle-isosceles');
document.body.appendChild(speechBubble);


var script = document.createElement('script');
script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);


// listen to mouseup DOM events
document.addEventListener('mouseup', function (e) {
  var selection = window.getSelection().toString();
  if (selection.length > 0) {
    renderBubble(e.clientX, e.clientY, selection);
  }
}, false);

// close the bubble when we click on the screen
document.addEventListener('mousedown', function (e) {
  //bubbleDOM.style.visibility = 'hidden';
    speechBubble.style.visibility = 'hidden';
}, false);

// move that bubble to the appropriate location
function renderBubble(mouseX, mouseY, selection) {
  //bubbleDOM.innerHTML = selection;
  //bubbleDOM.style.top = mouseY + 'px';
  //bubbleDOM.style.left = mouseX + 'px';
  //bubbleDOM.style.visibility = 'visible';

  speechBubble.innerHTML = selection;
  /*var bubbleHeight = $('#speechBubble').height();
  speechBubble.style.top = (mouseY - bubbleHeight) + 'px';*/
  speechBubble.style.top = mouseY  + 'px';
  speechBubble.style.left = mouseX + 'px';
  speechBubble.style.position = 'fixed';
  alert("mouseX:" + mouseX + " mouseY: " + mouseY);
  speechBubble .style.visibility = 'visible';
}
