//Function to add user-inputted item to the list
function addItem(item) {
    // Create a new element and store it in a variable.
    var newEl = document.createElement('li');
    
    
    // Create a text node with the item name and store it in a variable.
    var newText = document.createTextNode(item);
    
    // Attach the new text node to the new element.
    newEl.appendChild(newText);
  
    // Find the position where the new element should be added.
    var position = document.getElementsByTagName('ul')[0];
  
    // Insert the new element into its position.
    position.appendChild(newEl);
    
  }