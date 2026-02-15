
function lightOn() {
	document.getElementById('summary-stats').style.backgroundColor = "#fff9c4"; 
}

// Event handler for turn light off button
function lightOff() {
	document.getElementById('summary-stats').style.backgroundColor = "transparent"; 
}



function mouseOver() {
	document.getElementById("landing").classList.add("highlight"); 
}

function mouseOut() {
	document.getElementById("landing").classList.remove("highlight"); 
}
let isPink = false;
function changeBackground(){
    if (isPink){
        document.body.style.backgroundColor = "white";
    } else {
        document.body.style.backgroundColor = "#fce4ec";
    }
    isPink = !isPink
}