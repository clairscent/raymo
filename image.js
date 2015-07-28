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
    imageList.push(new MovieCategory("Raymond's Badminton Game", "images/badminton/4.jpg", "badminton.html"));
    imageList.push(new MovieCategory("Raymond's Different Look", "images/look/4.jpg", "look.html"));
    imageList.push(new MovieCategory("Raymond's Motat Trip", "images/motat/4.jpg", "motat.html"));
    imageList.push(new MovieCategory("Raymond's Piha Trip", "images/piha/5.jpg", "piha.html"));
    imageList.push(new MovieCategory("Raymond On Queen St", "images/queenstreet/4.jpg", "queenst.html"));
    imageList.push(new MovieCategory("Raymond in Ranbow's End", "images/rainbowsend/4.jpg", "ranbowsend.html"));
    imageList.push(new MovieCategory("Raymond in Victoria Park", "images/victoriapark/3.jpg", "victoriapark.html"));
    imageList.push(new MovieCategory("Raymond's Western Spring Trip", "images/westernspring/1.jpg", "westernspring.html"));
    imageIndex = 0;
    nextImage();
    setInterval(nextImage, 2000);
}
if (document.getElementById) {
    window.onload = setup;
}
