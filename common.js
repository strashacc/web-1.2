<<<<<<< HEAD

window.onload = () => {
    liveClock();
  };

class Sound{
    constructor(src){
        this.sound = document.createElement("audio");
        this.sound.src = src;
        this.sound.setAttribute("preload", "auto");
        this.sound.setAttribute("controls", "none");
        this.sound.style.display = "none";
    }

    play(){
        this.sound.play();
    }
    stop(){
        this.sound.stop();
    }
}
class Navbar {
    constructor(navItems) {
        this.sound = new Sound('sounds/mixkit-modern-click-box-check-1120.wav');
        this.navItems = navItems;
        this.currentIndex = 0;
        this.focusCurrent();
    }

    moveNext() {
        this.navItems[this.currentIndex].getElementsByClassName('nav-link')[0].classList.toggle('active');
        this.currentIndex = (this.currentIndex + 1) % this.navItems.length;
        this.focusCurrent();
    }

    movePrev() {
        this.navItems[this.currentIndex].getElementsByClassName('nav-link')[0].classList.toggle('active');
        this.currentIndex = (this.currentIndex - 1 + this.navItems.length) % this.navItems.length;
        this.focusCurrent();
    }

    focusCurrent() {
        this.navItems[this.currentIndex].focus();
        this.sound.play();
        this.navItems[this.currentIndex].getElementsByClassName('nav-link')[0].classList.toggle('active');
    }

    followLink() {
        this.navItems[this.currentIndex].getElementsByClassName('nav-link')[0].click();
    }
}



const navItems = document.querySelectorAll('.nav-item');
const navbar = new Navbar(navItems);

document.addEventListener('keydown', function(event) {
    switch(event.key){
        case 'ArrowRight':
            navbar.moveNext();
            break;
        case 'ArrowLeft':
            navbar.movePrev();
            break;
        case 'Enter':
            navbar.followLink();
            break;
    }
    console.log(navbar);
});

=======
>>>>>>> edb489a (	modified:   FAQ.html)
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
<<<<<<< HEAD
}
=======
}
>>>>>>> edb489a (	modified:   FAQ.html)
