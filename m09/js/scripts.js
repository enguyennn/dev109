var  mybutton = document.querySelector("button");
mybutton.addEventListener("click", function(event) {


var element = document.getElementsByTagName("div");
for (index = element.length - 1; index >= 0; index--) {
    element[index].parentNode.removeChild(element[index]);
}

// Let us stop the propagation of events

event.stopPropagation();
  });
  addEventListener("click", function(event) {
    // Prevents the inputs from having a dot appear on them when clicked 
    if (event.target.tagName === "SELECT" || event.target.tagName === "INPUT" || event.target.tagName === "BUTTON"){
      return;
    }

    var color = document.getElementById("dotColor").value;
    var size = document.getElementById("dotSize").value;

    var dot = document.createElement("div");
    dot.className = "dot";

    // Dynamically sets the color and size based on the user inputs
    dot.style.backgroundColor = color.toLowerCase();
    dot.style.width = size + "px";
    dot.style.height = size + "px";

    // Keeps the dot centered with the new size
    dot.style.left = (event.pageX - size/2) + "px";
    dot.style.top = (event.pageY - size/2) + "px";
    
    document.body.appendChild(dot);
  });