// Get references to the tbody element, input field and button
var $tbody = document.querySelector('tbody');
var $dateInput = document.querySelector('#date');
var $searchBtn = document.querySelector('#search');

//used https://github.com/kalibbrayer/JavaScript-and-DOM-Manipulation as a reference

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener('click', handleSearchButtonClick);

// Assign the data from `data.js` to a descriptive variable
var filteredDates = data;

function renderTable() {
$tbody.innerHTML = '';
  // the line above repeatedly gives an error "Cannot set property 'innerHTML' of null"
  // i dont know what this means or why it doesn't work. Because of this the rest of the 
  // program doesn't work either. 
  for (var i = 0; i < filteredDates.length; i++) {
      // Get get the current address object and its fields
      var report = filteredDates[i];
      var fields = Object.keys(report);
      // Create a new row in the tbody, set the index to be i + startingIndex
      var $row = $tbody.insertRow(i);
      for (var j = 0; j < fields.length; j++) {
        // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
        var field = fields[j];
        var $cell = $row.insertCell(j);
        $cell.innerText = report[field];
      }
    }
  }

  function handleSearchButtonClick() {
    var filterDate = $dateInput.value;
  // filteredDate = Data.filter(function(address) {
  
    filteredDates = filteredDates.filter(function(report) {
      var addressdate = data.datetime;

      return addressdate === filterDate;
    });
  renderTable();
}
  
  // Render the table for the first time on page load
renderTable();