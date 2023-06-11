function mod(n, m) { // modulo function, finds the remainder, used to make sure the top three 'selectors' loop back to all from the last option
    return ((n % m) + m) % m;
}
    
var tabletime = {}

const TIMETABLE = {
    "Monday":[["12:00 pm 2:00 pm","Tribute to Mr Simon Glasson","Auditorium",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Academics","Misc"]]],
    "Tuesday":[["07:30 am 07:45 am","Special Assembly","Inner Courtyard",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Academics","Misc"]],["10:45 am 11:15 am","Football Team Practice - Girls","College Section Field",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Sports"]],["01:45 pm 03:00 om","First Aid Society Training Session: Cuts & Bandages","Lecture Theatre",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Society Events"]],["01:45 pm 03:30 pm","Indoor Rowing","Gymnasium",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Sports","Society Events"]],["01:45 pm 04:30 pm","Dramatica Council: Rehearsal for SY Play","Auditorium",["SY","Frere","Napier","Papworth","Streeton","Society Events"]],["02:00 pm 03:30 om","Sports Day Practice Session [Streeton]","College Section Field",["X","XI","FY","SY","Streeton","Sports"]],["03:30 pm 04:30 pm","Football Team Practice O&A Level Boys","College Section Field",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Sports"]]],
    "Wednesday":[["07:30 am 07:45 am","School Assembly","Inner Courtyard",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Academics"]],["10:45 am 11:15 am","Football Team Practice Girls","College Section Field",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Sports"]],["01:45 pm 03:30 pm","Indoor Rowing","Gymnasium",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Sports","Society Events"]],["01:45 pm 03:30 pm","Dramatica Council: Rehearsal for FY Play","Teaching Hall",["FY","Frere","Napier","Papworth","Streeton","Society Events"]],["02:00 pm 03:30 pm","Sports Day Practice Session [Napier]","College Section Field",["X","XI","FY","SY","Napier","Sports"]],["03:00 pm 06:45 pm","🌐 GRAMA Day 1 🌐","Auditorium",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Society Events","Misc"]],["03:30 pm 04:30 pm","Football Team Practice 0&A Level Boys","Auditorium",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Sports"]],["04:00 pm 05:30 pm","Dramatica Council: Rehearsal for SY Play","College Section Field",["SY","Frere","Napier","Papworth","Streeton","Society Events"]]],
    "Thursday":[["07:30 am 07:45 am","House Registration","Respective House Areas",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Academics","Misc"]],["10:45 am 11:15 am","Football Team Practice Girls","College Section Field",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Sports"]],["01:45 pm 02:30 pm","Extra Class: World Geography [X-B, XI-D, FY-A, SY-A]","Room S1 & S2",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Academics"]],["01:45 pm 03:30 pm","Indoor Rowing","Gymnasium",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Sports","Society Events"]],["01:45 pm 03:30 pm","Dramatica Council: Rehearsal for FY Play","Teaching Hall",["FY","Frere","Napier","Papworth","Streeton","Society Events"]],["01:45 pm 04:30 pm","Dramatica Council: Rehearsal for SY Play","Auditorium",["SY","Frere","Napier","Papworth","Streeton","Society Events"]],["02:00 pm 03:30 pm","Sports Day Practice Session [Papworth]","College Section Field",["X","XI","FY","SY","Papworth","Sports"]],["03:00 pm 06:15 pm","🌐 GRAMA Day 2 🌐","College Section",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Society Events","Misc"]],["03:30 pm 04:30 pm","Football Team Practice O&A Level Boys","College Section Field",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Sports"]]],
    "Friday":[["07:30 am 08:00 am","Frere House Assembly","Front Courtyard, Block G",["X","XI","FY","SY","Frere","Academics","Misc"]],["07:30 am 08:00 am","Napier House Assembly","AV Room",["X","XI","FY","SY","Napier","Academics","Misc"]],["07:30 am 08:00 am","Papworth House Assembly","Inner Courtyard, Block K",["X","XI","FY","SY","Papworth","Academics","Misc"]],["07:30 am 08:00 am","Streeton House Assembly","Inner Courtyard, Block G",["X","XI","FY","SY","Streeton","Academics","Misc"]],["12:00 pm 01:30 pm","Indoor Rowing","Gymnasium",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Sports","Society Events"]],["02:45 pm 03:30 pm","Extra Class: Chemistry X-D2","Online",["X","Frere","Napier","Papworth","Streeton","Academics"]],["03:00 pm 06:00 pm","🌐 GRAMA Day 3 🌐","College Section",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Society Events","Misc"]]],
    "Saturday":[["08:00 am 12:30 pm","💼🎓OGS Career Fair🎓💼","Auditorium",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Academics","Misc"]],["08:00 am 11:00 am","Dramatica Council: Rehearsal for FY Play","Teaching Hall",["FY","Frere","Napier","Papworth","Streeton","Society Events"]],["07:30 am 08:15 am","Sports Day Practice Session [Streeton]","College Section Field",["X","XI","FY","SY","Streeton","Sports"]],["08:15 am 09:00 am","Sports Day Practice Session [Frere]","College Section Field",["X","XI","FY","SY","Frere","Sports"]],["09:00 am 09:45 am","Sports Day Practice Session [Napier]","College Section Field",["X","XI","FY","SY","Napier","Sports"]],["09:45 am 10:30 am","Sports Day Practice Session [Papworth]","College Section Field",["X","XI","FY","SY","Papworth","Sports"]],["09:00 am 10:15 am","Extra Class: Literature FY-A&B","AV Room",["FY","Frere","Napier","Papworth","Streeton","Academics"]]],
    "Sunday":[["08:00 am 12:30 pm","💼🎓OGS Career Fair🎓💼","Auditorium",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Academics","Misc"]],["08:00 am 11:00 am","Dramatica Council: Rehearsal for FY Play","Teaching Hall",["FY","Frere","Napier","Papworth","Streeton","Society Events"]],["07:30 am 08:15 am","Sports Day Practice Session [Streeton]","College Section Field",["X","XI","FY","SY","Streeton","Sports"]],["08:15 am 09:00 am","Sports Day Practice Session [Frere]","College Section Field",["X","XI","FY","SY","Frere","Sports"]],["09:00 am 09:45 am","Sports Day Practice Session [Napier]","College Section Field",["X","XI","FY","SY","Napier","Sports"]],["09:45 am 10:30 am","Sports Day Practice Session [Papworth]","College Section Field",["X","XI","FY","SY","Papworth","Sports"]],["09:00 am 10:15 am","Extra Class: Literature FY-A&B","AV Room",["FY","Frere","Napier","Papworth","Streeton","Academics"]]]
}

const DAYS = ["All", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const COLORS = ["#a9a9eb", "#dba2c6", "#d69696", "#f5a97d", "#fcd2a7",    "#f7d8c5", "#a57555", "#9ff4dc"];
const gCOLORS = ["#ffc7d7", "#e1b877", "#dedea4","#a5d3c0", "#c4d5ed" ] //Grade Colors
const hCOLORS = ["#d6b983", "#e08580", "#6f7bcb", "#a4dff8", "#86b588"] //House Colors
const TOGGLE_COLORS = ["#d9ffc9", "#ff9e94","#b3d4e6", "#fff396", "#89ff95"]
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
    document.getElementById(TOGGLES[i]).style.backgroundColor="#888888" // Switches all toggles off, including top one

    if (n > 3) { //Switches all toggles back on
        document.getElementById(TOGGLES[i]).style.backgroundColor=TOGGLE_COLORS[i] //Switches all toggles on, including top
        filters = filters.concat(TOGGLES[i]) //Ads all toggles to list
}
    else {
        document.getElementById(TOGGLES[n]).style.backgroundColor=TOGGLE_COLORS[n] //Switches one toggle on
        filters = filters.filter(x => !TOGGLES.includes(x))
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

