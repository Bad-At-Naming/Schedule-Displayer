function mod(n, m) {
  return ((n % m) + m) % m;
}

// Make a "filter_toggles" function. Note that this must be additive
const TIMETABLE = {
  "Monday": [["-", "FY Test Week Begins", "-", ["Frere", "Napier", "Papworth", "Streeton", "FY", "Academics"]], ["07:30 am - 07:45 am", "No School Assembly extended first lesson throughout the week", "-", ["Frere", "Napier", "Papworth", "Streeton", "X", "XI", "FY", "SY", "Misc"]], ["06:30 am - 07:25 am", "Inter House Football Tournament for A Level Boys", "College Section Field", ["All_Houses", "FY", "SY", "Sports"]], ["06:50 am - 07:25 am", "Inter House Basketball Trials for A Level A Girls", "Basketball Court", ["All_Houses", "FY", "SY", "Sports"]], ["10:45 am - 11:15 am", "Shortlisting of Soloist for Milad", "Lecture Theatre", ["Frere", "Napier", "Papworth", "Streeton", "X", "XI", "FY", "SY", "Misc"]], ["10:45 am - 11:15 am", "Dramatic Society: Rehearsal for KGRT '22", "Room S1-S4, Conf. Room", ["Frere", "Napier", "Papworth", "Streeton", "X", "XI", "FY", "SY", "Society Events"]], ["12:00 pm - 02:00 pm", "FY Biology Practical ", "Biology Lab 1, 2 &3", ["Frere", "Napier", "Papworth", "Streeton", "FY", "Academics"]], ["01:30 pm - 02:00 pm", "Distribution of CAIE Certificates May/ June 2022 [Year 11]", "Auditorium", ["Frere", "Napier", "Papworth", "Streeton", "XI", "Academics"]], ["01:40 pm - 02:20 pm", "Dramatic Society: Rehearsal for KGRT '22 ", "Room S1-S4, Conf. Room", ["Frere", "Napier", "Papworth", "Streeton", "X", "XI", "FY", "SY", "Society Events"]], ["01:40 pm - 02:30 pm", "Dramatic Society: Play Practice ", "Room N4", ["Frere", "Napier", "Papworth", "Streeton", "X", "XI", "FY", "SY", "Society Events"]], ["01:45 pm - 02:30 om", "Boys Football Team Practice ", "College Section Field", ["All_Houses", "X", "XI", "FY", "SY", "Sports"]], ["01:45 pm - 02:30 pm", "Inter House Basketball Trials for A Level Girls ", "Basketball Court", ["All_Houses", "FY", "SY", "Sports"]], ["01:45 pm - 02:45 pm", "Peer Tutoring Society: SAT English ", "Meeting Room", ["Frere", "Napier", "Papworth", "Streeton", "FY", "Academics", "Society Events"]], ["01:45 pm - 02:45 pm", "Peer Tutoring Society Session [Year 11]: Add Math ", "Conference Room", ["Frere", "Napier", "Papworth", "Streeton", "XI", "Academics", "Society Events"]], ["01:45 pm - 03:30 pm", "Debating Society: Parliamentary Debate Trials ", "Lecture Theatre", ["Frere", "Napier", "Papworth", "Streeton", "X", "XI", "FY", "SY", "Society Events"]], ["01:45 pm - 03:30 pm", "Indoor Rowing ", "Gymnasium", ["Frere", "Napier", "Papworth", "Streeton", "X", "XI", "FY", "SY", "Society Events", "Sports"]]],
  "Tuesday": [["06:30 am 07:25 am", "Inter House Football Tournament for A Level Boys [Frere vs. Papworth]", "College Section Field", ["Frere", "Papworth", "FY", "SY", "Sports"]], ["06:50 am 07:25 am", "Inter House Basketball Trials for A Level Girls [Papworth]", "Basketball Court", ["Papworth", "FY", "SY", "Sports"]], ["10:45 am 11:15 am", "Shortlisting of Soloist for Milad Speech [Year 10 &11]", "Lecture Theatre", ["Frere", "Napier", "Papworth", "Streeton", "X", "XI", "Misc"]], ["10:45 am 11:15 am", "Dramatic Society: Rehearsal for KGRT '22", "Room S1-S4, Conf. Room", ["Society Events", "X", "XI", "FY", "SY", "Frere", "Napier", "Papworth", "Streeton"]], ["10:45 am 11:15 am", "Throwball Trials for O Level Girls", "College Section Field", ["Frere", "Napier", "Papworth", "Streeton", "X", "XI", "Sports"]], ["12:00 pm 02:00 pm", "Practical [Chemistry FY B1, B2 & B3]", "Chemistry Lab 1, 2 &3", ["FY", "Academics", "Frere", "Napier", "Papworth", "Streeton"]], ["01:35 pm 02:30 pm", "Master Class: Sociology X-C & D", "Room S6", ["X", "Academics", "Frere", "Napier", "Papworth", "Streeton"]], ["01:40 pm 02:20 pm", "Dramatic Society: Rehearsal for KGRT '22", "Room S1-S4, Conf. Room", ["Society Events", "X", "XI", "FY", "SY", "Frere", "Napier", "Papworth", "Streeton"]], ["01:40 pm 02:30 pm", "Dramatic Society: Play Practice", "Meeting Room", ["Society Events", "X", "XI", "FY", "SY", "Frere", "Napier", "Papworth", "Streeton"]], ["01:45 pm 02:30 pm", "Inter House Basketball Trials for A Level Girls [Napier]", "Basketball Court", ["Napier", "FY", "SY", "Sports"]], ["01:45 pm 02:45 pm", "Peer Tutoring Society Session [Year 10]: Add Math, Chemistry, Islamiyat", "Lecture Theatre", ["X", "Society Events", "Academics", "All_Houses"]], ["01:45 pm 03:00 pm", "Boys Football Team Practice", "College Section Field", ["Frere", "Napier", "Papworth", "Streeton", "X", "XI", "FY", "SY", "Sports"]], ["01:45 pm 03:30 pm", "Indoor Rowing", "Gymnasium", ["Frere", "Napier", "Papworth", "Streeton", "X", "XI", "FY", "SY", "Sports"]]],
  "Wednesday": [["06:30 am - 07:25 am", "Inter House Football Tournament for A Level Boys [Napier vs. Streeton]", "College Section Field", ["Napier", "Streeton", "FY", "SY", "Sports"]], ["10:45 am - 11:15 am", "Shortlisting of Soloist for Milad [Year 12 &13]", "Lecture Theatre", ["Frere", "Napier", "Papworth", "Streeton", "FY", "SY", "Misc"]], ["10:45 am - 11:15 am", "Throwball Trials for O Level Girls", "College Section Field", ["Frere", "Napier", "Papworth", "Streeton", "X", "XI", "Sports"]], ["10:45 am - 11:15 am", "Dramatic Society: Rehearsal for KGRT '22", "Room S1-S4, Conf. Room", ["Frere", "Napier", "Papworth", "Streeton", "X", "XI", "FY", "SY", "Society Events"]], ["12:00 pm - 02:00 pm", "Practical [Chemistry FYA1, A2 & A3]", "Chemistry Lab 1, 2 &3", ["All_Houses", "FY", "Academics"]], ["01:40 pm - 02:20 pm", "Dramatic Society: Rehearsal for KGRT '22", "Room S1-S4, Conf. Room", ["Frere", "Napier", "Papworth", "Streeton", "X", "XI", "FY", "SY", "Society Events"]], ["01:40 pm - 02:30 pm", "Dramatic Society: Play Practice", "Room N4", ["Frere", "Napier", "Papworth", "Streeton", "X", "XI", "FY", "SY", "Society Events"]], ["01:45 pm - 02:30 pm", "Boys Football Team Practice", "College Section Field", ["Frere", "Napier", "Papworth", "Streeton", "X", "XI", "FY", "SY", "Sports"]], ["01:45 pm - 02:45 pm", "Peer Tutoring Society: SAT Mathematics", "Meeting Room", ["Academics", "Society Events", "FY", "All_Houses"]], ["01:45 pm - 02:45 pm", "Peer Tutoring Society Session: PS History [Year 10], Chemistry [Year 11]", "Lecture Theatre", ["Academics", "Society Events", "X", "XI", "All_Houses"]], ["01:45 pm - 02:45 pm", "Empowerment Society X Dr. Afiya Session", "AV Room", ["Frere", "Napier", "Papworth", "Streeton", "X", "XI", "FY", "SY", "Society Events"]], ["01:45 pm - 02:45 pm", "Robotics & Engineering Society: Robotics Session for Beginners", "ICT Lab", ["Frere", "Napier", "Papworth", "Streeton", "X", "XI", "FY", "SY", "Society Events"]], ["01:45 pm - 03:30 pm", "Indoor Rowing", "Gymnasium", ["Frere", "Napier", "Papworth", "Streeton", "X", "XI", "FY", "SY", "Society Events", "Sports"]]],
  "Thursday": [["06:30 am 07:25 am", "Football Team Trials for O & A Level Girls [Free & Streeton]", "College Section Field", ["X", "XI", "FY", "SY", "Frere", "Streeton", "Sports"]], ["10:45 am 11:15 am", "Shortlisting of Soloist for Milad Speech [Year 12 &13]", "Lecture Theatre", ["FY", "SY", "Frere", "Napier", "Papworth", "Streeton", "Misc"]], ["10:45 am 11:15 am", "Dramatic Society: Rehearsal for KGRT'22", "Room S1-S4, Conf. Room", ["X", "XI", "FY", "SY", "Frere", "Napier", "Papworth", "Streeton", "Society Events"]], ["10:45 am 11:15 am", "Throwball Trials for O Level Girls", "College Section Field", ["XI", "X", "Frere", "Streeton", "Papworth", "Napier", "Sports"]], ["12:00 pm 02:00 pm", "Practical [Biology FYD1 & D2|", "Biology Lab 2 &3", ["FY", "Frere", "Napier", "Papworth", "Streeton", "Academics"]], ["01:30 pm 02:30 pm", "Counselling Department: Information Session for University of Kent, UK O", "Meeting Room", ["X", "XI", "FY", "SY", "Frere", "Napier", "Papworth", "Streeton", "Academics"]], ["01:35 pm 02:30 pm", "Master Class: Sociology X-C &D", "Room S6", ["X", "Frere", "Napier", "Papworth", "Streeton", "Academics"]], ["01:40 pm 02:20 pm", "Extra Class: Computer Science XI-B &D", "ICT Lab 1", ["XI", "Frere", "Napier", "Papworth", "Streeton", "Academics"]], ["01:40 pm 02:30 pm", "Extra Class: Economics X-D", "Room S7", ["X", "Frere", "Napier", "Papworth", "Streeton", "Academics"]], ["01:40 pm 02:20 pm", "Dramatic Society: Rehearsal for KGRT '22", "Room S1-S4, Conf. Room", ["X", "XI", "FY", "SY", "Frere", "Napier", "Papworth", "Streeton", "Society Events"]], ["01:40 pm 02:30 pm", "Dramatic Society: Play Practice", "Room N4", ["X", "XI", "FY", "SY", "Frere", "Napier", "Papworth", "Streeton", "Society Events"]], ["01:45 pm 02:40 pm", "Inter House Basketball Tournament for A Level Boys [Frere VS. Papworth]", "Basketball Court", ["FY", "SY", "Frere", "Papworth", "Sports"]], ["01:45 pm 02:45 pm", "Peer Tutoring Society Session: PS Geography & Maths 10], Economics [11]", "Lecture Theatre", ["X", "XI", "Frere", "Napier", "Papworth", "Streeton", "Academics", "Society Events"]], ["01:45 pm 03:00 pm", "Boys Football Team Practice", "College Section Field", ["X", "XI", "FY", "SY", "Frere", "Napier", "Papworth", "Streeton", "Sports"]], ["01:45 pm 03:30 pm", "Indoor Rowing", "Gymnasium", ["X", "XI", "FY", "SY", "Frere", "Napier", "Papworth", "Streeton", "Sports", "Society Events"]]],
  "Friday": [["06:30 am 07:25 am", "Football Team Trials for O & A Level Girls [Napier & Papworth]", "College Section Field", ["X", "XI", "FY", "SY", "Napier", "Papworth", "Sports"]], ["07:30 am 08:00 am", "Milad Practice Year 10", "AV Room", ["X", "Frere", "Napier", "Papworth", "Streeton", "Misc"]], ["07:30 am 08:00 am", "Milad Practice Year 11", "Lecture Theatre", ["XI", "Frere", "Napier", "Papworth", "Streeton", "Misc"]], ["07:30 am 08:00 am", "Milad Practice Year 12", "Front Foyer", ["FY", "Frere", "Napier", "Papworth", "Streeton", "Misc"]], ["07:30 am 08:00 am", "Milad Practice Year 13", "Auditorium", ["SY", "Frere", "Napier", "Papworth", "Streeton", "Misc"]], ["10:15 am 10:40 am", "Dramatic Society: Rehearsal for KGRT '22", "Room S1-S4, Conf. Room", ["X", "XI", "FY", "SY", "Frere", "Napier", "Papworth", "Streeton", "Society Events"]], ["12:10 pm 12:50 pm", "Dramatic Society: Rehearsal for KGRT '22", "Room S1-S4, Conf. Room", ["X", "XI", "FY", "SY", "Frere", "Napier", "Papworth", "Streeton", "Society Events"]], ["02:45 pm 03:30 pm", "Extra Class: Chemistry X-A2 &D2", "Online", ["X", "Frere", "Napier", "Papworth", "Streeton", "Academics"]], ["03:30 pm 04:30 pm", "Peer Tutoring Society Session [Year 10 &11]: Physics", "Online", ["X", "XI", "Frere", "Napier", "Papworth", "Streeton", "Academics", "Society Events"]]]
}
const DAYS = ["All", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const COLORS = ["#9f2858", "#e35c33", "#35713a", "#4053b0", "#8232a4", "#bd8f26"];
const gCOLORS = ["#345beb", "#1f9168", "#3f798f", "#8f3f88", "#b5a953"]
const hCOLORS = ["#f5b642", "#bd0000", "#05008a", "#4edbe6", "#01470e"]
const TOGGLES = ["Society Events", "Academics", "Sports", "Misc"]

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

function filter_toggle(tbl) {
  var HOUSE_LIST = ["All Houses", "Frere", "Napier", "Papworth", "Streeton"]
  var GRADE_LIST = ["All_g", "X", "XI", "FY", "SY"]
  toggle_filters = filters.filter(x => !HOUSE_LIST.includes(x))
  toggle_filters = toggle_filters.filter(x => !GRADE_LIST.includes(x))
  console.log(toggle_filters)
  var filtered_timetable = {
    "Monday": [],
    "Tuesday": [],
    "Wednesday": [],
    "Thursday": [],
    "Friday": []
  }
  
  for (var i = 1; i < 6; i++) {
    for (var j = 0; j < tbl[DAYS[i]].length; j++) {
      var found = toggle_filters.some(r => tbl[DAYS[i]][j][3].indexOf(r) >= 0)
      if (found) {
        filtered_timetable[DAYS[i]] = filtered_timetable[DAYS[i]].concat([tbl[DAYS[i]][j]])
      }
      else{
        console.log(tbl[DAYS[i]][j][3])
      }
    }
  }
  return filtered_timetable
}



function filter_grade(tbl) {
  var HOUSE_LIST = ["All Houses", "Frere", "Napier", "Papworth", "Streeton"]
  var TOGGLES_LIST = ["Society Events", "Academics", "Sports", "Misc"]
  var grade_filters = filters.filter(x => !HOUSE_LIST.includes(x))
  grade_filters = grade_filters.filter(x => !TOGGLES_LIST.includes(x))
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
  }
  return filtered_timetable
}

function filter_house(tbl) {
  var GRADE_LIST = ["All_g","X", "XI", "FY", "SY"]
  var TOGGLES_LIST = ["Society Events", "Academics", "Sports", "Misc"]
  var house_filters = filters.filter(x => !GRADE_LIST.includes(x))
  house_filters = house_filters.filter(x => !TOGGLES_LIST.includes(x))
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

cell2.innerHTML = "Event";
cell1.innerHTML = "Day";
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
  for (var i = 0; i < 4; i++) {
    Toggle(i)
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
document.getElementById("grade_lb").style.backgroundColor = gCOLORS[grade]
document.getElementById("grade_rb").style.backgroundColor = gCOLORS[grade]
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
  text.innerHTML = ["All Houses", "Frere", "Napier", "Papworth", "Streeton"][house]
}

function swap_house(house) {
  var HOUSE_LIST = ["All Houses", "Frere", "Napier", "Papworth", "Streeton"]
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
  document.getElementById("house_lb").style.backgroundColor = hCOLORS[house]
  document.getElementById("house_rb").style.backgroundColor = hCOLORS[house]
}

function Toggle(n) {
  if (document.getElementById(TOGGLES[n]).style.backgroundColor == "rgb(0, 128, 0)") { //On to Off
    document.getElementById(TOGGLES[n]).style.backgroundColor = "#800000"
    filters = filters.filter(x => ![TOGGLES[n]].includes(x))
  }
  
  else{
    document.getElementById(TOGGLES[n]).style.backgroundColor="#008000" //Off to On
    filters = filters.concat(TOGGLES[n])
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
  
