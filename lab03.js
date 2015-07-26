/**
 * Created by jzhu on 7/14/15.
 */

function sayHello(){
    var name;
    var target;
    name = document.getElementById("name").value;
    if (name.length === 0) {
        name = "World";
    }
    target = document.getElementById("result");
    target.innerHTML = "Hello, " + name + "!";
    return false;
}
function setup() {
    var button;
    button = document.getElementById("hello"); button.onclick = sayHello;
    document.getElementById("newform").onsubmit = sayHello;

}
if (document.getElementById) {
    window.onload = setup;
}
