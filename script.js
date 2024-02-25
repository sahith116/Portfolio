var typed = new Typed(".auto-typer", {
    strings: ['A Developer', 'A Programmer', 'An Engineer'],
    typeSpeed: 200, 
    backSpeed: 200,
    loop:true,
});

var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

function mySubscribers(){
    alert("LOL Thanks for Subscribing!");
}
function navigateToTwitter() {
    window.location.href = "https://twitter.com/Sahi_th77";
}
function navigateToLinkedin(){
    window.location.href = "https://www.linkedin.com/in/sahith-embari-58b46b2b6/";

}
function navigateToInstagram(){
    window.location.href = "https://www.instagram.com/sahith_bunny99/";

}
function navigateToTelegram(){
    window.location.href = "https://www.telegram.me/@sahithbunny";
}

function navigateToFacebook(){
    window.location.href="https://www.facebook.com/bunny.embhari";
}
function myfunction3(){
    alert("Your query has submitted successfully!");
}


