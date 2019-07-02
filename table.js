"use strict";
function myFunction() {
    var table = document.getElementById("mytable");
    var row = table.insertRow(4);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = "Skills";
    cell2.innerHTML = "Experience";
    cell3.innerHTML = "Certified";
}

