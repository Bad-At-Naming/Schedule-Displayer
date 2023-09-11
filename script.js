//$.getJSON("https://bad-at-naming.github.io/Schedule-Displayer/timetable.json", load); 

function mod(n, m) { // modulo function, finds the remainder, used to make sure the top three 'selectors' loop back to all from the last option
  return ((n % m) + m) % m;
}
  

function mod(n, m) { // modulo function, finds the remainder, used to make sure the top three 'selectors' loop back to all from the last option
  return ((n % m) + m) % m;
}
  
var tabletime = {}

const TIMETABLE = {"Monday":[["06:45 am - 07:00 am","Basketball Practice O Level Boys Napier","Basketball Court",["X","XI","Napier","Sports"]],["06:45 am - 07:00 am","Netball Practice A Level Girls Frere","Netball Court",["FY","SY","Frere","Sports"]],["06:45 am - 07:00 am","Football Practice A Level Boys Frere","College Section Field",["FY","SY","Frere","Sports"]],["07:00 am - 07:15 am","Basketball Practice O Level Boys Streeton","Basketball Court",["X","XI","Streeton","Sports"]],["07:00 am - 07:15 am","Netball Practice A Level Girls Papworth","Netball Court",["FY","SY","Papworth","Sports"]],["07:00 am - 07:15 am","Football Practice A Level Boys • Papworth","College Section Field",["FY","SY","Papworth","Sports"]],["07:30 am - 08:20 pm - ","Zero Period Test","College Section",["X","XI","SY","Frere","Napier","Papworth","Streeton","Academics"]],["07:30 am - 07:45 am","School Assembly","College Section",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Misc"]],["07:45 am - 01:30 pm - ","Classes","",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Academics"]],["10:45 am - 11:15 am","Break","College Section",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Misc"]],["10:45 am - 11:15 am","Basketball Team Practice O Level Girls","Basketball Court",["X","XI","Frere","Napier","Papworth","Streeton","Sports"]],["10:45 am - 11:15 am","Inter-House Table Tennis Trials O Level Girls Streeton","Table Tennis Arena",["X","XI","Streeton","Sports"]],["12:00 pm -  02:00 pm","Practical [Chemistry FY [A1, A2 &A3]","Chemistry Lab 1, 2 &3",["FY","Frere","Napier","Papworth","Streeton","Academics"]],["01:30 pm -  03:30 pm","Indoor Rowing","Gymnasium",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Sports","Society Events"]],["01:45 pm -  02:30 pm","Girls Swimming Classes","Swimming Pool",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Sports","Society Events"]],["01:45 pm -  02:45 pm","Inter-House Basketball Tournament O Level Boys Streeton vs. Napier","Basketball Court",["X","XI","Napier","Streeton","Sports"]],["02:00 pm -  03:00 pm","Inter House Football Tournament A Level Boys Papworth vs. Frere","College Section Field",["X","XI","Frere","Academics","Sports"]],["02:45 pm -  03:30 pm","Boys Swimming Classes","Swimming Pool",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Sports","Society Events"]]],"Tuesday":[["06:45 am 07:00 am","Basketball Practice O Level Boys Papworth","Basketball Court",["X","XI","Papworth","Sports"]],["06:45 am 07:00 am","Netball Practice A Level Girls Streeton","Netball Court",["FY","SY","Streeton","Sports"]],["06:45 am 07:00 am","Football Practice A Level Boys Streeton","College Section Field",["FY","SY","Streeton","Sports"]],["07:00 am 07:15 am","Basketball Practice O Level Boys Frere","Basketball Court",["X","XI","Frere","Sports"]],["07:00 am 07:15 am","Netball Practice A Level Girls Napier","Netball Court",["FY","SY","Napier","Sports"]],["07:00 am 07:15 am","Football Practice A Level Boys Napier","College Section Field",["FY","SY","Napier","Sports"]],["07:30 am 08:20 pm","Zero Period Test","College Section",["X","XI","SY","Frere","Napier","Papworth","Streeton","Academics"]],["07:30 am 07:45 am","House Registration","",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Misc"]],["07:30 am 07:45 am","Classes","",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Academics"]],["07:45 am 01:30 pm","Break","College Section",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Misc"]],["10:45 am 11:15 am","Basketball Team Practice O Level Girls","Basketball Court",["X","XI","Frere","Napier","Papworth","Streeton","Sports"]],["10:45 am 11:15 am","Inter-House Table Tennis Trials O Level Girls Frere","Table Tennis Arena",["X","XI","Frere","Sports"]],["12:00 pm 02:00 pm","Practical [Chemistry FYB1, B2 & B3]","Chemistry Lab 1, 2 &3",["FY","Frere","Napier","Papworth","Streeton","Academics"]],["01:30 pm 03:30 pm","Indoor Rowing","Gymnasium",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Sports","Society Events"]],["01:45 pm 02:45 pm","Inter-House Basketball Tournament O Level Boys Free vs. Papworth","Basketball Court",["X","XI","Frere","Papworth","Sports"]],["01:45 pm 02:30 pm","Boys Swimming Classes","Swimming Pool",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Sports","Society Events"]],["02:45 pm 03:30 pm","Girls Swimming Classes","Swimming Pool",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Sports","Society Events"]],["02:00 pm 03:00 pm","Inter House Football Tournament A Level Boys Streeton vs. Napier","College Section Field",["FY","SY","Napier","Streeton","Sports"]]],"Wednesday":[["06:45 am 07:15 am","Basketball Team Practice O Level Girls","Basketball Court",["X","XI","Frere","Napier","Papworth","Streeton","Sports"]],["07:30 am 08:20 pm","Zero Period Test","College Section",["X","XI","SY","Frere","Napier","Papworth","Streeton","Academics"]],["07:30 am 07:45 am","School Assembly","College Section",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Misc"]],["07:45 am 01:30 pm","Classes","College Section",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Academics"]],["10:45 am 11:15 am","Break","College Section",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Misc"]],["10:45 am 11:15 am","Inter-House Table Tennis Trials O Level Girls Napier","Table Tennis Arena",["X","XI","Napier","Sports"]],["12:00 pm 02:00 pm","Practical [Biology FYC1, C2 & C3]","Biology Lab 1, 2 &3",["FY","Frere","Napier","Papworth","Streeton","Academics"]],["01:30 pm 03:30 pm","Indoor Rowing","Gymnasium",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Sports","Society Events"]],["01:40 pm 02:40 pm","Peer Tutoring Society: Introductory Session","Conference Room",["FY","Frere","Napier","Papworth","Streeton","Academics","Society Events"]],["01:45 pm 02:30 pm","Girls Swimming Classes","Swimming Pool",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Sports","Society Events"]],["01:45 pm 02:45 pm","Inter-House Basketball Tournament O Level Boys Papworth vs. Napier","Basketball Court",["X","XI","Napier","Papworth","Sports"]],["02:00 pm 03:00 pm","Inter House Football Tournament A Level Boys Streeton Frere","College Section Field",["FY","SY","Frere","Streeton","Sports"]],["02:45 pm 03:30 pm","Boys Swimming Classes","Swimming Pool",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Sports","Society Events"]]],"Thursday":[["06:45 am 07:15 am","Basketball Team Practice O Level Girls","Basketball Court",["X","XI","Frere","Napier","Papworth","Streeton","Sports"]],["07:30 am 08:20 pm","Zero Period Test","College Section",["X","XI","SY","Frere","Napier","Papworth","Streeton","Academics"]],["07:30 am 07:45 am","House Registration","",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Misc"]],["07:45 am 01:30 pm","Classes","",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Academics"]],["10:45 am 11:15 am","Break","College Section",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Misc"]],["10:45 am 11:15 am","Inter-House Table Tennis Trials O Level Girls Papworth","Table Tennis Arena",["X","XI","Papworth","Sports"]],["12:00 pm 02:00 pm","Practical [Biology FYD1 & D2]","Biology Lab 1 &3",["FY","Frere","Napier","Papworth","Streeton","Academics"]],["01:30 pm 03:30 pm","Indoor Rowing","Gymnasium",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Sports","Society Events"]],["01:45 pm 02:30 pm","MUN Society: Introductory Session","Lecture Theatre",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Academics","Society Events","Misc"]],["01:45 pm 02:30 pm","Swimming Society: Boys Training","Swimming Pool",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Sports","Society Events"]],["01:45 pm 02:45 pm","Inter-House Basketball Tournament O Level Boys Free vs. Streeton","Basketball Court",["X","XI","Frere","Streeton","Sports"]],["02:00 pm 03:00 pm","Inter House Football Tournament A Level Boys Papworth vs. Napier","College Section Field",["FY","SY","Napier","Papworth","Sports"]],["02:45 pm 03:30 pm","Swimming Society: Girls Training","Swimming Pool",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Sports","Society Events"]]],"Friday":[["","No House Assemblies Special Timetable to be followed for all Year Groups","",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Academics","Misc"]],["06:45 am 07:15 am","Basketball Team Practice O Level Girls","College Section",["X","XI","Frere","Napier","Papworth","Streeton","Sports"]],["07:30 am 08:20 am","Zero Period: Islamiyat / B.K Test Year X","College Section",["X","XI","SY","Frere","Napier","Papworth","Streeton","Academics"]],["07:30 am 08:20 am","Zero Period: Option A Test Year XI","College Section",["X","XI","SY","Frere","Napier","Papworth","Streeton","Academics"]],["07:55 am 11:15 am","Classes per Special Timetable","Conference Room",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Academics"]],["08:20 am • 09:00 am","Lesson 1: Option A Test Year X","AV Room",["X","Frere","Napier","Papworth","Streeton","Academics"]],["09:45 am 11:15 am","O Level Award Ceremony For Year Xl & FYs only &","Lecture Theatre",["XI","FY","Frere","Napier","Papworth","Streeton","Academics","Misc"]],["11:15 am 12:15 pm","Society Fair/ Bake Sale","",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Society Events","Misc"]],["12:15 pm 01:15 pm","Language Class for AICE Students","",["FY","SY","Frere","Napier","Papworth","Streeton","Academics"]],["03:00 pm 03:45 pm","Boys Swimming Classes","",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Sports","Society Events"]],["04:00 pm 04:45 pm","Girls Swimming Classes","",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Sports","Society Events"]]],"Saturday":[["08:00 am 08:45 am","Inter House Netball Tournament A Level Girls Free vs. Streeton","Netball Court",["FY","SY","Frere","Streeton","Sports"]],["08:00 am 09:00 am","Inter-House Basketball Tournament O Level Boys Papworth vs. Streeton","Basketball Court",["X","XI","Papworth","Streeton","Sports"]],["08:00 am 09:00 am","Inter House Football Tournament A Level Boys Free vs. Napier","College Section Field",["FY","SY","Frere","Napier","Sports"]],["08:00 am 03:00 pm","U-15 & U-17 Basketball Tournament","Reflection School, Korangi.",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Sports","Misc"]],["08:50 am 09:35 am","Inter House Netball Tournament A Level Girls Papworth vs. Napier","Netball Court",["FY","SY","Napier","Papworth","Sports"]],["09:00 am 10:00 am","Inter-House Basketball Tournament O Level Boys Napier vs. Frere","Basketball Court",["X","XI","Frere","Napier","Sports"]],["09:00 am 10:00 am","Inter House Football Tournament : A Level Boys Streeton vs. Papworth","College Section Field",["FY","SY","Papworth","Streeton","Sports"]]],"Sunday":[]}

const DAYS = ["All", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const COLORS = ["#a9a9eb", "#dba2c6", "#d69696", "#f5a97d", "#fcd2a7",    "#f7d8c5", "#a57555", "#9ff4dc"];
const gCOLORS = ["#ffa455", "#ffdb5d", "#c6d6a7", "#b64b1d","#431d40" ]//Grade Colors
const hCOLORS = ["#d6b983", "#e08580", "#6f7bcb", "#a4dff8", "#86b588"] //House Colors
const TOGGLE_COLORS = ["#d9ffc9", "#ff9e94","#b3d4e6", "#fff396", "#1a143b"]
const TOGGLES = ["Society Events", "Academics", "Sports", "Misc", "All_t"]
const GRADE_LIST = ["All_g","X", "XI", "FY", "SY"]
const HOUSE_LIST = ["All Houses", "Frere", "Napier", "Papworth", "Streeton"]


const TOGGLE_COLOR_MAP = {
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


function master_filter(tbl, type) {
var filtered_timetable = {
  "Monday": [],
  "Tuesday": [],
  "Wednesday": [],
  "Thursday": [],
  "Friday": [], 
  "Saturday": [],
  "Sunday": []
}
var GRADE_LIST = ["All_g","X", "XI", "FY", "SY"] //idek why this is needed, website breaks without it

if (type == "toggle") {
  toggle_filters = filters.filter(x => !HOUSE_LIST.includes(x)) // Removes all houses from the list so it only has toggles and grades
  toggle_filters = toggle_filters.filter(x => !GRADE_LIST.includes(x)) // Removes all grades from the list so it only has toggles
  var target = toggle_filters
}

else if (type == "grade") {
  var TOGGLES_LIST = ["Society Events", "Academics", "Sports", "Misc"]
  var grade_filters = filters.filter(x => !HOUSE_LIST.includes(x)) // Removes all houses from the list so it only has toggles and grades
  grade_filters = grade_filters.filter(x => !TOGGLES_LIST.includes(x)) // Removes all toggles from the list so it only has grades
  var target = grade_filters

  if (grade_filters.includes("All_g")) {
      return tbl;
  }
}
else if (type == "house") {
  var TOGGLES_LIST = ["Society Events", "Academics", "Sports", "Misc"]
  var house_filters = filters.filter(x => !GRADE_LIST.includes(x)) // Removes all grades from filters so list only includes houses and toggles
  house_filters = house_filters.filter(x => !TOGGLES_LIST.includes(x)) // Removes all toggles from filters so list only includes houses
  var target = house_filters
  if (house_filters.includes("All Houses")) {
      return tbl; // Would change nothing if no houses filtered
  }
}

for (var i = 1; i < 8; i++) { // Removes all the events not for a specifc house
  for (var j = 0; j < tbl[DAYS[i]].length; j++) {
      var found = target.some(r => tbl[DAYS[i]][j][3].indexOf(r) >= 0)
      if (found) {
          filtered_timetable[DAYS[i]] = filtered_timetable[DAYS[i]].concat([tbl[DAYS[i]][j]])
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
  
      var row = full_tbl.insertRow(0); //Adds Heading to the table [107 till 118]
      row.classList.add('firstrow');
      var cell10 = row.insertCell(0);
      var cell20 = row.insertCell(1);
      var cell30 = row.insertCell(2);
  
      cell20.innerHTML = "Time";
      cell10.innerHTML = "Event";
      cell30.innerHTML = "Location";
      document.getElementById("daytext").style.backgroundColor = COLORS[day] //Sets color of the day selector
      document.getElementById("day_lb").style.backgroundColor = COLORS[day]
      document.getElementById("day_rb").style.backgroundColor = COLORS[day]
  }
  
  
  var table = document.getElementById("table-body");
  var myStringArray = filtered_timetable[DAYS[day]];
  var arrayLength = myStringArray.length;
  
  for (var i = 0; i < arrayLength; i++) {
  
      var row = table.insertRow(table.rows.length);
  
      if (i == 0 && clear) { //For the day headings in All
          console.log(i)
          var cell4 = row.insertCell(0); // The day headings, only used for all
          cell4.rowSpan = arrayLength
          cell4.innerHTML = DAYS[day];
          var cell1 = row.insertCell(1);
          var cell2 = row.insertCell(2);
          var cell3 = row.insertCell(3);
  
      }
  
      else { //For normal cases without the day headings
          var cell1 = row.insertCell(0);
          var cell2 = row.insertCell(1);
          var cell3 = row.insertCell(2);
      }
  
      cell1.innerHTML = myStringArray[i][0];
      cell2.innerHTML = myStringArray[i][1];
      cell3.innerHTML = myStringArray[i][2];
  
      // Proof of Concept,    when an event is under two filters, the "first" one decides color (first in google sheet)
      cell1.style.background = TOGGLE_COLOR_MAP[myStringArray[i][3].filter(x => !GRADE_LIST.includes(x)).filter(x => !HOUSE_LIST.includes(x))[0]]; 
      cell2.style.background = TOGGLE_COLOR_MAP[myStringArray[i][3].filter(x => !GRADE_LIST.includes(x)).filter(x => !HOUSE_LIST.includes(x))[0]]; 
      cell3.style.background = TOGGLE_COLOR_MAP[myStringArray[i][3].filter(x => !GRADE_LIST.includes(x)).filter(x => !HOUSE_LIST.includes(x))[0]]; 
  }
  selected_day = day; // So the rest of the code knows the day was shifted 
}

function All(a) {
  Clear(); // First clears everything, except the headings of the table

  var table = document.getElementById("events-table"); //Clears the table headings
  var rowcount = table.rows.length;
  for (var i = rowcount - 1; i >= 0; i--) {
      table.deleteRow(i);
  }
  
  var row = table.insertRow(0); // Adds the headings back (needed because of the additional 'Day' column)
  row.classList.add('firstrow');
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);

  cell1.innerHTML = "Day";
  cell2.innerHTML = "Event";
  cell3.innerHTML = "Time";
  cell4.innerHTML = "Location";
  
  for (var i = 1; i < 8; i++) {
      Add(i, true); //True means the days will not be cleared
  }
  selected_day = a
  document.getElementById("daytext").style.backgroundColor = COLORS[0] //Sets color of the day selector for All
  document.getElementById("day_lb").style.backgroundColor = COLORS[0]
  document.getElementById("day_rb").style.backgroundColor = COLORS[0]

}

function load() { //Triggered on page loading
  var date = new Date(); //Gets the date
  var day = date.getDay();
  if (day == 0) { //Accounts for prior oafishness, let's patch that out
      day = 7 //sunday is the first (0) day according to new Date(), but 7 for us
  }
      Clear() 
      Add(day);
      var text = document.getElementById("daytext")
      text.innerHTML = DAYS[day].slice(0,3) //Abbreviations, Monday ---> Mon, All ---> All
      swap_grade(0) // All grades selected
      swap_house(0) // All houses selected
      Toggle(4) // 4 is all of them selected
  }
  
  function swap_grade(grade) {
  var GRADE_LIST = ["All_g","X", "XI", "FY", "SY"]

  filters = filters.filter(x => !GRADE_LIST.includes(x)) // Removes any grade flags present

  
  if (grade == 0) {
      filters = filters.concat(["All_g", "X", "XI", "FY", "SY"]) //Adds them all back (0 = All grades)

  }
  else {
      filters = filters.concat(GRADE_LIST[grade]) //Adds specific grade back
  }
  
  filtered_timetable = master_filter(TIMETABLE, "house")
  filtered_timetable = master_filter(filtered_timetable, "toggle")
  filtered_timetable = master_filter(filtered_timetable, "grade")

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
  document.getElementById("daytext").style.color = "#333333"
  document.getElementById("day_lb").style.color = "#333333"
  document.getElementById("day_rb").style.color = "#333333"
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
console.log(grade)
if (grade>2) {
  document.getElementById("gradetext").style.color = "#fefefe"
  document.getElementById("grade_lb").style.color= "#fefefe"
  document.getElementById("grade_rb").style.color= "#fefefe"
}
else{
  document.getElementById("gradetext").style.color = "#333333"
  document.getElementById("grade_lb").style.color= "#333333"
  document.getElementById("grade_rb").style.color= "#333333"
}
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
filtered_timetable = master_filter(TIMETABLE, "grade")
filtered_timetable = master_filter(filtered_timetable, "toggle")
filtered_timetable = master_filter(filtered_timetable, "house")
Clear()
if (selected_day == 0) {
  All(0)
}
else {
  Add(selected_day)
}


document.getElementById("housetext").style.backgroundColor = hCOLORS[house]


/* If you ever need to selectivel change background color of filters
if (house == 0 || house==3) {
  document.getElementById("housetext").style.color = "#333333";
  document.getElementById("house_lb").style.color = "#333333"
  document.getElementById("house_rb").style.color = "#333333"
}
else {
  document.getElementById("housetext").style.color = "#fefefe";
  document.getElementById("house_lb").style.color = "#fefefe"
  document.getElementById("house_rb").style.color = "#fefefe"
}
*/
document.getElementById("house_lb").style.backgroundColor = hCOLORS[house]
document.getElementById("house_rb").style.backgroundColor = hCOLORS[house]
}

function Toggle(n) {

filters = filters.filter(x => !TOGGLES.includes(x))
for (var i = 0; i < 5; i++) {
  document.getElementById(TOGGLES[i]).style.backgroundColor="#cccccc" // Switches all toggles off, including top one

  if (n > 3) { //Switches all toggles back on
      document.getElementById(TOGGLES[i]).style.backgroundColor=TOGGLE_COLORS[i] //Switches all toggles on, including top
      document.getElementById("All_t").style.color = "#fefefe"
      filters = filters.concat(TOGGLES[i]) //Ads all toggles to list
}
  else {
      document.getElementById(TOGGLES[n]).style.backgroundColor=TOGGLE_COLORS[n] //Switches one toggle on
      filters = filters.filter(x => !TOGGLES.includes(x))
      document.getElementById("All_t").style.color = "#333333";
      filters = filters.concat(TOGGLES[n])
  
  }
}

filtered_timetable = master_filter(TIMETABLE, "house")
filtered_timetable = master_filter(filtered_timetable, "grade")
filtered_timetable = master_filter(filtered_timetable, "toggle")
Clear()
if (selected_day == 0) {
  All(0)
}
else {
  Add(selected_day)
}    
}