function mod(n, m) {
  return ((n % m) + m) % m;
}

const TIMETABLE = {
  "Monday": [["Monday Grade 10 Event 1", "Monday Grade 10 Event Timing 1", "Monday Grade 10 Event Location 1", ["X", "Streeton"]], ["Monday Grade 10 Event 2", "Monday Grade 10 Event Timing 2", "Monday Grade 10 Event Location 2", ["X"]], ["Monday Grade XI Event", "Monday Grade XI Event Timings", "Monday Grade XI Event Location", ["XI"]], ["Monday First Year Event", "Monday First Year Event Timings", "Monday First Year Event Location", ["FY"]], ["Monday Second Year Event", "Monday Second Year Event Timings", "Monday Second Year Event Location", ["SY"]]],
  "Tuesday": [["Tuesday Grade 10 Event", "Tuesday Grade 10 Event Timing", "Tuesday Grade 10 Event Location", ["X", "Frere"]], ["Tuesday Grade XI Event", "Tuesday Grade XI Event Timings", "Tuesday Grade XI Event Location", ["XI"]], ["Tuesday First Year Event", "Tuesday First Year Event Timings", "Tuesday First Year Event Location", ["FY"]], ["Tuesday Second Year Event", "Tuesday Second Year Event Timings", "Tuesday Second Year Event Location", ["SY"]]],
  "Wednesday": [["Wednesday Grade 10 Event", "Wednesday Grade 10 Event Timing", "Wednesday Grade 10 Event Location", ["X", "Napier"]], ["Wednesday Grade XI Event", "Wednesday Grade XI Event Timings", "Wednesday Grade XI Event Location", ["XI"]], ["Wednesday First Year Event", "Wednesday First Year Event Timings", "Wednesday First Year Event Location", ["FY"]]],
  "Thursday": [["Thursday Grade 10 Event", "Thursday Grade 10 Event Timing", "Thursday Grade 10 Event Location", ["X", "Papworth"]], ["Thursday Grade XI Event", "Thursday Grade XI Event Timings", "Thursday Grade XI Event Location", ["XI"]], ["Thursday First Year Event", "Thursday First Year Event Timings", "Thursday First Year Event Location", ["FY"]]],
  "Friday": [["Friday Grade 10 Event", "Friday Grade 10 Event Timing", "Friday Grade 10 Event Location", ["X"]], ["Friday Grade XI Event", "Friday Grade XI Event Timings", "Friday Grade XI Event Location", ["XI"]]]
}
const DAYS = ["All", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const COLORS = ["#9f2858", "#e35c33", "#35713a", "#4053b0", "#8232a4", "#bd8f26"];
const gCOLORS = ["#9f2858", "#e35c33", "#35713a", "#4053b0", "#8232a4", "#bd8f26"];

var filters = [];
var selected_day = 0
var selected_grade = 0
var selected_house = 0

var filtered_timetable = {
"Monday": [],
"Tuesday": [],
"Wednesday": [],
"Thursday": [],
"Friday": []
}

function filter_grade(tbl) {
  var HOUSE_LIST = ["All Houses", "Streeton", "Frere", "Napier", "Papworth"]
  var grade_filters = filters.filter(x => !HOUSE_LIST.includes(x))
  var filtered_timetable = {
    "Monday": [],
    "Tuesday": [],
    "Wednesday": [],
    "Thursday": [],
    "Friday": []
  }
  if (grade_filters.includes("All_g")) {
    return tbl;
  }
  else{
    for (var i = 1; i < 6; i++) {
      for (var j = 0; j < tbl[DAYS[i]].length; j++) {
        var found = grade_filters.some(r => tbl[DAYS[i]][j][3].indexOf(r) >= 0)
        if (found) {
          filtered_timetable[DAYS[i]] = filtered_timetable[DAYS[i]].concat([tbl[DAYS[i]][j]])
        }
      }
    }
    return filtered_timetable
  }
}

function filter_house(tbl) {
  var GRADE_LIST = ["All_g","X", "XI", "FY", "SY"]
  var house_filters = filters.filter(x => !GRADE_LIST.includes(x))
  var filtered_timetable = {
    "Monday": [],
    "Tuesday": [],
    "Wednesday": [],
    "Thursday": [],
    "Friday": []
  }
  if (house_filters.includes("All Houses")) {
    return tbl;
  }
  else{
    for (var i = 1; i < 6; i++) {
      for (var j = 0; j < tbl[DAYS[i]].length; j++) {
        var found = house_filters.some(r => tbl[DAYS[i]][j][3].indexOf(r) >= 0)
        if (found) {
          filtered_timetable[DAYS[i]] = filtered_timetable[DAYS[i]].concat([tbl[DAYS[i]][j]])
        }
      }
    }
    return filtered_timetable
  }
}

function Clear() {

var table = document.getElementById("table-body");
var rowcount = table.rows.length;


for (var i = rowcount - 1; i >= 0; i--) {
  table.deleteRow(i);
}
}

function Add(day, clear) {
if (!clear) {

  Clear();
  var full_tbl = document.getElementById("events-table");

  var row = full_tbl.insertRow(0);
  row.classList.add('firstrow');
  var cell10 = row.insertCell(0);
  var cell20 = row.insertCell(1);
  var cell30 = row.insertCell(2);

  cell20.innerHTML = "Event";
  cell10.innerHTML = "Time";
  cell30.innerHTML = "Location";
  document.getElementById("daytext").style.backgroundColor = COLORS[day]
  document.getElementById("day_lb").style.backgroundColor = COLORS[day]
  document.getElementById("day_rb").style.backgroundColor = COLORS[day]
  var table = document.getElementById("table-body");
  var myStringArray = filtered_timetable[DAYS[day]];
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

  var table = document.getElementById("table-body");
  var myStringArray = filtered_timetable[DAYS[day]];
  var arrayLength = myStringArray.length;

  for (var i = 0; i < arrayLength; i++) {

    var row = table.insertRow(table.rows.length);
    if (i % arrayLength == 0) {
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
selected_day = day;
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

cell2.innerHTML = "Day";
cell1.innerHTML = "Event";
cell3.innerHTML = "Time";
cell4.innerHTML = "Location";
for (var i = 1; i < 6; i++) {

  Add(i, true);
}
selected_day = a
document.getElementById("daytext").style.backgroundColor = COLORS[0]
document.getElementById("day_lb").style.backgroundColor = COLORS[0]
document.getElementById("day_rb").style.backgroundColor = COLORS[0]
}

function load() {
var date = new Date();
var day = date.getDay();
if (day == 0 || day == 5 || day == 6) {
  Clear()
  All(0)
  Add(1);
  var text = document.getElementById("daytext")
  text.innerHTML = DAYS[1]
  swap_grade(0)
  swap_house(0)
}
else {
  Clear()
  All(0)
  Add(day);
  var text = document.getElementById("daytext")
  text.innerHTML = DAYS[day].slice(0,3)
  swap_grade(0)
  swap_house(0)
}

}

function swap_grade(grade) {
var GRADE_LIST = ["All_g","X", "XI", "FY", "SY"]
filters = filters.filter(x => !GRADE_LIST.includes(x))

if (grade == 0) {
  filters = filters.concat(["All_g", "X", "XI", "FY", "SY"])
}
else {
  filters = filters.concat(GRADE_LIST[grade])
}
filtered_timetable = filter_grade(TIMETABLE)
filtered_timetable = filter_house(filtered_timetable)
Clear()
if (selected_day == 0) {
  All(0)
}
else {
  Add(selected_day)
}


document.getElementById("gradetext").style.backgroundColor = gCOLORS[grade]
document.getElementById("grade_lb").style.backgroundColor = gCOLORS[grade]
document.getElementById("grade_rb").style.backgroundColor = gCOLORS[grade]
console.log(selected_grade)
}


function Shift_Day(a) {
  var day = selected_day
  day += a
  day = mod(day,6)
  if (day == 0) {
    All(0)
  }
  else {
    Add(day)
  }

  var text = document.getElementById("daytext")
  text.innerHTML = DAYS[day].slice(0,3)
}

function Shift_Grade(a) {
  selected_grade += a
  var grade = selected_grade
  grade = mod(grade,5)
  swap_grade(grade)

  var text = document.getElementById("gradetext")
  text.innerHTML = ["All Grades","X", "XI", "FY", "SY"][grade]
}

function Shift_House(a) {
  selected_house += a
  var house = selected_house
  house = mod(house,5)
  swap_house(house)

  var text = document.getElementById("housetext")
  text.innerHTML = ["All Houses","Frere", "Napier", "Papworth", "Streeton"][house]
}

function swap_house(house) {
  var HOUSE_LIST = ["All Houses","Frere", "Napier", "Papworth", "Streeton"]
  filters = filters.filter(x => !HOUSE_LIST.includes(x))
  
  if (house == 0) {
    filters = filters.concat(["All Houses","Frere", "Napier", "Papworth", "Streeton"])
  }
  else {
    filters = filters.concat(HOUSE_LIST[house])
  }
  filtered_timetable = filter_house(TIMETABLE)
  filtered_timetable = filter_grade(filtered_timetable)
  Clear()
  if (selected_day == 0) {
    All(0)
  }
  else {
    Add(selected_day)
  }
  
  
  document.getElementById("housetext").style.backgroundColor = gCOLORS[house]
  document.getElementById("house_lb").style.backgroundColor = gCOLORS[house]
  document.getElementById("house_rb").style.backgroundColor = gCOLORS[house]
  }
  
