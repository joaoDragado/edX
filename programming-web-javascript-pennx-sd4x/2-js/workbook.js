
/*
// Add the current date time on the html page



*/
// Change the background color of all elements with class="example":
/*
var x = document.getElementsByClassName("example");
var i;

for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "red";
}

// or
for (let elem of x) {
    elem.style.backgroundColor = "red";
} 
*/

/*
// retrieve & extract  of present date
let date = new Date();
s = date.toString().split(' ', 4).join(' ');
console.log(s);

*/

let date = new Date();
s = date.toString().slice(0,10);
console.log(s);
