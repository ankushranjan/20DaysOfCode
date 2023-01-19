var draggableElement = document.getElementById("draggable-element");
draggableElement.addEventListener("mousedown", startDrag);
document.addEventListener("mousemove", drag);
document.addEventListener("mouseup", stopDrag);

var offset = [0,0];
var isDown = false;

function startDrag(e) {
  isDown = true;
  offset = [
    draggableElement.offsetLeft - e.clientX,
    draggableElement.offsetTop - e.clientY
  ];
}

function drag(e) {
  e.preventDefault();
  if (isDown) {
    draggableElement.style.left = (e.clientX + offset[0]) + 'px';
    draggableElement.style.top  = (e.clientY + offset[1]) + 'px';
  }
}

function stopDrag() {
  isDown = false;
}
