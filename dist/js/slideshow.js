var i = 0;
var images = [];
var time = 3000;
// Image List
images[0] = "./img/project1.jpg";
images[1] = "./img/project2.jpg";
images[2] = "./img/project3.jpg";
images[3] = "./img/project4.jpg";

function changeImg() {
    document.slide.src = images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("changeImg()", time);
}
window.onload = changeImg();