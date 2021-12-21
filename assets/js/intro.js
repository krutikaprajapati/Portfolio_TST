var id = setInterval(frame, 64);
var loading = 0;
// after sometime call to home page
function frame() {
    if (loading == 100) {
        clearInterval(id);
        window.open("home.html", "_self");
    } else {
        loading = loading + 1;
        if (loading == 90) {
            intro.style.animation = "fadeout 1s ease";
        }
    }
}