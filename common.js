onload = liveClock();
//toggle subscription dialog
function subDialog(){
    subOverlay = document.getElementById("sub-overlay");
    subOverlay.classList.toggle("active");
}

function liveClock(){
    const time = new Date();
    date = time.toDateString();
    hours = time.getHours();
    minutes = formatTime(time.getMinutes());
    seconds = formatTime(time.getSeconds());

    document.getElementById("live-clock").innerHTML = date + " " + hours + ":" + minutes + ":" + seconds;
    setTimeout(liveClock, 1000);

    function formatTime(value){
        return (value >= 10 ? value : "0" + value);
    }
}

function validateForm(e){
    let form = document.forms["form"];
    
    if(form["name"].value.charAt(0).toUpperCase() < 'A' || form["name"].value.charAt(0).toUpperCase() > 'Z'){error(1); return;}
    for(let i = 1; i < form["name"].value.length; ++i){
        if(form["name"].value.charAt(i) < 'a' || form["name"].value.charAt(i) > 'z'){error(1); return;}
    }
    if(form["name"].value.charAt(0).toLowerCase() == form["name"].value.charAt(0)){error(2); return;}
    
    function error(x){
        e.preventDefault();
        switch(x){
            case 1: alert("Make sure your name contains only letters.");
            break;
            case 2: alert("Make sure your name starts with an uppercase letter");
            break;
            default: alert("Unexpected Error");
        }
    }
}