var table = parseInt(prompt("Enter the unit of the table: ")); // Recieves the unit of table from the user
if (isNaN(table)){ //Setting to the default value of 0 if the input is invalid
  table = 0;
}

var operator = 'multiplication'; // Type of calculation
var msg = "<h2>Multiplication Table</h2>"; // Message heading

// Do multiplication ten times
for (let i = 1; i <11; i++) {
  msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
}

// Write the entire times table into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;
