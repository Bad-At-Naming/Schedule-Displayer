const TIMETABLE = {
    "Monday": [["Monday Event1", "Monday Time1", "Monday Location1", ["School", "XI", "Streeton"]], ["Monday Event2", "Monday Time2", "Monday Location2", []], ["Monday Event3", "Monday Time3", "Monday Location3", []], ["Monday Event4", "Monday Time4", "Monday Location4", ["School", "XI", "Streeton"]]],
    "Tuesday": [["Tuesday Event1", "Tuesday Time1", "Tuesday Location1", ["School", "XI", "Streeton"]], ["Tuesday Event2", "Tuesday Time2", "Tuesday Location2", []], ["Tuesday Event3", "Tuesday Time3", "Tuesday Location3", []]],
    "Wednesday": [["Wednesday Event1", "Wednesday Time1", "Wednesday Location1", ["School", "XI", "Streeton"]], ["Wednesday Event2", "Wednesday Time2", "Wednesday Location2", []], ["Wednesday Event3", "Wednesday Time3", "Wednesday Location3", []]],
    "Thursday": [["Thursday Event1", "Thursday Time1", "Thursday Location1", ["School", "XI", "Streeton"]], ["Thursday Event2", "Thursday Time2", "Thursday Location2", []], ["Thursday Event3", "Thursday Time3", "Thursday Location3", []]],
    "Friday": [["Friday Event1", "Friday Time1", "Friday Location1", ["School", "XI", "Streeton"]], ["Friday Event2", "Friday Time2", "Friday Location2", []]]
}
const DAYS = ["All", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const COLORS = ["#9f2858", "#e35c33", "#bd8f26", "#35713a","#4053b0", "#8232a4"];

function Clear() {

  var table = document.getElementById("table-body");
  var rowcount = table.rows.length;
  

  for (var i = rowcount - 1; i >= 0; i--) {
    table.deleteRow(i);
  }
}
  
var filters = ["School", "XI", "Streeton", "Society", "Sport"]
  
function Add(day, clear) {
  if (!clear) {

    Clear();
    var full_tbl = document.getElementById("events-table");

    var row = full_tbl.insertRow(0);
    row.classList.add('firstrow');
    var cell10 = row.insertCell(0);
    var cell20 = row.insertCell(1);
    var cell30 = row.insertCell(2);

    cell10.innerHTML = "Event";
    cell20.innerHTML = "Time";
    cell30.innerHTML = "Location";
    document.getElementById(DAYS[day]).style.backgroundColor = COLORS[day]
    for (var i = 0; i < 6; i++) {
      if (i != day) {
        document.getElementById(DAYS[i]).style.backgroundColor = '#777777'
      }
    }
      var table = document.getElementById("table-body");
      var myStringArray = TIMETABLE[DAYS[day]];
      var arrayLength = myStringArray.length;
    for (var i = 0; i < arrayLength; i++) {
      var row = table.insertRow(table.rows.length);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);

      cell1.innerHTML = myStringArray[i][0];
      cell2.innerHTML = myStringArray[i][1];
      cell3.innerHTML = myStringArray[i][2];

      }
    
  }

  else {
    document.getElementById("All").style.backgroundColor = COLORS[0]
    for (var i = 1; i < 6; i++) {
      document.getElementById(DAYS[i]).style.backgroundColor = '#777777'
    }

  var table = document.getElementById("table-body");
  var myStringArray = TIMETABLE[DAYS[day]];
  var arrayLength = myStringArray.length;

    for (var i = 0; i < arrayLength; i++) {

        var row = table.insertRow(table.rows.length);
        if (i%arrayLength == 0) {
          var cell4 = row.insertCell(0);
          cell4.rowSpan = arrayLength
          cell4.innerHTML = DAYS[day];
          var cell1 = row.insertCell(1);
          var cell2 = row.insertCell(2);
          var cell3 = row.insertCell(3);

        }

        else {          
          var cell1 = row.insertCell(0);
          var cell2 = row.insertCell(1);
          var cell3 = row.insertCell(2);
        }

        cell1.innerHTML = myStringArray[i][0];
        cell2.innerHTML = myStringArray[i][1];
        cell3.innerHTML = myStringArray[i][2];

    }
  }
}
  

  
function All(a) {
  Clear();
  var table = document.getElementById("events-table");
  var rowcount = table.rows.length;
  for (var i = rowcount - 1; i >= 0; i--) {
    table.deleteRow(i);
  }
  var row = table.insertRow(0);
  row.classList.add('firstrow');
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);

  cell1.innerHTML = "Day";
  cell2.innerHTML = "Event";
  cell3.innerHTML = "Time";
  cell4.innerHTML = "Location";
  for (var i = 1; i < 6; i++) {
    
    Add(i,true);
  }
}
 
function load() {
  var date = new Date();
  var day = date.getDay();
  if (day ==0 ||day == 5 || day == 6) {
    Add(1);
  }
  else {
    Clear()
    All()
    Add(day);
  }
}