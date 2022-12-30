var btnSectionContainer = document.getElementById("navbar");

var buttons = btnSectionContainer.getElementsByClassName("nav-link");

for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "")
        this.className += "  active";
        console.log("cliock");
    });
}