/**
 * Created by jzhu on 7/15/15.
 */
function showHideDetails() {
    'use strict';
    var paragraphs, p;
    var image,i;
    paragraphs = this.parentNode.getElementsByTagName("p");
    for (p = 0; p < paragraphs.length; p+=1) {
        if (paragraphs[p].style.display === "none") {
            paragraphs[p].style.display = "block";
        } else {
            paragraphs[p].style.display = "none";
        }
        // Show or hide paragraphs[p]
    }
    image = this.parentNode.getElementsByTagName("img");
    for(i=0; i<image.length;i+=1) {
        if (image[i].style.display === "none") {
            image[i].style.display = "block";
        } else {
            image[i].style.display = "none";
        }
    }
    this.style.color = "red";
}
function setup() {
    'use strict';
    var films, f, title;
    films = document.getElementsByClassName("film");
    for (f = 0; f < films.length; f+=1) {
        title = films[f].getElementsByTagName("h3")[0];
        title.style.cursor = "pointer";

        title.onclick = showHideDetails;

    }
}
if (document.getElementById) {
    window.onload = setup;
}