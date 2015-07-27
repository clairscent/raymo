/**
 * Created by jzhu on 7/16/15.
 */

var imageList, imageIndex,movieCategory;

function MovieCategory(title, image, page) {
    this.title = title;
    this.image = image;
    this.page = page;
    this.makeHTML = function() {
        return "<a href='" + page + "'><figure>" + "<img src='" + image + "'>" + "<figcaption>" + title + "</figcaption>" + "</figure>" + "</a>";
    }
}
function nextImage() {
    if(imageIndex == imageList.length){
        imageIndex = 0;
    }
    document.getElementById("imageCarousel").innerHTML = imageList[imageIndex].makeHTML();
    imageIndex+=1;
// Need some code in here using imageList and imageIndex
}

function setup() {
    imageList = [];
    imageList.push(new MovieCategory("Classic Movies", "images/Metropolis.jpg", "classic.html"));
    imageList.push(new MovieCategory("Science Fiction", "images/Plan_9_from_Outer_Space.jpg", "scifi.html"));
    imageList.push(new MovieCategory("Alfred Hitchcock", "images/The_Birds.jpg", "hitchcock.html"));
    imageIndex = 0;
    nextImage();
    setInterval(nextImage, 2000);
}
if (document.getElementById) {
    window.onload = setup;
}
