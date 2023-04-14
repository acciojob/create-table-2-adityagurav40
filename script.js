function createTable() {
    //Write your code here
	  // Get number of rows from user input
  var numRows = prompt("Input number of rows");
  
  // Get number of columns from user input
  var numCols = prompt("Input number of columns");
  
  // Get table element
  var table = document.getElementById("myTable");
  
  // Create rows and cells in the table
  for (var i = 0; i < numRows; i++) {
    var newRow = table.insertRow(i);
    
    for (var j = 0; j < numCols; j++) {
      var newCell = newRow.insertCell(j);
      newCell.innerHTML = "Row-" + (i) + " Column-" + (j);
    }
  }
  
}
