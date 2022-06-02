var acc = document.getElementsByClassName("accordion");
var i;



for (i = 0; i < acc.length; i++) {
    // makes accordion start closed
    acc[i].nextElementSibling.style.display = "none";

    acc[i].addEventListener("click", function() {   
    // makes opened panels closed upon click
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
        panel.style.display = "none";
    } 
    // makes active panels inactive and closes them
    else {
        let active = document.querySelectorAll(".accordion.active");
        for (let j = 0; j < active.length; j++){
            active[j].classList.remove("active");
            active[j].nextElementSibling.style.display = "none";
        }
    // opens closed panels
    this.classList.toggle("active");  
    panel.style.display = "block";
    }
});
}