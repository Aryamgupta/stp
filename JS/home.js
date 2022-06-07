let navCounter = 1;

document.getElementById("navButton").onclick = function () {
    if (navCounter == 0) {
        document.getElementsByClassName("secondNavLinkContainer")[0].style.height = "0";
        navCounter = 1;
        document.getElementById("navButton").style.color = "black"
    }
    else {
        document.getElementsByClassName("secondNavLinkContainer")[0].style.height = "13rem"
        navCounter = 0;
        document.getElementById("navButton").style.color = "cyan"
    }
}
