// add bubble to the top of the page
//var bubbleDOM = document.createElement('div');
//bubbleDOM.setAttribute('class', 'selection_bubble');
//document.body.appendChild(bubbleDOM);
var speechBubble = document.createElement('div');
speechBubble.setAttribute('class', 'triangle-isosceles');
document.body.appendChild(speechBubble);

function createTable() {
  var body = document.body,
      tbl = document.createElement('table');
  tbl.style.width = '350px';
  tbl.style.height = '200px';
  tbl.style.border = "1px solid black";

  for(var i = 0; i < 4; i++) {
    var tr = tbl.insertRow();
    for(var j = 0; j < 6; j++) {
      if(i == 3 && j == 6) {
        break;
      } else {
        var td = tr.insertCell();
        td.appendChild(document.createTextNode('Cell'));
        td.style.border = '1px solid black';
        if(i == 1 && j == 6) {
          td.setAttribute('rowSpan', '6');
        }
      }
    }
  }
  speechBubble.appendChild(tbl);
}

// listen to mouseup DOM events
document.addEventListener('mouseup', function (e) {
  var selection = window.getSelection().toString();
  if (selection.length > 0) {
    renderBubble(e.clientX, e.clientY, selection);
  }
  createTable();
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
