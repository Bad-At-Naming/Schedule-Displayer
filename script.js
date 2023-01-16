function mod(n, m) { // modulo function, finds the remainder, used to make sure the top three 'selectors' loop back to all from the last option
  return ((n % m) + m) % m;
}

// Make a "filter_toggles" function. Note that this must be additive
var tabletime = {}

const TIMETABLE = {"Monday":[["12:00 pm 2:00 pm","Tribute to Mr Simon Glasson","Auditorium",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Academics","Misc"]]],"Tuesday":[["07:30 am 07:45 am","Special Assembly","Inner Courtyard",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Academics","Misc"]],["10:45 am 11:15 am","Football Team Practice - Girls","College Section Field",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Sports"]],["01:45 pm 03:00 om","First Aid Society Training Session: Cuts & Bandages","Lecture Theatre",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Society Events"]],["01:45 pm 03:30 pm","Indoor Rowing","Gymnasium",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Sports","Society Events"]],["01:45 pm 04:30 pm","Dramatica Council: Rehearsal for SY Play","Auditorium",["SY","Frere","Napier","Papworth","Streeton","Society Events"]],["02:00 pm 03:30 om","Sports Day Practice Session [Streeton]","College Section Field",["X","XI","FY","SY","Streeton","Sports"]],["03:30 pm 04:30 pm","Football Team Practice O&A Level Boys","College Section Field",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Sports"]]],"Wednesday":[["07:30 am 07:45 am","School Assembly","Inner Courtyard",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Academics"]],["10:45 am 11:15 am","Football Team Practice Girls","College Section Field",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Sports"]],["01:45 pm 03:30 pm","Indoor Rowing","Gymnasium",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Sports","Society Events"]],["01:45 pm 03:30 pm","Dramatica Council: Rehearsal for FY Play","Teaching Hall",["FY","Frere","Napier","Papworth","Streeton","Society Events"]],["02:00 pm 03:30 pm","Sports Day Practice Session [Napier]","College Section Field",["X","XI","FY","SY","Napier","Sports"]],["03:00 pm 06:45 pm","🌐 GRAMA Day 1 🌐","Auditorium",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Society Events","Misc"]],["03:30 pm 04:30 pm","Football Team Practice 0&A Level Boys","Auditorium",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Sports"]],["04:00 pm 05:30 pm","Dramatica Council: Rehearsal for SY Play","College Section Field",["SY","Frere","Napier","Papworth","Streeton","Society Events"]]],"Thursday":[["07:30 am 07:45 am","House Registration","Respective House Areas",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Academics","Misc"]],["10:45 am 11:15 am","Football Team Practice Girls","College Section Field",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Sports"]],["01:45 pm 02:30 pm","Extra Class: World Geography [X-B, XI-D, FY-A, SY-A]","Room S1 & S2",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Academics"]],["01:45 pm 03:30 pm","Indoor Rowing","Gymnasium",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Sports","Society Events"]],["01:45 pm 03:30 pm","Dramatica Council: Rehearsal for FY Play","Teaching Hall",["FY","Frere","Napier","Papworth","Streeton","Society Events"]],["01:45 pm 04:30 pm","Dramatica Council: Rehearsal for SY Play","Auditorium",["SY","Frere","Napier","Papworth","Streeton","Society Events"]],["02:00 pm 03:30 pm","Sports Day Practice Session [Papworth]","College Section Field",["X","XI","FY","SY","Papworth","Sports"]],["03:00 pm 06:15 pm","🌐 GRAMA Day 2 🌐","College Section",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Society Events","Misc"]],["03:30 pm 04:30 pm","Football Team Practice O&A Level Boys","College Section Field",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Sports"]]],"Friday":[["07:30 am 08:00 am","Frere House Assembly","Front Courtyard, Block G",["X","XI","FY","SY","Frere","Academics","Misc"]],["07:30 am 08:00 am","Napier House Assembly","AV Room",["X","XI","FY","SY","Napier","Academics","Misc"]],["07:30 am 08:00 am","Papworth House Assembly","Inner Courtyard, Block K",["X","XI","FY","SY","Papworth","Academics","Misc"]],["07:30 am 08:00 am","Streeton House Assembly","Inner Courtyard, Block G",["X","XI","FY","SY","Streeton","Academics","Misc"]],["12:00 pm 01:30 pm","Indoor Rowing","Gymnasium",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Sports","Society Events"]],["02:45 pm 03:30 pm","Extra Class: Chemistry X-D2","Online",["X","Frere","Napier","Papworth","Streeton","Academics"]],["03:00 pm 06:00 pm","🌐 GRAMA Day 3 🌐","College Section",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Society Events","Misc"]]],"Saturday":[["08:00 am 12:30 pm","💼🎓OGS Career Fair🎓💼","Auditorium",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Academics","Misc"]],["08:00 am 11:00 am","Dramatica Council: Rehearsal for FY Play","Teaching Hall",["FY","Frere","Napier","Papworth","Streeton","Society Events"]],["07:30 am 08:15 am","Sports Day Practice Session [Streeton]","College Section Field",["X","XI","FY","SY","Streeton","Sports"]],["08:15 am 09:00 am","Sports Day Practice Session [Frere]","College Section Field",["X","XI","FY","SY","Frere","Sports"]],["09:00 am 09:45 am","Sports Day Practice Session [Napier]","College Section Field",["X","XI","FY","SY","Napier","Sports"]],["09:45 am 10:30 am","Sports Day Practice Session [Papworth]","College Section Field",["X","XI","FY","SY","Papworth","Sports"]],["09:00 am 10:15 am","Extra Class: Literature FY-A&B","AV Room",["FY","Frere","Napier","Papworth","Streeton","Academics"]]],"Sunday":[]}

const DAYS = ["All", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const COLORS = ["#a9a9eb", "#dba2c6", "#d69696", "#f5a97d", "#fcd2a7",  "#f7d8c5", "#a57555", "#9ff4dc"];
const gCOLORS = ["#ffc7d7", "#e1b877", "#dedea4","#a5d3c0", "#c4d5ed" ]
const hCOLORS = ["#d6b983", "#e08580", "#687cfa", "#a4dff8", "#86b588"]
const TOGGLES = ["Society Events", "Academics", "Sports", "Misc", "All_t"]
const TOGGLE_COLORS = ["#d9ffc9", "#ff9e94","#b3d4e6", "#fff396", "#89ff95"]
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

function load() {
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
  
