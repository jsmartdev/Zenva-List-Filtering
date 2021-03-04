/* eslint-disable */

let adventureList = [];
let adventures = document.getElementsByClassName("adventure");
for (i = 0; i < adventures.length; i++) {
    let adventureName = adventures[i].innerHTML;
    adventureList.push(adventureName);
}

let searchBar = document.getElementById("search-bar");
searchBar.addEventListener("keyup", function(event) {
    console.log("Character Input")
    let text = searchBar.value;
    for (i = 0; i < adventures.length; i++) {
        if(adventureList[i].indexOf(text) < 0) {
            adventures[i].style.display = "None";
        }
        else {
            adventures[i].style.display = "Block";
        }
    };    
});