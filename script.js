function mod(n, m) { // modulo function, finds the remainder, used to make sure the top three 'selectors' loop back to all from the last option
  return ((n % m) + m) % m;
}

// Make a "filter_toggles" function. Note that this must be additive
var tabletime = {}
$.getJSON("https://bad-at-naming.github.io/Schedule-Displayer/timetable.json", load)

const DAYS = ["All", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const COLORS = ["#d9a7fc", "#fcd2a7", "#9c9cff", "#ff9375", "#ff9cdb", "#ff8040", "#b5deff", "#aaffa1"];
const gCOLORS = ["#ff714a", "#1f9168", "#ffe23d", "#1eabe3", "#cc5cc3"]
const hCOLORS = ["#f5b642", "#ff4242", "#3370ff", "#66d1ff", "#008c1a"]
const TOGGLES = ["Society Events", "Academics", "Sports", "Misc", "All_t"]
const TOGGLE_COLORS = ["#d9ffc9", "#ff9e94","#b3d4e6", "#fff396", "#2ad449"]
const GRADE_LIST = ["All_g","X", "XI", "FY", "SY"]
const HOUSE_LIST = ["All Houses", "Frere", "Napier", "Papworth", "Streeton"]

const COLOR_TOGGLE_MAP = {
  "Society Events": TOGGLE_COLORS[0],
  "Academics": TOGGLE_COLORS[1],
  "Sports": TOGGLE_COLORS[2],
  "Misc": TOGGLE_COLORS[3],
}

var filters = [];
var selected_day = 0
var selected_grade = 0
var selected_house = 0

var filtered_timetable = {
"Monday": [],
"Tuesday": [],
"Wednesday": [],
"Thursday": [],
"Friday": [], 
"Saturday": [],
"Sunday": []
}

function filter_toggle(tbl) { // Creates a new timetable after filters are updated
  toggle_filters = filters.filter(x => !HOUSE_LIST.includes(x))
  toggle_filters = toggle_filters.filter(x => !GRADE_LIST.includes(x))
  var filtered_timetable = {
    "Monday": [],
    "Tuesday": [],
    "Wednesday": [],
    "Thursday": [],
    "Friday": [], 
    "Saturday": [],
    "Sunday": []
  }
  
  for (var i = 1; i < 8; i++) {
    for (var j = 0; j < tbl[DAYS[i]].length; j++) {
      var found = toggle_filters.some(r => tbl[DAYS[i]][j][3].indexOf(r) >= 0)
      if (found) {
        filtered_timetable[DAYS[i]] = filtered_timetable[DAYS[i]].concat([tbl[DAYS[i]][j]])
      }
    }
  }
  return filtered_timetable
}



function filter_grade(tbl) { // Creates a new timetable after grades are updated

  var TOGGLES_LIST = ["Society Events", "Academics", "Sports", "Misc"]
  var grade_filters = filters.filter(x => !HOUSE_LIST.includes(x))
  grade_filters = grade_filters.filter(x => !TOGGLES_LIST.includes(x))
  var filtered_timetable = {
    "Monday": [],
    "Tuesday": [],
    "Wednesday": [],
    "Thursday": [],
    "Friday": [], 
    "Saturday": [],
    "Sunday": []
  }
  if (grade_filters.includes("All_g")) {
    return tbl;
  }
  else{
    for (var i = 1; i < 8; i++) {
      for (var j = 0; j < tbl[DAYS[i]].length; j++) {
        var found = grade_filters.some(r => tbl[DAYS[i]][j][3].indexOf(r) >= 0)
        if (found) {
          filtered_timetable[DAYS[i]] = filtered_timetable[DAYS[i]].concat([tbl[DAYS[i]][j]])
        }
      }
    }
  }
  return filtered_timetable
}

function filter_house(tbl) { // Creates a new timetable after houses are updated
  var GRADE_LIST = ["All_g","X", "XI", "FY", "SY"]
  var TOGGLES_LIST = ["Society Events", "Academics", "Sports", "Misc"]
  var house_filters = filters.filter(x => !GRADE_LIST.includes(x)) // Removes all grades from filters so list only includes houses
  house_filters = house_filters.filter(x => !TOGGLES_LIST.includes(x)) // Removes all toggles from filters so list only includes houses
  var filtered_timetable = { //Creates a blank timetable
    "Monday": [],
    "Tuesday": [],
    "Wednesday": [],
    "Thursday": [],
    "Friday": [], 
    "Saturday": [],
    "Sunday": []
  }
  if (house_filters.includes("All Houses")) {
    return tbl; // Would change nothing if no houses filtered
  }
  else{
    for (var i = 1; i < 8; i++) { // Removes all the events not for a specifc house
      for (var j = 0; j < tbl[DAYS[i]].length; j++) {
        var found = house_filters.some(r => tbl[DAYS[i]][j][3].indexOf(r) >= 0)
        if (found) {
          filtered_timetable[DAYS[i]] = filtered_timetable[DAYS[i]].concat([tbl[DAYS[i]][j]])
        }
      }
    }
  }
  return filtered_timetable
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

  cell20.innerHTML = "Time";
  cell10.innerHTML = "Event";
  cell30.innerHTML = "Location";
  document.getElementById("daytext").style.backgroundColor = COLORS[day]
  document.getElementById("day_lb").style.backgroundColor = COLORS[day]
  document.getElementById("day_rb").style.backgroundColor = COLORS[day]
  var table = document.getElementById("table-body");
  var myStringArray = filtered_timetable[DAYS[day]];
  console.log(myStringArray)
  var arrayLength = myStringArray.length;
  for (var i = 0; i < arrayLength; i++) {
    var row = table.insertRow(table.rows.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    
    cell1.style.background = COLOR_TOGGLE_MAP[myStringArray[i][3].filter(x => !GRADE_LIST.includes(x)).filter(x => !HOUSE_LIST.includes(x))[0]]; 
    cell2.style.background = COLOR_TOGGLE_MAP[myStringArray[i][3].filter(x => !GRADE_LIST.includes(x)).filter(x => !HOUSE_LIST.includes(x))[0]]; 
    cell3.style.background = COLOR_TOGGLE_MAP[myStringArray[i][3].filter(x => !GRADE_LIST.includes(x)).filter(x => !HOUSE_LIST.includes(x))[0]]; 

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

    // Proof of Concept,  when an event is under two filters, the "first" one decides color (first in google sheet)
    cell1.style.background = COLOR_TOGGLE_MAP[myStringArray[i][3].filter(x => !GRADE_LIST.includes(x)).filter(x => !HOUSE_LIST.includes(x))[0]]; 
    cell2.style.background = COLOR_TOGGLE_MAP[myStringArray[i][3].filter(x => !GRADE_LIST.includes(x)).filter(x => !HOUSE_LIST.includes(x))[0]]; 
    cell3.style.background = COLOR_TOGGLE_MAP[myStringArray[i][3].filter(x => !GRADE_LIST.includes(x)).filter(x => !HOUSE_LIST.includes(x))[0]]; 


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

cell2.innerHTML = "Event";
cell1.innerHTML = "Day";
cell3.innerHTML = "Time";
cell4.innerHTML = "Location";
for (var i = 1; i < 8; i++) {

  Add(i, true);
}
selected_day = a
document.getElementById("daytext").style.backgroundColor = COLORS[0]
document.getElementById("day_lb").style.backgroundColor = COLORS[0]
document.getElementById("day_rb").style.backgroundColor = COLORS[0]
}

function load(json) {
  TIMETABLE = json
  var date = new Date();
  var day = date.getDay();
  if (day == 0) {
    day = 7
  }
    Clear()
    All(0)
    Add(day);
    var text = document.getElementById("daytext")
    text.innerHTML = DAYS[day].slice(0,3)
    swap_grade(0)
    swap_house(0)
    Toggle(4)
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

filtered_timetable = filter_house(TIMETABLE)
filtered_timetable = filter_toggle(filtered_timetable)
filtered_timetable = filter_grade(filtered_timetable)
Clear()
if (selected_day == 0) {
  All(0)
}
else {
  Add(selected_day)
}


document.getElementById("gradetext").style.backgroundColor = gCOLORS[grade]
/*
if (grade == 4) {
  document.getElementById("gradetext").style.color = "#000000";
  document.getElementById("grade_lb").style.color = "#000000"
  document.getElementById("grade_rb").style.color = "#000000"
}
else {
  document.getElementById("gradetext").style.color = "#ffffff";
  document.getElementById("grade_lb").style.color = "#ffffff"
  document.getElementById("grade_rb").style.color = "#ffffff"
} 
*/
document.getElementById("grade_lb").style.backgroundColor = gCOLORS[grade]
document.getElementById("grade_rb").style.backgroundColor = gCOLORS[grade]
}


function Shift_Day(a) {
  var day = selected_day
  day += a
  day = mod(day,8)
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
  text.innerHTML = ["All Houses", "Frere", "Napier", "Papworth", "Streeton"][house]
}

function swap_house(house) {

  filters = filters.filter(x => !HOUSE_LIST.includes(x))
  
  if (house == 0) {
    filters = filters.concat(["All Houses", "Frere", "Napier", "Papworth", "Streeton"])
  }
  else {
    filters = filters.concat(HOUSE_LIST[house])
  }
  filtered_timetable = filter_grade(TIMETABLE)
  filtered_timetable = filter_toggle(filtered_timetable)
  filtered_timetable = filter_house(filtered_timetable)
  Clear()
  if (selected_day == 0) {
    All(0)
  }
  else {
    Add(selected_day)
  }
  
  
  document.getElementById("housetext").style.backgroundColor = hCOLORS[house]
/*
  if (house == 0 || house==3) {
    document.getElementById("housetext").style.color = "#000000";
    document.getElementById("house_lb").style.color = "#000000"
    document.getElementById("house_rb").style.color = "#000000"
  }
  else {
    document.getElementById("housetext").style.color = "#ffffff";
    document.getElementById("house_lb").style.color = "#ffffff"
    document.getElementById("house_rb").style.color = "#ffffff"
  }
*/
  document.getElementById("house_lb").style.backgroundColor = hCOLORS[house]
  document.getElementById("house_rb").style.backgroundColor = hCOLORS[house]
}

function Toggle(n) {

  filters = filters.filter(x => !TOGGLES.includes(x))
  for (var i = 0; i < 5; i++) {
    document.getElementById(TOGGLES[i]).style.backgroundColor="#888888" //On to Off [BOTH]
    if (n > 3) {
      document.getElementById(TOGGLES[i]).style.backgroundColor=TOGGLE_COLORS[i] //Off to On
      filters = filters.concat(TOGGLES[i])
  }
  else {
    document.getElementById(TOGGLES[n]).style.backgroundColor=TOGGLE_COLORS[n] //Off to On
    filters = filters.filter(x => !TOGGLES.includes(x))
    filters = filters.concat(TOGGLES[n])

  }
}

  filtered_timetable = filter_house(TIMETABLE)
  filtered_timetable = filter_grade(filtered_timetable)
  filtered_timetable = filter_toggle(filtered_timetable)
  Clear()
  if (selected_day == 0) {
    All(0)
  }
  else {
    Add(selected_day)
  }  
}
  
