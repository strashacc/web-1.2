
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

function toggleDarkMode() {
    const isDarkMode = document.getElementById('theme-toggle').checked;
    const body = document.body;
    const accordion = document.querySelector('.accordion');
    const containerLogin = document.querySelector('.container-login');
    const loginSection = document.querySelector('#login-section');
    const appSection = document.querySelector('#app-section');

    if (isDarkMode) {
        body.classList.remove('bg-light');
        body.classList.add('bg-dark', 'text-white');

        if (accordion) {
            accordion.classList.add('bg-dark', 'text-white');
        }

        if (containerLogin) {
            containerLogin.classList.add('bg-dark', 'text-white');
        }

        if (loginSection) {
            loginSection.classList.add('bg-dark', 'text-white');
        }

        if (appSection) {
            appSection.classList.add('bg-dark', 'text-white');
        }
    } else {
        body.classList.remove('bg-dark', 'text-white');
        body.classList.add('bg-light');

        if (accordion) {
            accordion.classList.remove('bg-dark', 'text-white');
        }

        if (containerLogin) {
            containerLogin.classList.remove('bg-dark', 'text-white');
        }

        if (loginSection) {
            loginSection.classList.remove('bg-dark', 'text-white');
        }

        if (appSection) {
            appSection.classList.remove('bg-dark', 'text-white');
        }
    }

    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
}

window.onload = function () {
    const darkMode = localStorage.getItem('darkMode');
    const body = document.body;
    const toggle = document.getElementById('theme-toggle');
    const accordion = document.querySelector('.accordion');
    const containerLogin = document.querySelector('.container-login');
    const loginSection = document.querySelector('#login-section');
    const appSection = document.querySelector('#app-section');

    if (darkMode === 'enabled') {
        body.classList.add('bg-dark', 'text-white');
        toggle.checked = true;

        if (accordion) {
            accordion.classList.add('bg-dark', 'text-white');
        }

        if (containerLogin) {
            containerLogin.classList.add('bg-dark', 'text-white');
        }

        if (loginSection) {
            loginSection.classList.add('bg-dark', 'text-white');
        }

        if (appSection) {
            appSection.classList.add('bg-dark', 'text-white');
        }
    } else {
        body.classList.add('bg-light');
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
  
    const setTheme = (theme) => {
      document.body.className = theme;
      if (theme === "bg-dark") {
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
      } else {
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
      }
    };
  
    // Устанавливаем тему при загрузке страницы
    const savedTheme = localStorage.getItem("theme") || "bg-light";
    setTheme(savedTheme);
  
    themeToggleButton.addEventListener("click", () => {
      const currentTheme = document.body.classList.contains("bg-dark") ? "bg-dark" : "bg-light";
      const newTheme = currentTheme === "bg-dark" ? "bg-light" : "bg-dark";
      setTheme(newTheme);
  
      // Сохраняем тему в localStorage
      localStorage.setItem("theme", newTheme);
    });
  });
  